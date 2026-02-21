const NavTitle = () => {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <h1 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white truncate">
        WonderUI
      </h1>
      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate">
        Design System & Component Library
      </p>
    </div>
  );
};

export default NavTitle;
