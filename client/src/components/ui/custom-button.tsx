import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
}

export function CustomButton({ children, customStyles, disabled, ...props }: CustomButtonProps) {
  return (
    <button
      style={{
        width: 216,
        height: 49,
        background: "#003A2F",
        color: "#fff",
        border: "1px solid #003A2F",
        borderRadius: 7,
        fontWeight: 300,
        fontSize: 16,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        paddingRight: 20,
        paddingLeft: 20,
        transition: "opacity 300ms ease-in-out",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Gilroy-regular, sans-serif",
        opacity: disabled ? 0.5 : 1,
        ...customStyles, 
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
} 