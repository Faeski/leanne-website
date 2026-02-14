"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/shared";

interface StepLevel {
  level: number;
  name: string;
  vitaminAStrength: number; // 1-5 scale for visual bar
  ingredients: string[];
  benefit: string;
}

const stepLevels: StepLevel[] = [
  {
    level: 1,
    name: "AVST 1",
    vitaminAStrength: 1,
    ingredients: ["Retinyl Palmitate", "Vitamine C", "Antioxidanten"],
    benefit: "Instapniveau voor eerste gebruikers - je huid went geleidelijk aan vitamine A",
  },
  {
    level: 2,
    name: "AVST 2",
    vitaminAStrength: 2,
    ingredients: ["Retinyl Palmitate", "Vitamine C", "Antioxidanten", "Botanische extracten"],
    benefit: "Versterkt en verfijnt de huid - zichtbare verbetering van textuur",
  },
  {
    level: 3,
    name: "AVST 3",
    vitaminAStrength: 3,
    ingredients: ["Vitamine A", "Vitamine C", "Antioxidanten", "Peptide"],
    benefit: "Verbeterde veerkracht en textuur - huid wordt steviger",
  },
  {
    level: 4,
    name: "AVST 4",
    vitaminAStrength: 4,
    ingredients: ["Vitamine A", "Vitamine C", "Antioxidanten", "Peptide"],
    benefit: "Pakt fijne lijntjes aan - zichtbare anti-aging resultaten",
  },
  {
    level: 5,
    name: "AVST 5",
    vitaminAStrength: 5,
    ingredients: ["Retinyl Palmitate + Acetate", "Vitamine C", "Antioxidanten", "Peptide"],
    benefit: "Hoogste niveau - maximale anti-aging werking voor langdurige resultaten",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4, ease: "easeOut" as const },
  }),
};

const progressVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

/**
 * StepUpExplainer Component
 * Interactive visualization of Environ's Step-Up vitamin A system
 * Shows how skin gradually adapts to higher concentrations
 */
export function StepUpExplainer() {
  return (
    <Section background="cream">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-display-sm font-semibold text-neutral-900">
            Het Environ Step-Up System
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Vitamine A is essentieel voor een gezonde huid, maar moet geleidelijk worden
            opgebouwd. Het Step-Up System zorgt voor veilige, effectieve resultaten zonder
            irritatie.
          </p>
        </motion.div>

        {/* Progress bar connecting steps */}
        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-[10%] right-[10%] top-1/2 h-1 -translate-y-1/2 bg-neutral-200">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={progressVariants}
              className="h-full origin-left bg-primary-500"
            />
          </div>

          {/* Step indicators on the progress bar */}
          <div className="flex justify-between px-[5%]">
            {stepLevels.map((step, index) => (
              <motion.div
                key={step.level}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white shadow-md"
              >
                {step.level}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-3">
          {stepLevels.map((step, index) => (
            <motion.div
              key={step.level}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              custom={index}
              className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Mobile: Level badge */}
              <div className="mb-3 flex items-center gap-3 lg:hidden">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">
                  {step.level}
                </span>
                <span className="font-medium text-neutral-900">{step.name}</span>
              </div>

              {/* Desktop: Name */}
              <h3 className="hidden text-center font-semibold text-neutral-900 lg:block">
                {step.name}
              </h3>

              {/* Vitamin A strength indicator */}
              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
                  <span>Vitamine A</span>
                  <span className="font-medium">Niveau {step.vitaminAStrength}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-primary-300 to-primary-500"
                    style={{ width: `${step.vitaminAStrength * 20}%` }}
                  />
                </div>
              </div>

              {/* Key ingredients */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {step.ingredients.slice(0, 3).map((ingredient) => (
                    <span
                      key={ingredient}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefit description */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.benefit}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2 text-center"
        >
          <div className="flex items-center gap-2 text-neutral-700">
            <svg
              className="h-5 w-5 text-primary-500"
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
            <span className="font-medium">3-4 maanden per niveau</span>
          </div>
          <p className="text-sm text-neutral-500">
            Je huid bouwt geleidelijk tolerantie op, zonder irritatie of droogheid.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
