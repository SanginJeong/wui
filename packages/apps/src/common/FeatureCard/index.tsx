interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg hover:bg-neutral-50 dark:hover:shadow-lg dark:hover:bg-neutral-700 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
