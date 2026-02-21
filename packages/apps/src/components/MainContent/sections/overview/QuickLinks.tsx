import { EXTERNAL_LINKS } from "@/common/links";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
        바로가기
      </h2>
      <div className="flex flex-wrap gap-4">
        <Link
          href={EXTERNAL_LINKS.github.href}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-[200px] rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            GitHub
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            코드와 개발 기록을 확인할 수 있습니다.
          </p>
        </Link>
        <Link
          href={EXTERNAL_LINKS.storybook.href}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-[200px] rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            Storybook
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            컴포넌트를 인터랙티브하게 확인하고 사용 예시를 살펴보세요.
          </p>
        </Link>
        <Link
          href={EXTERNAL_LINKS.figma.href}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-[200px] rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            Figma
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            디자인 원본과 컴포넌트 스펙을 한 곳에서 확인할 수 있습니다.
          </p>
        </Link>
        <Link
          href={EXTERNAL_LINKS.npm.href}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-[200px] rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            NPM
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            설치 방법과 배포 버전을 확인할 수 있습니다.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
