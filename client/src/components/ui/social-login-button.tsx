import { CustomButton } from "./custom-button";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  text: string;
}

export function SocialLoginButton({ icon, text }: SocialLoginButtonProps) {
  return (
    <CustomButton
      customStyles={{
        width: "330px",
        height: "40px",
        padding: "6px 59.4px",
        borderRadius: "6px",
        border: '0.78px solid #000000',
        color: "#000",
        fontFamily: "Gilroy-Regular",
        background: "transparent",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "100%",
        letterSpacing: "0%",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {icon}
      {text}
    </CustomButton>
  );
} 