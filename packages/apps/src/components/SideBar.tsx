import { useState } from "react";

interface SideBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SideBar({ activeTab, onTabChange }: SideBarProps) {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "소개" },
    { id: "tokens", label: "Design Tokens" },
  ];

  return (
    <aside className="w-64 border-r border-neutral-200 p-6 bg-neutral-50">
      <div className="space-y-2">
        {/* Overview and Design Tokens */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              activeTab === tab.id
                ? "bg-primary-500 text-white font-semibold"
                : "text-neutral-700 hover:bg-neutral-200"
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
                : "text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Components
            <span
              className={`transition-transform ${isComponentsOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {/* Components Submenu */}
          {isComponentsOpen && (
            <div className="ml-4 mt-2 space-y-1 border-l border-neutral-300 pl-2">
              {/* Placeholder for component items */}
              <button
                onClick={() => onTabChange("component-button")}
                className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                  activeTab === "component-button"
                    ? "bg-primary-100 text-primary-700 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                Button
              </button>
              <button
                onClick={() => onTabChange("component-input")}
                className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                  activeTab === "component-input"
                    ? "bg-primary-100 text-primary-700 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                Input
              </button>
              <button
                onClick={() => onTabChange("component-card")}
                className={`w-full text-left px-4 py-2 rounded-md transition text-sm ${
                  activeTab === "component-card"
                    ? "bg-primary-100 text-primary-700 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                Card
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
