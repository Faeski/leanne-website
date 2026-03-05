"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { GravityStarsBackground } from "@/components/animate-ui/backgrounds/gravity-stars";

interface LaserHeroProps {
  title: string;
  subtitle: string;
  hairSrc: string;
  nohairSrc: string;
}

// Vertex shader — simple passthrough
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Fragment shader — mix hair/nohair via reveal map, then laser glow + chromatic aberration
const fragmentShader = `
  uniform sampler2D uHair;
  uniform sampler2D uNohair;
  uniform sampler2D uRevealMap;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uMouseActive;
  uniform float uImageAspect;
  varying vec2 vUv;

  // Compute "object-cover" UVs — fills container, crops overflow, centered
  vec2 coverUV(vec2 uv) {
    float containerAspect = uResolution.x / uResolution.y;
    vec2 s = vec2(1.0);
    if (containerAspect > uImageAspect) {
      s.y = containerAspect / uImageAspect;
    } else {
      s.x = uImageAspect / containerAspect;
    }
    return (uv - 0.5) / s + 0.5;
  }

  void main() {
    vec2 uv = vUv;
    vec2 imgUv = coverUV(uv);

    // Read reveal map — white = show nohair (screen-space UVs)
    float reveal = texture2D(uRevealMap, uv).r;

    // Mouse position in UV space (0-1)
    vec2 mouse = uMouse / uResolution;
    // Correct aspect ratio for distance calculation
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    float dist = distance(uv * aspect, mouse * aspect);

    // Chromatic aberration near mouse (scaled by active state)
    float aberration = smoothstep(0.22, 0.0, dist) * 0.008 * uMouseActive;
    vec2 dir = normalize(uv - mouse) * aberration;

    // Sample both textures with chromatic aberration (using cover UVs)
    vec2 imgDir = coverUV(uv + dir) - imgUv;
    vec3 hairC  = vec3(texture2D(uHair, imgUv + imgDir).r, texture2D(uHair, imgUv).g, texture2D(uHair, imgUv - imgDir).b);
    vec3 noC    = vec3(texture2D(uNohair, imgUv + imgDir).r, texture2D(uNohair, imgUv).g, texture2D(uNohair, imgUv - imgDir).b);

    // Mix based on reveal
    vec3 color = mix(hairC, noC, reveal);

    // Subtle red tint at the reveal edge (where laser is "burning")
    float edge = smoothstep(0.0, 0.4, reveal) * smoothstep(1.0, 0.6, reveal);
    color += vec3(0.12, 0.02, 0.0) * edge;

    // Laser glow — tint toward warm red-orange, works on both dark and white areas
    vec3 laserColor = vec3(0.79, 0.51, 0.42);
    float glow = smoothstep(0.25, 0.0, dist) * 0.45 * uMouseActive;
    color = mix(color, laserColor, glow);

    gl_FragColor = vec4(color, 1.0);
  }
`;

// Paint shader — draws a soft white circle at the mouse position
const paintVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const paintFragmentShader = `
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uMouseActive;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse / uResolution;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    float dist = distance(uv * aspect, mouse * aspect);

    // Soft circle brush — radius ~0.06 in aspect-corrected UV space
    float brush = smoothstep(0.06, 0.0, dist) * uMouseActive;

    gl_FragColor = vec4(vec3(brush), 1.0);
  }
`;

