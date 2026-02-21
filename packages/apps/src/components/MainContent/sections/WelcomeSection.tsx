import SectionShell from "../SectionShell";

export default function WelcomeSection() {
  return (
    <SectionShell title="Welcome">
      <p className="text-neutral-600 dark:text-neutral-400">
        Select a section from the sidebar
      </p>
    </SectionShell>
  );
}
