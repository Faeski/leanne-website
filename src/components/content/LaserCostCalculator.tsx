"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CountingNumber } from "@/components/animate-ui/texts/counting-number";
import { GravityStarsBackground } from "@/components/animate-ui/backgrounds/gravity-stars";
import { ROUTES } from "@/lib/constants";

// The dramatic reveal data
const STATS = {
  bodyHairs: 5_000_000,
  shavesPerYear: 150,
  yearsShaving: 40,
  razorCostPerMonth: 15,
  minutesPerShave: 10,
};

const LIFETIME = {
  totalShaves: STATS.shavesPerYear * STATS.yearsShaving,
  totalCost: STATS.razorCostPerMonth * 12 * STATS.yearsShaving,
  totalHours: Math.round(
    (STATS.minutesPerShave * STATS.shavesPerYear * STATS.yearsShaving) / 60
  ),
};

const LASER_PRICE = {
  from: 395,
  fullBody: 790,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUpDelay = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.25, ease: "easeOut" as const },
  },
};

/**
 * Sticky stacking card wrapper.
 * Each card is sticky at top:0, full viewport height, with increasing z-index
 * so the next card scrolls over the previous one.
 */
function StickyCard({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={`sticky top-0 flex min-h-svh items-center justify-center ${className}`}
      style={{ zIndex: index + 1 }}
    >
      {children}
    </div>
  );
}

/**
 * LaserCostCalculator — Stacking scroll reveal
 * Each stat fills the viewport and sticks while the next card scrolls on top.
 */
