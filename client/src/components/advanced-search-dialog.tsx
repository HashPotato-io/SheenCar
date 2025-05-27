import {
  CustomSelect,
  CustomSelectContent,
  CustomSelectItem,
  CustomSelectTrigger,
} from "@/components/ui/custom-select";
import { CustomButton } from "./ui/custom-button";
import { CloseIcon } from "./icons";

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
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "609px",
          height: "522.35px",
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "40px 26px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-1%",
              verticalAlign: "middle",
              color: "#000000",
            }}
          >
            Advanced Search
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Row 1 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("fuelType", value)}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
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
            <CustomSelect
              onValueChange={(value) => onValueChange("mileage", value)}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
                <span>{searchParams.mileage || "Mileage"}</span>
              </CustomSelectTrigger>
              <CustomSelectContent>
                <CustomSelectItem value="0-10000">0-10,000</CustomSelectItem>
                <CustomSelectItem value="10000-50000">
                  10,000-50,000
                </CustomSelectItem>
                <CustomSelectItem value="50000+">50,000+</CustomSelectItem>
              </CustomSelectContent>
            </CustomSelect>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-2">
            <CustomSelect
              onValueChange={(value) => onValueChange("transmission", value)}
            >
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
              <CustomSelectTrigger className="w-full h-[48px]">
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
