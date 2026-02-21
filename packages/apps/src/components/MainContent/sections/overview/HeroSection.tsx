import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-3">
          WonderUI
        </h1>
      </div>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        WonderUI는 반복 개발 비용을 줄이고 일관된 디자인 규칙과 접근성 우선의
        재사용 컴포넌트로 어떤 프로젝트에서든 바로 사용할 수 있는 UI를
        제공합니다.
      </p>
    </div>
  );
};

export default HeroSection;
