import React, { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
