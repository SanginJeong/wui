import SectionShell from "../../SectionShell";
import BorderWidthSection from "./BorderWidthSection";
import ColorsSection from "./ColorsSection";
import RadiusSection from "./RadiusSection";
import ShadowSection from "./ShadowSection";
import SpacingSection from "./SpacingSection";
import TextScaleSection from "./TextScaleSection";

const TokensSection = () => {
  return (
    <SectionShell>
      <div className="space-y-16">
        <ColorsSection />
        <TextScaleSection />
        <SpacingSection />
        <RadiusSection />
        <BorderWidthSection />
        <ShadowSection />
      </div>
    </SectionShell>
  );
};

export default TokensSection;
