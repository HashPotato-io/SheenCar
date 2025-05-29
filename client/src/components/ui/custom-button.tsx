import { ButtonHTMLAttributes, useState } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
}

export function CustomButton({ children, customStyles, ...props }: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: 216,
        height: 49,
        background: isHovered ? "#004D3F" : "#003A2F",
        color: "#fff",
        border: "1px solid #003A2F",
        borderRadius: 7,
        fontWeight: 300,
        fontSize: 16,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        paddingRight: 20,
        paddingLeft: 20,
        transition: "all 300ms ease-in-out",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Gilroy-regular, sans-serif",
        ...customStyles,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
} 