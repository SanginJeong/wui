import { useState } from "react";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-neutral-900">
      <Nav
        onDarkModeToggle={handleDarkModeToggle}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
      />

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        <SideBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isSidebarOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
        />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Home;
