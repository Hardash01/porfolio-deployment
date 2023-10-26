import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-20 bg-black backdrop-blur-md bg-opacity-70 rounded-b-3xl border-b border-b-naranja border-opacity-50">
      <div className="max-w-screen-xl px-5 mg:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-4/6 py-3 md:pl-0 ">
        <a href='#inicio' className="flex items-center pl-0">
          <img src="/img/logo.svg" width={110} height={35} alt="Logo EdwinSantos" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <XIcon className="w-7 h-7 text-white" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-7 h-7 text-white" aria-hidden="true" />
          )}
        </button>
        <div
          className={`absolute top-full left-0 px-1 pb-1 w-full md:w-auto ${
            isMenuOpen ? 'block bg-grisoscuro' : 'hidden'
          } transition-all duration-500 ease-in-out md:flex md:items-center md:space-x-8 md:relative md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="text-sm md:text-sm lg:text-sm 2xl:text-lg flex flex-col p-4 md:p-0 mt-4 border border-naranja700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href='#sobremi' className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#proyectos" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#logros" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                Logros
              </a>
            </li>
            <li>
              <a href="#contacto" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
