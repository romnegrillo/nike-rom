import { useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import NavMobileMenu from './NavMobileMenu';

import { navLinks } from '../../data';
import { headerLogo } from '../../assets/images';
import { hamburger } from '../../assets/icons';

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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

  return (
    <nav className="padding-x py-8 absolute w-full z-20">
      <div className="flex flex-row justify-between items-center max-container">
        <a href="/" className="lg:absolute">
          <img src={headerLogo} width={130} height={29} />
        </a>

        <ul className="flex flex-row flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                className="font-montserrat leading-normal text-lg text-slate-gray"
                to={item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="max-lg:block hidden"
          onClick={() => {
            setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
          }}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

        {isMobileNavOpen && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
              onClick={() => setIsMobileNavOpen(false)}
            ></div>
            <NavMobileMenu
              isMobileNavOpen={isMobileNavOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
              navLinks={navLinks}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
