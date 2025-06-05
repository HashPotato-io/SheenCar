import React from 'react';

interface CustomCheckboxProps {
  label?: string;
  name?: string;
  value?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute opacity-0 cursor-pointer"
        />
        <div className={`w-5 h-5 border rounded ${checked ? 'border-[#003A2F]' : 'border-gray-300'}`}>
          {checked && (
            <div className="absolute inset-0 rounded bg-[#003A2F] flex items-center justify-center">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M10 3L4.5 8.5L2 6" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <span className="font-['Poppins'] font-normal text-sm leading-[100%] text-[#171616]">
        {label}
      </span>
    </label>
  );
}; 