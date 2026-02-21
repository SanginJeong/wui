import Divider from "@/common/Divider";
import SectionShell from "../../SectionShell";
import Features from "./Features";
import GettingStarted from "./GettingStarted";
import HeroSection from "./HeroSection";

const OverviewSection = () => {
  return (
    <SectionShell>
      <div className="space-y-12">
        <HeroSection />
        <Divider />
        <Features />
        <Divider />
        <GettingStarted />
      </div>
    </SectionShell>
  );
};

export default OverviewSection;
