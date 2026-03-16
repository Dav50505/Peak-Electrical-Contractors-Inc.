export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  return (
    <ol
      className={`relative grid grid-cols-1 gap-8 md:grid-cols-${Math.min(steps.length, 5)} ${className}`}
    >
      {steps.map((item, index) => (
        <li key={item.step} className="relative flex flex-col items-start">
          {/* Connecting line between steps on desktop */}
          {index < steps.length - 1 && (
            <div
              className="absolute top-6 left-12 hidden h-0.5 bg-brand-accent md:block"
              style={{ width: "calc(100% + 2rem)" }}
              aria-hidden="true"
            />
          )}

          {/* Step circle */}
          <div className="relative z-10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent font-heading text-lg font-bold text-brand-dark shadow-sm">
            {item.step}
          </div>

          <div>
            <h4 className="font-heading mb-1 text-base font-bold text-brand-blue">
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed text-brand-gray">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
