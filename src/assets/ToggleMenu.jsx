const Menu = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
  </svg>
);

export const ToggleMenu = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`cursor-pointer relative z-10 transition-transform duration-300 ease-in-out ${
        isOpen ? "-translate-x-[250px]" : "-translate-x-0"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Menu
        className={`w-8 fill-neutral-800 dark:fill-neutral-300 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
      />
    </button>
  );
};
