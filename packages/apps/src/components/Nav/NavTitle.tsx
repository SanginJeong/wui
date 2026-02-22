import Image from "next/image";

const NavTitle = () => {
  return (
    <div className="flex items-center gap-3 min-w-0">
      {/* Logo */}
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-500 shadow-md flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
        <Image
          src="/wonderui-logo-circle.svg"
          alt="WonderUI Logo"
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10"
          priority
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white truncate">
          WonderUI
        </h1>
        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate">
          Design System & Component Library
        </p>
      </div>
    </div>
  );
};

export default NavTitle;
