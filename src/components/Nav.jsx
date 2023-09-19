import { useState, useEffect } from 'react';

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../data';

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);

  return (
    <div className="padding-x py-8 absolute w-full z-20">
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
            setMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
          }}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

        {mobileNavOpen && (
          <div className="absolute right-0 top-0 h-screen bg-white z-10 w-1/2 flex flex-col shadow-xl max-lg:block ">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={() => {
                setMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
              }}
              className=" my-8 mx-12"
            />

            <div className="flex flex-col flex-1 justify-center items-center">
              <a href="/">
                <img src={headerLogo} width={130} height={29} />
              </a>
            </div>

            <ul className="flex flex-col flex-1 p-4 gap-10 justify-center items-center mt-10">
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
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
