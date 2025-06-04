function MenuList({ isMenuOpen, closeMenu }) {
  return (
    <ul
      className={`flex gap-7 list-none md:flex ${
        isMenuOpen ? "fixed top-0 right-0 flex-col bg-[#27374D] text-white w-full max-w-xs h-screen py-24 px-8 backdrop-blur-sm transition-all ease-out duration-500" : "hidden"
      }`}
    >
      <li className="header__item">
        <a href="#sobre-mi" onClick={closeMenu} className="header__link hover:underline text-white md:text-white">
          Sobre Mí
        </a>
      </li>
      <li className="header__item">
        <a href="#habilidades" onClick={closeMenu} className="header__link hover:underline text-white md:text-white">
          Habilidades
        </a>
      </li>
      <li className="header__item">
        <a href="#proyectos" onClick={closeMenu} className="header__link hover:underline text-white md:text-white">
          Proyectos
        </a>
      </li>
      <li className="header__item">
        <a href="#educacion" onClick={closeMenu} className="header__link hover:underline text-white md:text-white">
          Educación
        </a>
      </li>
      <li className="header__item">
        <a href="#contacto" onClick={closeMenu} className="header__link hover:underline text-white md:text-white">
          Contacto
        </a>
      </li>
    </ul>
  );
}

export default MenuList;
