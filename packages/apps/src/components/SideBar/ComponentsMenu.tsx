import { ChevronDown } from "lucide-react";
import TabButton from "./TabButton";

interface ComponentsMenuProps {
  activeTab: string;
  isOpen: boolean;
  onToggle: () => void;
  onTabChange: (tab: string) => void;
}

const componentTabs = [
  { id: "component-button", label: "Button" },
  { id: "component-input", label: "Input" },
  { id: "component-card", label: "Card" },
];

const ComponentsMenu = ({
  activeTab,
  isOpen,
  onToggle,
  onTabChange,
}: ComponentsMenuProps) => {
  const isActiveGroup = activeTab.startsWith("component-");

  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full text-left px-4 py-2 rounded-md transition flex items-center justify-between ${
          isActiveGroup
            ? "bg-primary-500 text-white font-semibold"
            : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        }`}
        type="button"
      >
        Components
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 space-y-1 border-l border-neutral-300 dark:border-neutral-600 pl-2">
          {componentTabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              onClick={onTabChange}
              className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                activeTab === tab.id
                  ? "bg-primary-100 text-primary-700 font-semibold"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComponentsMenu;
