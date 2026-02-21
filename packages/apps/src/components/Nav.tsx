import { Github, BookOpen, Moon, Sun, Menu } from "lucide-react";

interface NavProps {
  onDarkModeToggle: () => void;
  onMenuToggle: () => void;
  isDarkMode?: boolean;
}

export default function Nav({
  onDarkModeToggle,
  onMenuToggle,
  isDarkMode = false,
}: NavProps) {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-700 px-4 md:px-6 py-4 bg-white dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Title and Description + Menu Button */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
            aria-label="메뉴 열기"
          >
            <Menu
              size={20}
              className="text-neutral-700 dark:text-neutral-300"
            />
          </button>

          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white truncate">
              WonderUI
            </h1>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate">
              Design System & Component Library
            </p>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Github Button */}
          <button
            className="hidden md:flex p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
            aria-label="GitHub 방문"
          >
            <Github
              size={20}
              className="text-neutral-700 dark:text-neutral-300"
            />
          </button>

          {/* Storybook Button */}
          <button
            className="hidden md:flex p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
            aria-label="Storybook 방문"
          >
            <BookOpen
              size={20}
              className="text-neutral-700 dark:text-neutral-300"
            />
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={onDarkModeToggle}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition"
            aria-label="다크모드 전환"
          >
            {isDarkMode ? (
              <Sun
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            ) : (
              <Moon
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
