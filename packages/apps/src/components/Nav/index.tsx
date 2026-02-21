import { Menu } from "lucide-react";
import IconButton from "@/common/IconButton";
import NavActions from "./NavActions";
import NavTitle from "./NavTitle";

interface NavProps {
  onDarkModeToggle: () => void;
  onMenuToggle: () => void;
  isDarkMode?: boolean;
}

const Nav = ({
  onDarkModeToggle,
  onMenuToggle,
  isDarkMode = false,
}: NavProps) => {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-700 px-4 md:px-6 py-4 bg-white dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <IconButton
            onClick={onMenuToggle}
            className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
            ariaLabel="메뉴 열기"
          >
            <Menu
              size={20}
              className="text-neutral-700 dark:text-neutral-300"
            />
          </IconButton>
          <NavTitle />
        </div>
        <NavActions
          onDarkModeToggle={onDarkModeToggle}
          isDarkMode={isDarkMode}
        />
      </div>
    </nav>
  );
};

export default Nav;
