interface TabButtonProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  className?: string;
}

const TabButton = ({ id, label, onClick, className }: TabButtonProps) => {
  return (
    <button onClick={() => onClick(id)} className={className} type="button">
      {label}
    </button>
  );
};

export default TabButton;
