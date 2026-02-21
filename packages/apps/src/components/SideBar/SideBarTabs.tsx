import TabButton from "./TabButton";

interface SideBarTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "tokens", label: "Design Tokens" },
];

const SideBarTabs = ({ activeTab, onTabChange }: SideBarTabsProps) => {
  return (
    <>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          id={tab.id}
          label={tab.label}
          onClick={onTabChange}
          className={`w-full text-left px-4 py-2 rounded-md transition ${
            activeTab === tab.id
              ? "bg-primary-500 text-white font-semibold"
              : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        />
      ))}
    </>
  );
};

export default SideBarTabs;
