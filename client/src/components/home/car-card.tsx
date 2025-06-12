import { X } from "lucide-react";
import Car1 from "../../assets/car1.png";
import { CarSelection } from "@/lib/types";


interface CarCardProps {
  carSelection: CarSelection;
  onRemove?: (id: number) => void;
  showRemoveButton?: boolean;
  getCarImage: (carSelection: CarSelection) => string;
  getSelectedCarDetails: (carSelection: CarSelection) => any;
  carMakes: any[];
  carModels: any[];
}

export default function CarCard({
  carSelection,
  onRemove,
  showRemoveButton,
  getCarImage,
  getSelectedCarDetails,
  carMakes,
  carModels,
}: CarCardProps) {
  return (
    <div
      className={`rounded-[24px] border shadow-sm overflow-hidden w-[357px] h-[244px] mb-4 ${
        carSelection.make && carSelection.model
          ? "border border-[#000000]"
          : "border-2 border-dashed border-[#000000]"
      } relative group`}
    >
      {/* Remove button (show only if there are more than 2 cars) */}
      {showRemoveButton && (
        <button
          onClick={() => onRemove?.(carSelection.id)}
          className="absolute right-2 top-2 z-10 bg-white/90 text-gray-700 hover:text-red-500 rounded-full p-1 shadow-sm transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Remove car"
        >
          <X size={16} />
        </button>
      )}

      {/* Car image container */}
      <div className="h-full flex items-center justify-center overflow-hidden bg-gray-50 p-[80px_62px]">
          <img
            src={Car1}
            alt="Car silhouette"
            className="w-40 h-auto max-h-36 opacity-60 transform"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150' fill='none' stroke='%23cccccc' stroke-width='1'><path d='M50,90 L70,60 L230,60 L260,90 L260,110 L50,110 Z M90,60 L110,40 L190,40 L210,60 M90,60 L90,40 L110,40 M190,40 L210,60 L210,40 L190,40 M50,90 L50,110 M260,90 L260,110 M150,60 L150,40' /><circle cx='90' cy='110' r='20' /><circle cx='220' cy='110' r='20' /></svg>";
            }}
          />
      </div>
    </div>
  );
} 