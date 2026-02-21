import type { ReactNode } from "react";

interface IconButtonProps {
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const IconButton = ({
  ariaLabel,
  onClick,
  className,
  children,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconButton;
