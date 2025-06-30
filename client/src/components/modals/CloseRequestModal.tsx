import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import ReopenIcon from "../../assets/reopen.svg";

interface CloseRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isSecondClosure?: boolean;
}

const CloseRequestModal: React.FC<CloseRequestModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isSecondClosure = false,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={
        isSecondClosure
          ? "Confirm Final Closure of This Request"
          : "Are You Sure You Want to Close This Request?"
      }
      icon={ReopenIcon}
    >
      <div className="flex flex-col items-center gap-6 lg:w-[339px]">
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "center",
            color: "#585353",
          }}
        >
          {isSecondClosure ? (
            "This is your last opportunity to close this request. Once done, it cannot be reopened. If your needs change, you'll need to submit a new request."
          ) : (
            <>
              This request has been active for{" "}
              <span style={{ color: "#585353", fontWeight: 700 }}>5 days</span>.
              You may close it now and reopen it once later. After reopening, it
              must stay open for 5 days before a final, irreversible closure.
            </>
          )}
        </p>

        <CustomButton
          customStyles={{
            width: "100%",
            height: "44px",
            borderRadius: "7.27px",
          }}
          onClick={onConfirm}
        >
          Close Request
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default CloseRequestModal;
