import { useState } from "react";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex flex-col h-screen bg-white">
        {/* Navigation */}
        <Nav onDarkModeToggle={handleDarkModeToggle} />

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-1 overflow-hidden">
          <SideBar activeTab={activeTab} onTabChange={setActiveTab} />
          <MainContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
