import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavMobileMenu from './NavMobileMenu';
import { Hamburger } from '../common';

import { navLinks } from '../../data';
import { headerLogo } from '../../assets/images';
import { search } from '../../assets/icons';

const Nav = ({ navColor, hamburgerColor }) => {
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
    <nav className="padding-x md:py-12 py-8 absolute left-0 top-0 w-full z-20">
      <div className="flex flex-row justify-between items-center max-container">
        <a href="/" className="lg:absolute">
          <img src={headerLogo} width={130} height={29} />
        </a>

        <ul className=" flex-row flex-1 justify-center items-center gap-16 hidden lg:flex">
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
          <Link to="/products">
            <img
              src={search}
              width={28}
              height={28}
              alt="search icon"
              className="fill-coral-red cursor-pointer"
            />
          </Link>
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
            className={`${hamburgerColor ? hamburgerColor : null}`}
          />
        </div>

        {isMobileNavOpen && (
          <div className="block lg:hidden">
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
              onClick={() => setIsMobileNavOpen(false)}
            ></div>
            <NavMobileMenu
              isMobileNavOpen={isMobileNavOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
              navLinks={navLinks}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
