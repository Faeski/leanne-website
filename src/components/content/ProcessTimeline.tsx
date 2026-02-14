"use client";

export interface ProcessStep {
  phase: "voor" | "tijdens" | "na";
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
}

const phaseLabels = {
  voor: "Voor",
  tijdens: "Tijdens",
  na: "Na",
};

const phaseColors = {
  voor: "bg-amber-100 text-amber-800 border-amber-200",
  tijdens: "bg-blue-100 text-blue-800 border-blue-200",
  na: "bg-green-100 text-green-800 border-green-200",
};

/**
 * ProcessTimeline Component
 * Shows the treatment process in before/during/after flow
 */
export function ProcessTimeline({ steps, title = "Het Behandelproces" }: ProcessTimelineProps) {
  return (
    <div>
      <h2 className="mb-8 text-center text-display-sm font-semibold">
        {title}
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-neutral-400 md:left-1/2 md:-translate-x-1/2" />

              {/* Content - alternating sides on desktop */}
              <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${phaseColors[step.phase]}`}>
                  {phaseLabels[step.phase]}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-neutral-600">
                  {step.description}
                </p>
                {step.duration && (
                  <p className="mt-1 text-sm text-neutral-500">
                    Duur: {step.duration}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
