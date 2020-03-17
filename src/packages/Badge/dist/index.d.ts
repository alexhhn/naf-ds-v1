import { FC, ReactNode } from "react";
interface BadgeProps extends StyledProps {
    children: ReactNode;
    onClick?: () => void;
}
interface StyledProps {
    color: string;
    showOutline?: boolean;
}
export declare const Badged: FC<BadgeProps>;
export default Badged;
