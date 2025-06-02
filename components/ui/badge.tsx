import React from 'react';

interface BadgeProps {
  title: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ title, icon }) => {
  return (
    <div className="inline-flex items-center gap-[3.1px] px-2 py-1 bg-[#E0F8F0] text-[#026442] text-[10.84px] rounded-[6.19px] border border-[#026442]/[0.46] font-['Gilroy-Medium'] font-normal leading-[100%]">
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{title}</span>
    </div>
  );
};
