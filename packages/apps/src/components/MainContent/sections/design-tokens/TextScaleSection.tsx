import { textScale } from "./data";

const TextScaleSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
        텍스트 크기 (Text Scale)
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        WonderUI의 텍스트 크기 정의입니다.
      </p>
      <div className="space-y-4">
        {textScale.map((text) => (
          <div
            key={text.name}
            className="pb-3 border-b border-neutral-200 dark:border-neutral-700"
          >
            <div style={{ fontSize: text.value }}>
              <p className="font-semibold text-neutral-900 dark:text-white">
                The quick brown fox
              </p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              <span className="font-semibold">{text.name}</span> • {text.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextScaleSection;
