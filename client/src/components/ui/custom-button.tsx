import { ButtonHTMLAttributes, useState } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: 'default' | 'outline';
  outlineColor?: string;
  disabled?: boolean;
}

export function CustomButton({ 
  children, 
  customStyles, 
  variant = 'default',
  outlineColor = '#761B1C',
  disabled,
  ...props 
}: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: {
      background: disabled ? "#003A2F" : (isHovered ? "#004D3F" : "#003A2F"),
      color: disabled ? "#FFFFFF" : "#fff",
      border: `1px solid ${disabled ? "#CCCCCC" : "#003A2F"}`,
      height: 40,
      gap: "8px",
      borderRadius: "6px",
      transition: "all 300ms ease-in-out",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
    },
    outline: {
      border: `1px solid ${disabled ? "#CCCCCC" : outlineColor}`,
      color: disabled ? "#FFFFFF" : (isHovered ? "#FFFFFF" : outlineColor),
      background: disabled ? "#003A2F" : (isHovered ? outlineColor : "transparent"),
      height: 40,
      gap: "8px",
      borderRadius: "6px",
      borderWidth: "1px",
      transition: "all 300ms ease-in-out",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
    }
  };

  return (
    <button
      style={{
        fontWeight: 300,
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
      className="text-base "
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
} 