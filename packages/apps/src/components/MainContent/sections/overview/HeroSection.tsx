import React from "react";

export default function HeroSection() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-3">
          WonderUI
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Design System & Component Library
        </p>
      </div>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
        WonderUI는 현대적이고 접근성 있는 웹 인터페이스를 만들기 위한 완벽한
        디자인 시스템입니다. 통일된 디자인 토큰과 재사용 가능한 컴포넌트로
        일관성 있는 사용자 경험을 제공합니다.
      </p>
    </div>
  );
}
