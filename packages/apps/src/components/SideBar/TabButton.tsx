interface TabButtonProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  className?: string;
}

export default function TabButton({ id, label, onClick, className }: TabButtonProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={className}
      type="button"
    >
      {label}
    </button>
  );
}
