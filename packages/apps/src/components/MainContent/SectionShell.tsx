import type { ReactNode } from "react";

interface SectionShellProps {
  title: string;
  children: ReactNode;
}

export default function SectionShell({ title, children }: SectionShellProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
        {children}
      </div>
    </section>
  );
}
