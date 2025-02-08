'use client'
import { Menu, BadgeHelp, Home, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const NavigationBar = ({ title = "Portfolio" }) => {
  const [is_open_menu, setIsOpenMenu] = useState(false);

  return (
    <nav className="bg-neutral-900 flex items-center justify-between p-4 mx-auto">
      <h1 className="text-white text-lg">{title}</h1>

      { 
        is_open_menu ?
          <XIcon
            className="text-white z-50 md:hidden cursor-pointer"
            onClick={() => setIsOpenMenu(!is_open_menu)}
            />
        :
          <Menu
            className="text-white z-50 md:hidden cursor-pointer"
            onClick={() => setIsOpenMenu(!is_open_menu)}
            />
      }


      <ul
        className={`fixed top-0 right-0 h-full w-72 bg-[#121212] p-6 pt-12 md:pt-0 z-40 transition-transform duration-300 ${is_open_menu ? 'translate-x-0' : 'translate-x-full'
          } md:static md:flex md:items-center md:gap-4 md:h-auto md:w-auto md:p-0 md:bg-transparent md:translate-x-0`}
      >
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-4 text-white hover:bg-neutral-700 rounded-md md:p-2 border-b md:border-none border-neutral-400"
          >
            <Home className="md:hidden" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center gap-4 p-4 text-white hover:bg-neutral-700 rounded-md md:p-2 border-b md:border-none border-neutral-400"
          >
            <BadgeHelp className="md:hidden" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
