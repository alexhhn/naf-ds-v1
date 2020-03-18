import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface BadgeProps extends StyledProps {
  children: ReactNode;
  onClick?: () => void;
}

interface StyledProps {
  color: string;
  hasFocusOutline?: boolean;
  backgroundColor: string;
}

/**
 * @parameter children: ReactNode inside tag.
 */
export const Badged: FC<BadgeProps> = ({
  children,
  onClick,
  hasFocusOutline,
  color,
  backgroundColor
}: BadgeProps) => (
  <StyledBadged
    onClick={onClick}
    type="button"
    color={color}
    backgroundColor={backgroundColor}
    hasFocusOutline={hasFocusOutline}
  >
    {children}
  </StyledBadged>
);

Badged.defaultProps = {
  color: "black",
  hasFocusOutline: true,
  backgroundColor: "white"
};

const StyledBadged = styled.button<StyledProps>`
  font-family: Arial, sans-serif;
  padding: 0.25em 0.5em;
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : "black")};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};

  cursor: pointer;
  border-radius: 10px;
  &:focus {
    outline: ${props =>
      props.hasFocusOutline ? "-webkit-focus-ring-color auto 5px" : "none"};
  }
`;

export default Badged;
