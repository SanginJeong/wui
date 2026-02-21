import { useState } from "react";
import IconButton from "@/common/IconButton";
import { Copy, Check } from "lucide-react";

const INSTALL_CMD = "npm install wonderui-tokens";

const GettingStarted = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("복사 실패:", e);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
        시작하기
      </h2>

      <div className="relative">
        <pre className="bg-neutral-900 dark:bg-neutral-950 text-neutral-50 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{INSTALL_CMD}</code>
        </pre>
        <div className="absolute top-2 right-2">
          <IconButton
            onClick={handleCopy}
            ariaLabel={copied ? "복사됨" : "복사"}
            className="p-2 bg-black/10 dark:bg-white/5 rounded"
          >
            {copied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-neutral-100" />
            )}
          </IconButton>
        </div>
      </div>

      <div className="bg-primary-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8">
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
            - 아래 바로가기 또는 사이드바의 Quick Links 사용
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
