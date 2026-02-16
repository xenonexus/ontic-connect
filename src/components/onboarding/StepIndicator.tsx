import { Check } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  "University Email & ID",
  "Personal Info",
  "Social Media",
  "NPTEL / Certs",
  "Review & Confirm",
];

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {STEPS.map((label, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div className="relative flex w-full items-center justify-center">
                {i > 0 && (
                  <div className="absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2">
                    <div className={`h-full transition-colors duration-300 ${isCompleted || isActive ? "bg-accent" : "bg-border"}`} />
                  </div>
                )}
                <motion.div
                  className={`step-circle relative z-10 ${isCompleted ? "completed" : isActive ? "active" : "upcoming"}`}
                  initial={false}
                  animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
                </motion.div>
              </div>
              <span className={`mt-2 hidden text-center text-xs font-medium md:block ${isActive ? "text-accent" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Step {currentStep} of 5
      </p>
    </div>
  );
};

export default StepIndicator;
