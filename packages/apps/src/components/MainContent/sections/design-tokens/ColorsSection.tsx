import { neutralColors, primaryColors } from "./data";

const ColorsSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
          색상 (Colors)
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          WonderUI의 디자인 시스템 색상 팔레트입니다.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Primary Color
        </h3>
        <div className="flex flex-wrap gap-2 items-end">
          {primaryColors.map((color) => (
            <div key={color.level} className="text-center">
              <div
                className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm mb-2"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                {color.level}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Neutral Color
        </h3>
        <div className="flex flex-wrap gap-2 items-end">
          {neutralColors.map((color) => (
            <div key={color.level} className="text-center">
              <div
                className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm mb-2"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                {color.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorsSection;
