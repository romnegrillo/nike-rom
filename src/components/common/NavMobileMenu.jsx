import { ButtonPrimary, ButtonSecondary } from './';
import { close, shoppingCart, search, user } from '../../assets/icons';

const NavMobileMenu = ({ isMobileNavOpen, setIsMobileNavOpen, navLinks }) => {
  return (
    <div className="absolute right-0 top-0 h-screen bg-white z-10 w-2/3 flex flex-col justify-start items-center shadow-xl max-lg:block overflow-hidden">
      <img
        src={close}
        alt="hamburger"
        width={25}
        height={25}
        onClick={() => {
          setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
        }}
        className=" my-8 mx-12"
      />

      <div className="flex flex-col items-center">
        <ul className="flex flex-col flex-1 p-4 gap-10 justify-start items-center mb-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col-reverse p-4 gap-10 justify-center items-center  ">
          <ButtonSecondary label="Search" />
          <ButtonSecondary label="Cart" />
          <ButtonPrimary label="Login" />
        </ul>
      </div>
    </div>
  );
};

export default NavMobileMenu;
