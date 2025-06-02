import React from "react";

interface DropdownProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder,
  className = "",
}: DropdownProps) {
  return (
    <div className={`relative inline-block w-full ${className}`}>
      <select
        className="appearance-none text-sm  w-full border border-[#171616] rounded-md px-6 py-1  cursor-pointer focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Custom arrow (down chevron) */}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="h-4 w-4 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
