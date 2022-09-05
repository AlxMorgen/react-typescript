import React, { FC, useState } from "react";
export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: React.ReactNode;
  onClick: (num: number) => void;
}
const Cards: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
    const [state, setState] = useState(0)

    return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid black" : "none",
        background: variant === CardVariant.primary ? "lightgray" : " "
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Cards;
