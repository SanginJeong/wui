import { shadowScale } from "./data";

const ShadowSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
        그림자 (Shadow)
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        깊이감을 표현하는 그림자 스타일입니다.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shadowScale.map((shadow) => (
          <div key={shadow.name}>
            <div
              className="w-full h-24 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 mb-3"
              style={{ boxShadow: shadow.value }}
            />
            <p className="font-semibold text-neutral-900 dark:text-white">
              {shadow.name}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono break-all">
              {shadow.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShadowSection;
