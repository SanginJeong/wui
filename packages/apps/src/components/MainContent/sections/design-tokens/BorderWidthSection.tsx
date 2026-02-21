import { borderWidthScale } from "./data";

const BorderWidthSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
        테두리 굵기 (Border Width)
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        다양한 테두리 굵기 옵션입니다.
      </p>
      <div className="flex flex-wrap gap-4">
        {borderWidthScale.map((border) => (
          <div key={border.name} className="text-center">
            <div
              className="bg-primary-500 rounded-lg mb-2"
              style={{
                width: "64px",
                height: "64px",
                borderWidth: border.value,
                borderColor: "var(--color-primary-900)",
                borderStyle: "solid",
              }}
            />
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              {border.name}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              {border.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorderWidthSection;
