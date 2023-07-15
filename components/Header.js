import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <nav className="bg-grisoscuro relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-4/6 p-3 md:pl-0">
        <a href='#inicio' className="flex items-center">
          <Image src="/img/logo.svg" width={110} height={35} alt="Logo EdwinSantos" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
          )}
        </button>
        <div
          className={`absolute top-full left-0 px-1 pb-1 w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } transition-all duration-500 ease-in-out bg-grisoscuro md:flex md:items-center md:space-x-8  md:relative md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-naranja700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
