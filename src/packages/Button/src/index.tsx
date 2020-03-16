import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} type="button">
    {children}
  </StyledButton>
);

export const SecondaryButton: FC<ButtonProps> = ({
  children,
  onClick
}: ButtonProps) => (
  <StyledButton onClick={onClick} type="button" isSecondary={true}>
    {children}
  </StyledButton>
);

type StyledProps = {
  isSecondary?: boolean;
};

const StyledButton = styled.button<StyledProps>`
  font-family: Arial, sans-serif;
  border: ${props => (props.isSecondary ? "ffdb00" : "none")};
  padding: 0.5em 1em;
  font-size: 16px;
  font-weight: bold;
  min-width: 100px;
  background-color: ${props => (props.isSecondary ? "transparent" : "#ffdb00")};
  outline: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${props => (props.isSecondary ? "#f4f4f4" : "#fff000")};
`;

export default Button;
