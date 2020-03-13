import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} type="button">
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  font-family: Arial, sans-serif;
  border: none;
  padding: 0.5em 1em;
  font-size: 16px;
  font-weight: bold;
  min-width: 100px;
  background-color: #ffdb00;
  outline: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #fff000;
  }
`;

export default Button;
