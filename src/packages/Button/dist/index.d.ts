import { FC, ReactNode } from "react";
declare type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};
export declare const Button: FC<ButtonProps>;
export declare const SecondaryButton: FC<ButtonProps>;
export default Button;
