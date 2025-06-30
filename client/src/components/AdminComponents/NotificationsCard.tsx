import { Heading } from "lucide-react";
import { title } from "process";

interface CardProps {
  icon?: any;
  title: string;
  description: string;
  time: string;
}
export default function NotificationCard({
  icon,
  title,
  description,
  time,
}: CardProps) {
  return (
    <div className="flex gap-4 bg-white p-6 shadow-md justify-between rounded-lg w-[90vw]">
      <img src={icon} alt="image" className="w-8 h-10 md:w-15 md:h-15 object-contain" />

      <div className="flex-1">
        <h1 className="font-regular md:font-semibold text-lg leading-tight">{title}</h1>
        <p className="text-[#585353] md:text-base text-sm">{description}</p>
      </div>

      <p className="text-[#585353] text-xs md:text-sm self-center">{time}</p>
    </div>
  );
}
