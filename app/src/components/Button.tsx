import React from 'react'
interface Props {
  display: string;
  justifyContent: string;
  alignItems: string;
  margin: string;
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({
  display,
  justifyContent,
  alignItems,
  margin,
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        margin: margin,
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width
      }}
    >
      {children}
    </button>
  );
}

export default Button;
