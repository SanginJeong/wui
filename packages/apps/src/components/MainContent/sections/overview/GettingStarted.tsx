const GettingStarted = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
        시작하기
      </h2>
      <div className="bg-primary-50 dark:bg-neutral-800 border border-primary-200 dark:border-neutral-700 rounded-lg p-8">
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          WonderUI를 프로젝트에 포함시키고 디자인 시스템을 활용해보세요.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold">
              1. 왼쪽 사이드바에서 &quot;Design Tokens&quot;를 확인하세요
            </span>
            - 모든 디자인 토큰 가이드
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold">
              2. &quot;Components&quot;에서 각 컴포넌트를 살펴보세요
            </span>
            - 사용 방법과 예시 확인
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold">
              3. Storybook에서 인터랙티브 데모를 확인하세요
            </span>
            - 아래 바로가기 또는 모바일에서는 사이드바 Quick Links 사용
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
