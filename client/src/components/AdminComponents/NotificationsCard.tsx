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
      <img src={icon} alt="image" className="w-15 h-15 object-contain" />

      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-[#585353]">{description}</p>
      </div>

      <p className="text-[#585353] text-sm self-center">{time}</p>
    </div>
  );
}
