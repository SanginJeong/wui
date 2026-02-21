import { Moon, Sun } from "lucide-react";
import IconButton from "@/common/IconButton";

interface NavActionsProps {
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
}

const NavActions = ({ onDarkModeToggle, isDarkMode }: NavActionsProps) => {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <IconButton
        onClick={onDarkModeToggle}
        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
        ariaLabel="다크모드 전환"
      >
        {isDarkMode ? (
          <Sun size={20} className="text-neutral-700 dark:text-neutral-300" />
        ) : (
          <Moon size={20} className="text-neutral-700 dark:text-neutral-300" />
        )}
      </IconButton>
    </div>
  );
};

export default NavActions;
