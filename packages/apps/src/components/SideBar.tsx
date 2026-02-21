import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface SideBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isSidebarOpen?: boolean;
  onCloseSidebar?: () => void;
}

export default function SideBar({
  activeTab,
  onTabChange,
  isSidebarOpen = false,
  onCloseSidebar = () => {},
}: SideBarProps) {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onCloseSidebar();
    }
  };

  const tabs = [
    { id: "overview", label: "Introduce" },
    { id: "tokens", label: "Design Tokens" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30 top-16"
          onClick={onCloseSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-64 border-r border-neutral-200 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-800 overflow-y-auto fixed md:static top-16 left-0 h-[calc(100vh-64px)] md:h-auto z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={onCloseSidebar}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition"
          aria-label="사이드바 닫기"
        >
          <X size={20} className="text-neutral-700 dark:text-neutral-300" />
        </button>

        <div className="space-y-2 pt-8 md:pt-0">
          {/* Overview and Design Tokens */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition ${
                activeTab === tab.id
                  ? "bg-primary-500 text-white font-semibold"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Components Dropdown */}
          <div>
            <button
              onClick={() => setIsComponentsOpen(!isComponentsOpen)}
              className={`w-full text-left px-4 py-2 rounded-md transition flex items-center justify-between ${
                activeTab.startsWith("component-")
                  ? "bg-primary-500 text-white font-semibold"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              Components
              <ChevronDown
                size={16}
                className={`transition-transform ${isComponentsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Components Submenu */}
            {isComponentsOpen && (
              <div className="ml-4 mt-2 space-y-1 border-l border-neutral-300 dark:border-neutral-600 pl-2">
                {/* Placeholder for component items */}
                <button
                  onClick={() => handleTabChange("component-button")}
                  className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                    activeTab === "component-button"
                      ? "bg-primary-100 text-primary-700 font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  Button
                </button>
                <button
                  onClick={() => handleTabChange("component-input")}
                  className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                    activeTab === "component-input"
                      ? "bg-primary-100 text-primary-700 font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  Input
                </button>
                <button
                  onClick={() => handleTabChange("component-card")}
                  className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                    activeTab === "component-card"
                      ? "bg-primary-100 text-primary-700 font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  Card
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
