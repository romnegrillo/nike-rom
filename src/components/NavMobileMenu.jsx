import { hamburger, close } from '../assets/icons';

const NavMobileMenu = ({ isMobileNavOpen, setIsMobileNavOpen, navLinks }) => {
  return (
    <div className="absolute right-0 top-0 h-screen bg-white z-10 w-2/3 flex flex-col shadow-xl max-lg:block overflow-hidden">
      <img
        src={isMobileNavOpen ? close : hamburger}
        alt="hamburger"
        width={25}
        height={25}
        onClick={() => {
          setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
        }}
        className=" my-8 mx-12"
      />

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
  );
};

export default NavMobileMenu;
