interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="w-full md:w-[399px] h-[250px] md:h-[399px] rounded-[12px] border border-[#AEAEAE] bg-white flex items-center justify-center text-center">
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="text-[48px] md:text-[96.72px] font-[400] leading-[100%] tracking-[-0.01em] text-center font-['Gilroy-SemiBold'] text-[#AF8C32]">
          {value}
        </div>
        <p className="text-[20px] md:text-[26px] font-[400] leading-[100%] tracking-[-0.01em] text-center font-['Gilroy-SemiBold'] text-black">
          {label}
        </p>
      </div>
    </div>
  );
} 