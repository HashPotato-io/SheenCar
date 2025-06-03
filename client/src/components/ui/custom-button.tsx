import { ButtonHTMLAttributes, useState } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: 'default' | 'outline';
  outlineColor?: string;
}

export function CustomButton({ 
  children, 
  customStyles, 
  variant = 'default',
  outlineColor = '#761B1C',
  ...props 
}: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: {
      background: isHovered ? "#004D3F" : "#003A2F",
      color: "#fff",
      border: "1px solid #003A2F",
      width: 355,
      height: 40,
      gap: "8px",
      borderRadius: "6px",
      transition: "all 300ms ease-in-out",
    },
    outline: {
      border: `1px solid ${outlineColor}`,
      color: isHovered ? "#FFFFFF" : outlineColor,
      background: isHovered ? outlineColor : "transparent",
      width: 355,
      height: 40,
      gap: "8px",
      borderRadius: "6px",
      borderWidth: "1px",
      transition: "all 300ms ease-in-out",
    }
  };

  return (
    <button
      style={{
        fontWeight: 300,
        fontSize: 16,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20,
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