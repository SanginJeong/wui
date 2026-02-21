/**
 * WelcomeSection
 * 초기 환영 섹션
 */
export default function WelcomeSection() {
  return (
    <section className="flex items-center justify-center min-h-96">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
          WonderUI에 오신 것을 환영합니다
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md">
          왼쪽 사이드바에서 항목을 선택하여 시작하세요
        </p>
        <div className="pt-4">
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>📚 <span className="font-semibold">Introduce</span> - 프로젝트 소개</li>
            <li>🎨 <span className="font-semibold">Design Tokens</span> - 디자인 규칙</li>
            <li>🔧 <span className="font-semibold">Components</span> - 재사용 가능한 컴포넌트</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
