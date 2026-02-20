interface NavProps {
  onDarkModeToggle: () => void;
}

export default function Nav({ onDarkModeToggle }: NavProps) {
  return (
    <nav className="border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Title and Description */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-neutral-900">WonderUI</h1>
          <p className="text-sm text-neutral-600">
            Design System & Component Library
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          {/* Github Button */}
          <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition">
            Github
          </button>

          {/* Storybook Button */}
          <button className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition">
            Storybook
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={onDarkModeToggle}
            className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition"
          >
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}
