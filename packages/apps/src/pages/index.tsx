import { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

const getPageTitle = (activeTab: string) => {
  if (activeTab === "overview") {
    return "Wonder UI | Overview";
  }
  if (activeTab === "tokens") {
    return "Wonder UI | Design Tokens";
  }
  if (activeTab.startsWith("component-")) {
    return "Wonder UI | Components";
  }
  return "WonderUI";
};

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
      <Head>
        <title>{getPageTitle(activeTab)}</title>
        <meta
          name="description"
          content="WonderUI design system and component library documentation."
        />
        <meta name="og:title" content="WonderUI Documentation" />
        <meta
          name="og:description"
          content="일관된 디자인과 개발을 위한 WonderUI 디자인 시스템과 컴포넌트 라이브러리 문서입니다."
        />
        <meta name="og:image" content="/wonderui-logo-circle.svg" />
        <meta name="og:url" content="https://wonder-ui-eight.vercel.app/" />
      </Head>
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
