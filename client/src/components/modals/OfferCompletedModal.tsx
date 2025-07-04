import React from "react";
import CustomModal from "../ui/custom-modal";
import { CustomButton } from "../ui/custom-button";
import AcceptTradeIcon from "../../assets/accept.svg";
import { useNavigate } from "react-router-dom";

interface OfferCompletedModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    tradeDetails: {
        buyerName?: string;
        receivedAmount?: number
    };
}

const OfferCompletedModal: React.FC<OfferCompletedModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    tradeDetails,
}) => {
    const navigate = useNavigate();
    console.log("Trade Details:", tradeDetails);
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            title="Offer Accepted!"
            icon={AcceptTradeIcon}
        >
            <div className="flex flex-col items-center gap-3 md:w-[339px]">
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
                    You accepted an offer that was placed on this car, see detail below.        </p>

                <div className="w-full px-2 flex gap-3 items-center">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="rounded-full w-[38px] h-[38px]" alt="img" />
                    <p className="text-lg">{tradeDetails?.buyerName}</p>
                </div>

                <div className="w-full mb-7 px-2">
                    <p className="font-semibold">Accepted Offer Amount:</p>
                    <p className="text-[#585353]">{tradeDetails?.receivedAmount}</p>
                </div>





                <CustomButton
                    customStyles={{
                        width: "100%",
                        height: "44px",
                        borderRadius: "7.27px",
                    }}
                    onClick={() => {
                        onConfirm()
                        navigate(`/cars/4`); }}// Assuming receivedAmount is the car ID}
                >
                    View Product Details
                </CustomButton>
            </div>
        </CustomModal>
    );
};

export default OfferCompletedModal;
