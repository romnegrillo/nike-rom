import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavMobileMenu from './NavMobileMenu';
import { Hamburger } from '../common';

import { navLinks } from '../../data';
import { headerLogo } from '../../assets/images';
import { shoppingCart, search, user } from '../../assets/icons';

const Nav = ({ navColor }) => {
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
    <nav className="padding-x py-12 absolute w-full z-20">
      <div className="flex flex-row justify-between items-center max-container">
        <a href="/" className="lg:absolute">
          <img src={headerLogo} width={130} height={29} />
        </a>

        <ul className="flex flex-row flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                className={`font-montserrat leading-normal text-xl ${
                  navColor ? navColor : 'text-slate-gray'
                }`}
                to={item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-10 mr-8 max-lg:hidden">
          <img
            src={search}
            width={28}
            height={28}
            alt="search icon"
            className="fill-coral-red cursor-pointer"
          />
          <img
            src={shoppingCart}
            width={30}
            height={30}
            alt="cart icon"
            className="fill-coral-red cursor-pointer"
          />
          <img
            src={user}
            width={30}
            height={30}
            alt="user icon"
            className="fill-coral-red cursor-pointer"
          />
        </div>

        <div
          className="max-lg:block hidden"
          onClick={() => {
            setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
          }}
        >
          <Hamburger
            width={32}
            height={32}
            className={navColor.replace('text', 'fill')}
          />
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
