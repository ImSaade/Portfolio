import { useState } from "react";
import MenuToggleButton from "./MenuToggleButton";
import MenuList from "./MenuList";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow-lg fixed w-full top-0 z-10 backdrop-blur-sm border-b border-black/10" style={{ backgroundColor: "#27374D" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="header__logo">
          <h1 className="font-mono text-xl text-white tracking-tight mb-1">Eduardo Saavedra</h1>
        </div>
        <nav className="header__nav" aria-label="Navegación principal">
          <MenuToggleButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <MenuList isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
