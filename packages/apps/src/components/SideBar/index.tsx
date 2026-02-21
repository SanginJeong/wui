import { useState } from "react";
import { X } from "lucide-react";
import ComponentsMenu from "./ComponentsMenu";
import MobileOverlay from "./MobileOverlay";
import SideBarTabs from "./SideBarTabs";
import IconButton from "@/common/IconButton";

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
    if (window.innerWidth < 768) {
      onCloseSidebar();
    }
  };

  return (
    <>
      <MobileOverlay isOpen={isSidebarOpen} onClose={onCloseSidebar} />
      <aside
        className={`w-64 border-r border-neutral-200 dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-800 overflow-y-auto fixed md:static top-16 left-0 h-[calc(100vh-64px)] md:h-auto z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <IconButton
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition"
          ariaLabel="사이드바 닫기"
          onClick={onCloseSidebar}
        >
          <X size={20} className="text-neutral-700 dark:text-neutral-300" />
        </IconButton>

        <div className="space-y-2 pt-8 md:pt-0">
          <SideBarTabs activeTab={activeTab} onTabChange={handleTabChange} />
          <ComponentsMenu
            activeTab={activeTab}
            isOpen={isComponentsOpen}
            onToggle={() => setIsComponentsOpen(!isComponentsOpen)}
            onTabChange={handleTabChange}
          />
        </div>
      </aside>
    </>
  );
}
