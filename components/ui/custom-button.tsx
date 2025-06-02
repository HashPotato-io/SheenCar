import { ButtonHTMLAttributes, useState } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: 'default' | 'outline';
}

export function CustomButton({ 
  children, 
  customStyles, 
  variant = 'default',
  ...props 
}: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: {
      background: isHovered ? "#004D3F" : "#003A2F",
      color: "#fff",
      border: "1px solid #003A2F",
    },
    outline: {
      border: "1px solid #761B1C",
      color: isHovered ? "#FFFFFF" : "#761B1C",
      background: isHovered ? "#761B1C" : "transparent",
    }
  };

  return (
    <button
      style={{
        width: 216,
        height: 49,
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
        ...variantStyles[variant],
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