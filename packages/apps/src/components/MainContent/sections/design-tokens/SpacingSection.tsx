import { spacingScale } from "./data";

const SpacingSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
        간격 (Spacing)
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        일관된 여백을 위한 간격 스케일입니다.
      </p>
      <div className="space-y-3">
        {spacingScale.map((spacing) => (
          <div key={spacing.name} className="flex items-center gap-4">
            <div className="w-20">
              <p className="font-semibold text-neutral-900 dark:text-white">
                {spacing.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {spacing.value}
              </p>
            </div>
            <div
              className="bg-primary-500 rounded"
              style={{ width: spacing.value, height: "12px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpacingSection;