export function LaserCostCalculator() {
  return (
    <div className="relative">
      {/* Card 0: Header */}
      <StickyCard index={0} className="bg-[#fafaf9]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={fadeUp}
          className="px-container text-center md:px-container-lg"
        >
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.2em] text-primary-600">
            De rekening
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Hoeveel kost scheren
            <span className="mt-1 block italic text-primary-600">
              eigenlijk?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-neutral-500">
            Scroll naar beneden voor een ontnuchterende berekening
          </p>
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-neutral-300 p-2">
              <motion.div
                initial={{ opacity: 0.5, y: 0 }}
                animate={{ opacity: 1, y: 8 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-2 w-1 rounded-full bg-neutral-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </StickyCard>

      {/* Card 1: 5.000.000 haren */}
      <StickyCard index={1} className="bg-[#f7f5f3]">
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="relative px-container text-center md:px-container-lg"
        >
          <motion.p
            variants={fadeUpDelay}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            Je lichaam heeft
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <CountingNumber
              number={STATS.bodyHairs}
              fromNumber={0}
              inView
              inViewOnce
              transition={{ stiffness: 30, damping: 20 }}
              className="font-display text-6xl font-medium tracking-tight text-neutral-900 md:text-8xl lg:text-9xl"
            />
          </motion.div>
          <motion.p
            variants={fadeUpDelay}
            className="mt-4 font-display text-2xl italic text-neutral-700 md:text-3xl"
          >
            haren
          </motion.p>
          <motion.p
            variants={fadeUpDelay}
            className="mt-6 text-sm text-neutral-400"
          >
            Gemiddeld aantal haarzakjes op het menselijk lichaam
          </motion.p>
        </motion.div>
      </StickyCard>

      {/* Card 2: 6.000 keer */}
      <StickyCard index={2} className="bg-[#f5f0ed]">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary-100/30 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="relative px-container text-center md:px-container-lg"
        >
          <motion.p
            variants={fadeUpDelay}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            In je leven scheer je
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <CountingNumber
              number={LIFETIME.totalShaves}
              fromNumber={0}
              inView
              inViewOnce
              transition={{ stiffness: 40, damping: 25 }}
              className="font-display text-6xl font-medium tracking-tight text-neutral-900 md:text-8xl lg:text-9xl"
            />
          </motion.div>
          <motion.p
            variants={fadeUpDelay}
            className="mt-4 font-display text-2xl italic text-neutral-700 md:text-3xl"
          >
            keer
          </motion.p>
          <motion.div
            variants={fadeUpDelay}
            className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4"
          >
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              {STATS.shavesPerYear}&times; per jaar
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </motion.div>
        </motion.div>
      </StickyCard>

      {/* Card 3: €7.200 — the pain point */}
      <StickyCard index={3} className="bg-[#f2ebe7]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-[500px] rounded-full bg-red-500/8 blur-3xl" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="relative px-container text-center md:px-container-lg"
        >
          <motion.p
            variants={fadeUpDelay}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            Dat kost je
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4">
            <CountingNumber
              number={LIFETIME.totalCost}
              fromNumber={0}
              inView
              inViewOnce
              prefix="&euro;"
              transition={{ stiffness: 35, damping: 22 }}
              className="font-display text-6xl font-medium tracking-tight text-red-500 md:text-8xl lg:text-9xl"
            />
          </motion.div>
          <motion.div
            variants={fadeUpDelay}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-5 py-3 backdrop-blur-sm"
          >
            <svg
              className="h-5 w-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-neutral-600">
              +{" "}
              <CountingNumber
                number={LIFETIME.totalHours}
                fromNumber={0}
                inView
                inViewOnce
                transition={{ stiffness: 50, damping: 30 }}
                className="font-semibold text-neutral-900"
              />{" "}
              uur van je leven
            </span>
          </motion.div>
          <motion.p
            variants={fadeUpDelay}
            className="mt-6 text-sm text-neutral-400"
          >
            Scheermesjes, scheerschuim, aftershave en je kostbare tijd
          </motion.p>
        </motion.div>
      </StickyCard>

      {/* Card 4: The payoff — sticky burgundy section with star particles */}
      {/* Extra scroll height so the sticky card stays visible before resultaten */}
      <div className="relative z-[6]" style={{ height: "200svh" }}>
        <div className="sticky top-0 flex min-h-svh flex-col items-center justify-center overflow-hidden bg-primary-500 px-container md:px-container-lg">
          {/* Warm radial glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary-200/15 blur-[100px]" />
          </div>

          {/* Animated star particles (same as hero) */}
          <GravityStarsBackground
            className="absolute inset-0"
            starsCount={120}
            starsSize={2}
            starsOpacity={0.7}
            starsColor="#f3dcd2"
            glowIntensity={15}
            mouseInfluence={200}
            mouseGravity="attract"
            gravityStrength={70}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-2xl text-center"
          >
            <span className="mb-2 inline-block text-sm uppercase tracking-[0.2em] text-primary-200">
              Of... één keer laser
            </span>

            <div className="mt-4">
              <span className="mr-3 font-body text-2xl text-primary-200/70 md:text-3xl">
                vanaf
              </span>
              <CountingNumber
                number={LASER_PRICE.from}
                fromNumber={LIFETIME.totalCost}
                inView
                inViewOnce
                prefix="&euro;"
                transition={{ stiffness: 25, damping: 18 }}
                className="font-display text-7xl font-medium tracking-tight text-white md:text-9xl"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 font-display text-3xl italic text-white md:text-4xl"
            >
              Nooit meer scheren
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href={ROUTES.HUIDANALYSE}
                className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <span className="flex items-center gap-2">
                  Boek je gratis consult
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-primary-200/60"
            >
              <span>Kleine zones vanaf &euro;35</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>Full body vanaf &euro;{LASER_PRICE.fullBody}</span>
            </motion.div>

            {/* Savings — minimal inline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 0.5 }}
              className="mx-auto mt-12 flex max-w-sm items-center justify-center gap-6 border-t border-white/15 pt-8"
            >
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-primary-200/70">
                  Je bespaart
                </p>
                <p className="mt-1 font-display text-2xl font-medium text-white">
                  &euro;{(LIFETIME.totalCost - LASER_PRICE.fullBody).toLocaleString("nl-NL")}
                </p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-primary-200/70">
                  Je wint terug
                </p>
                <p className="mt-1 font-display text-2xl font-medium text-white">
                  {LIFETIME.totalHours} uur
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
