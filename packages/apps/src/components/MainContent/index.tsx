import OverviewSection from "./sections/overview";
import TokensSection from "./sections/TokensSection";
import WelcomeSection from "./sections/WelcomeSection";

interface MainContentProps {
  activeTab: string;
}

const contentByTab: Record<string, JSX.Element> = {
  overview: <OverviewSection />,
  tokens: <TokensSection />,
  // "component-button": <ButtonSection />,
};

export default function MainContent({ activeTab }: MainContentProps) {
  return (
    <main className="flex-1 p-4 md:p-6 overflow-y-auto">
      {contentByTab[activeTab] ?? <WelcomeSection />}
    </main>
  );
}
