"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CountingNumber } from "@/components/animate-ui/texts/counting-number";
import { ROUTES } from "@/lib/constants";

// The dramatic reveal data
const STATS = {
  bodyHairs: 5_000_000, // Average hairs on human body
  shavesPerYear: 150, // ~3x per week
  yearsShaving: 40, // Age 15-55
  razorCostPerMonth: 15, // Razors + cream
  minutesPerShave: 10,
};

// Calculated lifetime values
const LIFETIME = {
  totalShaves: STATS.shavesPerYear * STATS.yearsShaving, // 6,000
  totalCost: STATS.razorCostPerMonth * 12 * STATS.yearsShaving, // €7,200
  totalHours: Math.round(
    (STATS.minutesPerShave * STATS.shavesPerYear * STATS.yearsShaving) / 60
  ), // 1,000 hours
};

// Laser price for comparison
const LASER_PRICE = {
  from: 395, // Starting price for popular zones
  fullBody: 790, // Full body package
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const labelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" as const },
  },
};

/**
 * LaserCostCalculator Component
 * Dramatic scroll-triggered reveal showing lifetime shaving costs vs laser treatment
 * Design: Refined luxury aesthetic with theatrical number reveals
 */
export function LaserCostCalculator() {
  return (
    <div className="relative py-8">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -left-32 top-3/4 h-80 w-80 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="relative space-y-32 md:space-y-48">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-[0.2em] text-primary-600">
            De rekening
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Hoeveel kost scheren
            <span className="mt-1 block italic text-primary-600">eigenlijk?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-neutral-500">
            Scroll naar beneden voor een ontnuchterende berekening
          </p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
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

        {/* Step 1: Hair Count */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={labelVariants}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            Je lichaam heeft
          </motion.p>
          <motion.div variants={sectionVariants} className="mt-4">
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
            variants={labelVariants}
            className="mt-4 font-display text-2xl italic text-neutral-700 md:text-3xl"
          >
            haren
          </motion.p>
          <motion.p
            variants={labelVariants}
            className="mt-6 text-sm text-neutral-400"
          >
            Gemiddeld aantal haarzakjes op het menselijk lichaam
          </motion.p>
        </motion.div>

        {/* Step 2: Shave Count */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={labelVariants}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            In je leven scheer je
          </motion.p>
          <motion.div variants={sectionVariants} className="mt-4">
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
            variants={labelVariants}
            className="mt-4 font-display text-2xl italic text-neutral-700 md:text-3xl"
          >
            keer
          </motion.p>
          <motion.div
            variants={labelVariants}
            className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4"
          >
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              {STATS.shavesPerYear}× per jaar
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </motion.div>
        </motion.div>

        {/* Step 3: Total Cost - The Pain Point */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={labelVariants}
            className="font-body text-base uppercase tracking-[0.15em] text-neutral-400"
          >
            Dat kost je
          </motion.p>
          <motion.div variants={sectionVariants} className="relative mt-4">
            {/* Dramatic red glow behind the number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-80 rounded-full bg-red-500/10 blur-3xl" />
            </div>
            <CountingNumber
              number={LIFETIME.totalCost}
              fromNumber={0}
              inView
              inViewOnce
              prefix="€"
              transition={{ stiffness: 35, damping: 22 }}
              className="relative font-display text-6xl font-medium tracking-tight text-red-500 md:text-8xl lg:text-9xl"
            />
          </motion.div>
          <motion.div
            variants={labelVariants}
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
            variants={labelVariants}
            className="mt-6 text-sm text-neutral-400"
          >
            Scheermesjes, scheerschuim, aftershave en je kostbare tijd
          </motion.p>
        </motion.div>

        {/* Step 4: The Payoff - Laser Price */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mx-auto max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900 p-8 md:p-12 lg:p-16">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary-500/20 blur-3xl" />
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative text-center">
              <span className="mb-2 inline-block text-sm uppercase tracking-[0.2em] text-neutral-500">
                Of... één keer laser
              </span>

              <div className="mt-4">
                <span className="mr-2 font-body text-xl text-neutral-500">
                  vanaf
                </span>
                <CountingNumber
                  number={LASER_PRICE.from}
                  fromNumber={LIFETIME.totalCost}
                  inView
                  inViewOnce
                  prefix="€"
                  transition={{ stiffness: 25, damping: 18 }}
                  className="font-display text-6xl font-medium tracking-tight text-emerald-400 md:text-8xl"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-6 font-display text-2xl italic text-white md:text-3xl"
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
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
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

              {/* Price tiers */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500"
              >
                <span>Kleine zones vanaf €35</span>
                <span className="hidden text-neutral-700 sm:inline">·</span>
                <span>Full body vanaf €{LASER_PRICE.fullBody}</span>
              </motion.div>
            </div>
          </div>

          {/* Savings highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 text-center md:p-8"
          >
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-emerald-600">
                    Je bespaart
                  </p>
                  <p className="font-display text-2xl font-medium text-emerald-700">
                    €
                    {(LIFETIME.totalCost - LASER_PRICE.fullBody).toLocaleString(
                      "nl-NL"
                    )}
                  </p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-emerald-200 md:block" />
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-emerald-600">
                    Je wint terug
                  </p>
                  <p className="font-display text-2xl font-medium text-emerald-700">
                    {LIFETIME.totalHours} uur
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
