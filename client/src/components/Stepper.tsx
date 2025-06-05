import React from "react";
import { ActiveStepper, InActiveStepper, CompleteStepper } from "./icons";

interface Step {
  name: string;
  style?: React.CSSProperties;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  completedSteps?: number[];
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, completedSteps = [] }) => {
  return (
    <div className="flex justify-center items-center mb-12">
      {steps?.map((step, index) => (
        <div key={step.name} className="flex items-center">
          <div className="flex flex-col">
            {completedSteps.includes(index) ? (
              <CompleteStepper className="w-[66px] h-[63.55px]" />
            ) : index <= currentStep ? (
              <ActiveStepper className="w-[66px] h-[63.55px]" />
            ) : (
              <InActiveStepper className="w-[66px] h-[63.55px]" />
            )}
            <span
              className={`text-xs ml-[-14px] mt-4 font-['Poppins'] font-normal text-[18px] leading-[100%] tracking-[1%] text-[#000000]`}
            >
              {step.name}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div style={step.style} className={`h-[3.97px] w-[171.34px] bg-[#02553C80] mb-[32px]`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
