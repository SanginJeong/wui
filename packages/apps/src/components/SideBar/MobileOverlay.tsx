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
      className="fixed left-0 right-0 bottom-0 top-20 bg-black bg-opacity-50 md:hidden z-30"
      onClick={onClose}
    />
  );
};

export default MobileOverlay;
