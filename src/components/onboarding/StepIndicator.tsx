import { Check } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  "University Email",
  "Credentials",
  "Personal Info",
  "Social Media",
  "Review & Confirm",
];

interface StepIndicatorProps {
  currentStep: number;
  highestCompleted?: number;
  onStepClick?: (step: number) => void;
}

const StepIndicator = ({ currentStep, highestCompleted = 0, onStepClick }: StepIndicatorProps) => {
  const lastStepIndex = STEPS.length - 1;

  const handleClick = (stepNum: number) => {
    if (!onStepClick) return;
    // Allow clicking completed steps or the review step if at least 1 step is completed
    const isCompleted = stepNum < currentStep;
    const isReviewAccessible = stepNum === STEPS.length && highestCompleted >= 1;
    if (isCompleted || isReviewAccessible) {
      onStepClick(stepNum);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {STEPS.map((label, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          const isReviewAccessible = stepNum === STEPS.length && highestCompleted >= 1 && !isActive && !isCompleted;
          const isClickable = isCompleted || isReviewAccessible;

          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div className="relative flex w-full items-center justify-center">
                {i > 0 && (
                  <div className="absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2">
                    <div className={`h-full transition-colors duration-300 ${isCompleted || isActive ? "bg-accent" : "bg-border"}`} />
                  </div>
                )}
                <motion.div
                  className={`step-circle relative z-10 ${isCompleted ? "completed" : isActive ? "active" : isReviewAccessible ? "review-accessible" : "upcoming"} ${isClickable ? "cursor-pointer" : ""}`}
                  initial={false}
                  animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  onClick={() => handleClick(stepNum)}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
                </motion.div>
              </div>
              <span
                className={`mt-2 hidden text-center text-xs font-medium md:block ${isActive ? "text-accent" : isClickable ? "text-accent/70 cursor-pointer" : "text-muted-foreground"}`}
                onClick={() => handleClick(stepNum)}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Step {currentStep} of {STEPS.length}
      </p>
    </div>
  );
};

export default StepIndicator;
