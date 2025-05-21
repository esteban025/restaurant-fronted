export const NavListLinks = () => {
  return (
    <ul className="lg:flex lg:gap-8 lg:items-center px-1">
      <li className="capitalize flex flex-col gap-5 group lg:relative">
        <span className="pb-2 font-playfair text-2xl border-b-2 border-neutral-500/80 dark:border-neutral-200/10 lg:border-none">
          Categorías
        </span>
        <ul className="flex flex-col gap-1 lg:hidden lg:group-hover:flex lg:absolute lg:top-[100%] lg:bg-white/50 lg:rounded-lg">
          <a
            className="p-1 px-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white/30"
            href="#"
          >
            Categoria 1
          </a>
          <a
            className="p-1 px-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white/30"
            href="#"
          >
            Categoria 2
          </a>
          <a
            className="p-1 px-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white/30"
            href="#"
          >
            Categoria 3
          </a>
        </ul>
      </li>
    </ul>
  );
};
