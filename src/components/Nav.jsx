import { useState, useEffect, useRef } from 'react';

import NavMobile from './NavMobile';

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../data';

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navbarRef.current.contains(event.target)) {
        setIsMobileNavOpen(false); // Close the navbar
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className="padding-x py-8 absolute w-full z-20">
      <nav className="flex flex-row justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} />
        </a>

        <ul className="flex flex-row flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none text-white rounded-full bg-gray-700 min-w-[170px] mr-8 max-lg:hidden ">
          Sign In
        </button>

        <div
          className="max-lg:block hidden"
          onClick={() => {
            setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
          }}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

        {isMobileNavOpen && (
          <NavMobile
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
            navLinks={navLinks}
          />
        )}
      </nav>
    </div>
  );
};

export default Nav;
