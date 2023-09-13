import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../data';

const Nav = () => {
  return (
    <div className="padding-x py-8 absolute  w-full  z-10">
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

        <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none text-white rounded-full bg-gray-700 min-w-[170px] mr-8">
          Sign In
        </button>

        <div className="max-lg:block hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
