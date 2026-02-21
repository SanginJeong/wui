import { radiusScale } from "./data";

const RadiusSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
        테두리 반경 (Border Radius)
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        다양한 모서리 반경 옵션입니다.
      </p>
      <div className="flex flex-wrap gap-4">
        {radiusScale.map((radius) => (
          <div key={radius.name} className="text-center">
            <div
              className="w-16 h-16 bg-primary-500 border-2 border-neutral-300 dark:border-neutral-600 mb-2"
              style={{ borderRadius: radius.value }}
            />
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              {radius.name}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              {radius.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadiusSection;
