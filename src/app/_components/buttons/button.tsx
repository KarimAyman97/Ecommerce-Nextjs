import React from "react";

interface ButtonProps {
  border: string;
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  height: string;
  Clicked: () => void;
  radius: string;
  width: string;
}

export const Button: React.FC<ButtonProps> = ({
  border,
  color,
  backgroundColor,
  children,
  height,
  Clicked,
  radius,
  width,
}) => {
  return (
    <button
      onClick={Clicked}
      style={{
        backgroundColor,
        border,
        borderRadius: radius,
        height,
        width,
        color,
      }}
    >
      <span className="font-bold tracking-widest">{children}</span>
    </button>
  );
};
