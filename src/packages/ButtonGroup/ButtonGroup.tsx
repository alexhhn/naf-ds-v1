import React, { FC, ReactNode } from "react";

type ButtonGroupProps = {
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
export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  onClick
}: ButtonGroupProps) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
