interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileOverlay = ({ isOpen, onClose }: MobileOverlayProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30 top-16"
      onClick={onClose}
    />
  );
};

export default MobileOverlay;
