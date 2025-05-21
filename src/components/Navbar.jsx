import { ToggleMenu } from "@/assets/ToggleMenu";
import { useState } from "react";
import { NavListLinks } from "@/components/NavListLinks";

export const Navbar = () => {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex-1 flex items-center justify-end">
      <div className="grid grid-cols-[auto_auto]">
        <ToggleMenu isOpen={isMenuOpen} setIsOpen={setIsOpen} />
        <div
          className={`absolute z-10 top-0  bg-neutral-300/50 backdrop-blur-2xl p-2 px-6 rounded-lg w-xs h-dvh flex flex-col justify-center transition-all duration-300 ease-in-out shadow-2xl dark:bg-neutral-800/50 lg:h-full ${
            isMenuOpen
              ? "left-[calc(100%-320px)] shadow-black/50 dark:shadow-neutral-800/50"
              : "left-[100%]"
          } lg:relative lg:left-0 lg:bg-transparent lg:shadow-none lg:p-0 lg:w-full`}
        >
          <NavListLinks />
        </div>
      </div>
    </nav>
  );
};
