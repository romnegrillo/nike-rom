import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <div className="padding-x py-8 z-10 absolute  left-1/2 transform -translate-x-1/2 w-full max-container mx-auto">
      <nav className="flex flex-row justify-between items-center">
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

        <p className="max-lg:hidden font-montserrat leading-normal text-lg text-coral-red font-bold cursor-pointer">
          Login
        </p>

        <div className="max-lg:block hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
