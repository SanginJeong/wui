import FeatureCard from "@/common/FeatureCard";

const Features = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
        특징
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Design Tokens"
          description="색상, 타이포그래피, 간격 등 모든 디자인 요소를 일관되게 관리하고 사용할 수 있습니다."
        />
        <FeatureCard
          title="재사용 가능한 컴포넌트"
          description="Button, Input, Card 등 다양한 기본 컴포넌트들로 빠르게 인터페이스를 구성할 수 있습니다."
        />
        <FeatureCard
          title="접근성 우선"
          description="모든 컴포넌트는 WCAG 표준을 따르며 시멘틱 HTML 구조로 만들어졌습니다."
        />

        <FeatureCard
          title="반응형 디자인"
          description="모바일부터 데스크톱까지 모든 화면 크기에서 최적의 경험을 제공합니다."
        />
      </div>
    </>
  );
};

export default Features;
