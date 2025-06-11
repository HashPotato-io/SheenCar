import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomButton } from "./ui/custom-button";
import { CloseIcon, MileageIcon } from "./icons";
import { CustomInput } from "./ui/custom-input";

interface AdvancedSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  searchParams: Record<string, string | null>;
  onValueChange: (field: string, value: string) => void;
}

export function AdvancedSearchDialog({
  isOpen,
  onClose,
  searchParams,
  onValueChange,
}: AdvancedSearchDialogProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="fixed top-[182.5px] left-[22px] w-[331px] h-[581.57px] bg-white rounded-[24px] p-[40px_26px] flex flex-col gap-[10px] z-[1000]
          md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[calc(100%-32px)] md:max-w-[609px] md:h-auto md:max-h-[90vh] md:overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-['Gilroy-SemiBold'] font-normal text-[24px] leading-[100%] tracking-[-1%] text-black">
            Advanced Search
          </h2>
          <button
            onClick={onClose}
            className="bg-none border-none cursor-pointer text-[20px]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("fuelType", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.fuelType || "Fuel Type"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="petrol">Petrol</CustomSelectItem>
                <CustomSelectItem value="diesel">Diesel</CustomSelectItem>
                <CustomSelectItem value="electric">Electric</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
          <div className="flex flex-col gap-2">
            <CustomInput
              placeholder="Mileage"
              className="w-full h-[48px]"
              placeholderColor="#000000"
              borderColor="#000000"
              rightIcon={<MileageIcon />}
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("transmission", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.transmission || "Transmission"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="automatic">Automatic</CustomSelectItem>
                <CustomSelectItem value="manual">Manual</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("bodyType", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.bodyType || "Body Type"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="sedan">Sedan</CustomSelectItem>
                <CustomSelectItem value="suv">SUV</CustomSelectItem>
                <CustomSelectItem value="hatchback">Hatchback</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("condition", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.condition || "Condition"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="new">New</CustomSelectItem>
                <CustomSelectItem value="used">Used</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("sellerType", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.sellerType || "Seller Type"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="dealer">Dealer</CustomSelectItem>
                <CustomSelectItem value="private">Private</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("interiorColor", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.interiorColor || "Interior Color"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="black">Black</CustomSelectItem>
                <CustomSelectItem value="beige">Beige</CustomSelectItem>
                <CustomSelectItem value="gray">Gray</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("exteriorColor", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.exteriorColor || "Exterior Color"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="black">Black</CustomSelectItem>
                <CustomSelectItem value="white">White</CustomSelectItem>
                <CustomSelectItem value="silver">Silver</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>

          {/* Row 5 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("cylinder", value)}
            >
              <CustomSelectTrigger
                className="w-full h-[48px]"
                placeholderColor="#000000"
                borderColor="#000000"
              >
                <span>{searchParams.cylinder || "Cylinder"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="4">4 Cylinder</CustomSelectItem>
                <CustomSelectItem value="6">6 Cylinder</CustomSelectItem>
                <CustomSelectItem value="8">8 Cylinder</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>
        </div>

        <div style={{ marginTop: "auto", paddingTop: "20px" }}>
          <CustomButton
            customStyles={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
            }}
          >
            Apply
          </CustomButton>
        </div>
      </div>
    </>
  );
}
