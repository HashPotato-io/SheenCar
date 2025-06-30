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
   styles?: React.CSSProperties[]; 
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, completedSteps = [], styles = []  }) => {
  return (
     <div className="flex justify-center items-center mb-12">
      {steps?.map((step, index) => (
        <div className="flex flex-col items-center" key={step.name}>
          <div key={step.name} className="flex items-center">
            <div className="">
              {completedSteps.includes(index) ? (
                <CompleteStepper className="w-[46px] h-[46px] md:w-[76px] md:h-[73.55px]" />
              ) : index <= currentStep ? (
                <ActiveStepper className="w-[46px] h-[46px] md:w-[76px] md:h-[73.55px]" />
              ) : (
                <InActiveStepper className="w-[46px] h-[46px] md:w-[76px] md:h-[73.55px]" />
              )}

            </div>
            {index < steps.length - 1 && (
              <div style={step.style} className={`h-[2px] md:h-[3.97px] w-[50px] md:w-[120.32px] lg:w-[180.34px] bg-[#02553C80] md:mb-[5px]`} />
            )}
          </div>
           <div
            className="  mt-4 text-left w-full font-normal text-[10px] md:text-base  leading-[100%] tracking-[1%] text-[#000000] "
          >
            <p  style={styles[index]}>
            {step.name}
            </p>
          </div> 
        
        </div>
      ))}
    </div>
  );
};

export default Stepper;
