import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface BadgeProps extends StyledProps {
  children: ReactNode;
  onClick?: () => void;
}

interface StyledProps {
  color: string;
  showOutline?: boolean;
}

export const Badged: FC<BadgeProps> = ({
  children,
  onClick,
  showOutline,
  color
}: BadgeProps) => (
  <StyledBadged
    onClick={onClick}
    type="button"
    color={color}
    showOutline={showOutline}
  >
    {children}
  </StyledBadged>
);

Badged.defaultProps = {
  color: "black",
  showOutline: true
};

const StyledBadged = styled.button<StyledProps>`
  font-family: Arial, sans-serif;
  padding: 0.25em 0.5em;
  font-size: 12px;
  font-weight: bold;
  background-color: ${props => (props.color ? props.color : "black")};
  cursor: pointer;
  border-radius: 10px;

  &:focus {
    outline: ${props =>
      props.showOutline ? "-webkit-focus-ring-color auto 5px" : "none"};
  }
`;

export default Badged;
