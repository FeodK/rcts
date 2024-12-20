import React from "react";

export enum CardVariant {
  outline = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? "1px solid black" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
