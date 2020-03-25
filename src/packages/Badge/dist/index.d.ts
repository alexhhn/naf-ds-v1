import { FC, ReactNode } from "react";
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
export declare const Badged: FC<BadgeProps>;
export default Badged;
