import { EXTERNAL_LINKS } from "@/common/links";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="pt-6 border-t border-neutral-200 dark:border-neutral-700 space-y-2">
      <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
        Quick Links
      </div>
      <div className="space-y-1">
        <Link
          href={EXTERNAL_LINKS.github.href}
          target="_blank"
          rel="noreferrer"
          className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          GitHub
        </Link>
        <Link
          href={EXTERNAL_LINKS.storybook.href}
          target="_blank"
          rel="noreferrer"
          className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          Storybook
        </Link>
        <Link
          href={EXTERNAL_LINKS.npm.href}
          target="_blank"
          rel="noreferrer"
          className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          NPM
        </Link>
        <Link
          href={EXTERNAL_LINKS.figma.href}
          target="_blank"
          rel="noreferrer"
          className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          Figma
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
