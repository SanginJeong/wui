import type { ReactNode } from "react";

interface SectionShellProps {
  title?: string;
  children: ReactNode;
}

export default function SectionShell({ title, children }: SectionShellProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="p-6 rounded-lg">{children}</div>
    </section>
  );
}
