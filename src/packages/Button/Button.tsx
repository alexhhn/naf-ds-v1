import React, { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  /**
   * Simple click handler
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   * @returns {object} nothing.
   */
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
