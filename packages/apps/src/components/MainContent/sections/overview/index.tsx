import Divider from "@/common/Divider";
import SectionShell from "../../SectionShell";
import Features from "./Features";
import GettingStarted from "./GettingStarted";
import HeroSection from "./HeroSection";
import QuickLinks from "./QuickLinks";

const OverviewSection = () => {
  return (
    <SectionShell>
      <div className="space-y-12">
        <HeroSection />
        <Divider />
        <GettingStarted />
        <Divider />
        <QuickLinks />
        <Divider />
        <Features />
      </div>
    </SectionShell>
  );
};

export default OverviewSection;