export function LaserHero({ title, subtitle, hairSrc, nohairSrc }: LaserHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(0);
  const smoothMouseActiveRef = useRef(0);
  const mouseInsideRef = useRef(false);
  const animFrameRef = useRef<number>(0);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect mobile and reduced motion on mount
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const narrow = window.innerWidth < 768;
    setIsMobile(touch || narrow);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Snap smooth position on first entry to avoid slide-in
    if (!mouseInsideRef.current) {
      smoothMouseRef.current = { x, y };
      mouseInsideRef.current = true;
    }
    mouseRef.current = { x, y };
    mouseActiveRef.current = 1;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseInsideRef.current = false;
    mouseActiveRef.current = 0;
  }, []);

  // Three.js setup + animation
  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    rendererRef.current = renderer;

    // --- Load textures ---
    const loader = new THREE.TextureLoader();
    let imageAspect = 16 / 9; // fallback
    const hairTexture = loader.load(hairSrc, (tex) => {
      imageAspect = tex.image.width / tex.image.height;
    });
    const nohairTexture = loader.load(nohairSrc);
    hairTexture.minFilter = THREE.LinearFilter;
    hairTexture.magFilter = THREE.LinearFilter;
    nohairTexture.minFilter = THREE.LinearFilter;
    nohairTexture.magFilter = THREE.LinearFilter;

    // --- Reveal map render target ---
    const revealTarget = new THREE.WebGLRenderTarget(
      container.clientWidth,
      container.clientHeight
    );

    // Paint scene — draws soft circles to reveal map
    const paintScene = new THREE.Scene();
    const paintCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const paintUniforms = {
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouseActive: { value: 0 },
    };
    const paintMaterial = new THREE.ShaderMaterial({
      vertexShader: paintVertexShader,
      fragmentShader: paintFragmentShader,
      uniforms: paintUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });
    const paintGeometry = new THREE.PlaneGeometry(2, 2);
    paintScene.add(new THREE.Mesh(paintGeometry, paintMaterial));

    // --- Main scene ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uHair: { value: hairTexture },
      uNohair: { value: nohairTexture },
      uRevealMap: { value: revealTarget.texture },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uMouseActive: { value: 0 },
      uImageAspect: { value: imageAspect },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      uniforms.uResolution.value.set(w, h);
      paintUniforms.uResolution.value.set(w, h);
      revealTarget.setSize(w, h);
    };

    resize();
    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      // Smooth mouse follow with lerp
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * 0.08;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * 0.08;

      // Fade effect in/out
      smoothMouseActiveRef.current += (mouseActiveRef.current - smoothMouseActiveRef.current) * 0.1;

      const mx = smoothMouseRef.current.x;
      const my = container.clientHeight - smoothMouseRef.current.y; // flip Y for GL

      // Update paint uniforms
      paintUniforms.uMouse.value.set(mx, my);
      paintUniforms.uMouseActive.value = mouseActiveRef.current; // raw (not smoothed) so paint responds instantly

      // Render paint pass to reveal target (accumulates — no clear)
      renderer.setRenderTarget(revealTarget);
      renderer.autoClear = false;
      renderer.render(paintScene, paintCamera);

      // Render main scene to screen
      renderer.setRenderTarget(null);
      renderer.autoClear = true;

      uniforms.uMouse.value.set(mx, my);
      uniforms.uMouseActive.value = smoothMouseActiveRef.current;
      uniforms.uImageAspect.value = imageAspect;
      uniforms.uTime.value += 0.016;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      paintGeometry.dispose();
      paintMaterial.dispose();
      revealTarget.dispose();
      hairTexture.dispose();
      nohairTexture.dispose();
    };
  }, [isMobile, reducedMotion, hairSrc, nohairSrc, handleMouseMove, handleMouseLeave]);

  return (
    <section ref={containerRef} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-white">
      {/* Mobile / reduced-motion fallback — static nohair image */}
      {(isMobile || reducedMotion) && (
        <img
          src={nohairSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Three.js shader canvas — hidden on mobile / reduced-motion */}
      {!isMobile && !reducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />
      )}

      {/* Floating particles overlay — boosted opacity for visibility on light images */}
      <GravityStarsBackground
        className="absolute inset-0 z-[5]"
        starsCount={150}
        starsSize={2.5}
        starsOpacity={0.85}
        starsColor="#c9826a"
        glowIntensity={20}
        mouseInfluence={250}
        mouseGravity="attract"
        gravityStrength={90}
      />

      {/* Text content — constrained to site container width */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[1300px] flex-col items-start justify-start px-container pt-14 md:px-container-lg lg:pt-16">
        {/* Specialist chip with avatar — filled secondary, no outline */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-primary-100 py-1.5 pl-1.5 pr-4">
          <img
            src="/images/placeholder-avatar.svg"
            alt="Laser specialist"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-xs font-medium tracking-wide text-primary-800">
            Gecertificeerd Laser Specialist
          </span>
        </div>

        {/* Hero title — large serif, dominant */}
        <h1 className="max-w-2xl font-display text-[2.75rem] leading-[1.08] font-light tracking-tight text-neutral-900 lg:text-[5rem]">
          {title}
        </h1>

        <p className="mt-5 max-w-md text-body-lg leading-relaxed text-neutral-500">
          {subtitle}
        </p>

        {/* CTA button — primary color */}
        <Link
          href={ROUTES.BOEKEN}
          className="pointer-events-auto mt-8 inline-flex items-center justify-center rounded-full bg-primary-500 px-10 py-4 text-base font-medium text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
        >
          Boek afspraak
          <svg className="ml-2.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* USP row — checkmarks */}
        <div className="mt-8 flex flex-wrap items-start gap-x-6 gap-y-2">
          {["Alle huidtypes", "Gratis consult", "Cooling diode laser"].map((usp) => (
            <div key={usp} className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-3 w-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-neutral-600">{usp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
