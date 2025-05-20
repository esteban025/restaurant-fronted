import { ToggleMenu } from "@/assets/ToggleMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex-1 flex items-center justify-end">
      <div className="grid grid-cols-[auto_auto]">
        <ToggleMenu isOpen={isMenuOpen} setIsOpen={setIsOpen} />
        <div
          className={`absolute top-0  bg-neutral-300/50 backdrop-blur-2xl p-2 px-6 rounded-lg w-xs h-full flex flex-col justify-center transition-all duration-300 ease-in-out shadow-2xl dark:bg-neutral-800/50 ${
            isMenuOpen
              ? "left-[calc(100%-320px)] shadow-black/50 dark:shadow-neutral-800/50"
              : "left-[100%]"
          }`}
        >
          <ul className="">
            <li>Categorias</li>
            <li>Servicios</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
