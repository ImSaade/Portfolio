function MenuToggleButton({ toggleMenu, isMenuOpen }) {
  return (
    <button
      className="header__toggle bg-transparent border-none cursor-pointer p-3 z-20 absolute top-5 right-6 md:hidden"
      aria-label="Abrir menú"
      onClick={toggleMenu}
      aria-expanded={isMenuOpen ? "true" : "false"}
    >
      <span className={`block w-7 h-0.5 bg-white mb-1 transition-all`}></span>
      <span className={`block w-7 h-0.5 bg-white mb-1 transition-all`}></span>
      <span className={`block w-7 h-0.5 bg-white mb-1 transition-all`}></span>
    </button>
  );
}

export default MenuToggleButton;
