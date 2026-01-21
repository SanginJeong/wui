import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variants = "default" | "secondary" | "destructive" | "outline" | "link";
type Sizes = "small" | "medium" | "large";

interface Props {
  children: ReactNode;
  variant?: Variants;
  size?: Sizes;
  className?: string;
}

const sizeClassName = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const variantsClassName = {
  default: styles.default,
  secondary: styles.secondary,
  destructive: styles.destructive,
  outline: styles.outline,
  link: styles.link,
};

const buildClassName = (opts: {
  variant: Variants;
  size: Sizes;
  className: string;
}) => {
  const { variant, size, className } = opts;
  return [
    sizeClassName[size],
    variantsClassName[variant],
    styles.button,
    className,
  ].join(" ");
};

const Button = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
}: Props) => {
  const cn = buildClassName({ variant, size, className });
  return <button className={cn}>{children}</button>;
};

export default Button;
