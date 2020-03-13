import { FC, ReactNode } from "react";
declare type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};
/**
 * The world's most _basic_ button
 */
declare const Button: FC<ButtonProps>;
export default Button;
