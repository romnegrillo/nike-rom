import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const NavMobileMenu = ({ setIsMobileNavOpen, navLinks }) => {
  return (
    <div className="absolute right-0 top-0 h-screen bg-white z-10 w-2/3 flex flex-col justify-start items-center shadow-xl max-lg:block overflow-hidden">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col flex-1 p-4 gap-10 justify-start mb-10 w-full px-8">
          <li>
            <MdClose
              className="h-8 w-8 text-slate-gray mt-4"
              onClick={() => {
                setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
              }}
            />
          </li>
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="w-full border-b pb-2"
              onClick={() => {
                setIsMobileNavOpen((prevSetMobileOpen) => !prevSetMobileOpen);
              }}
            >
              <Link
                to={item.link}
                className="font-montserrat leading-normal  text-slate-gray flex  items-center"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMobileMenu;
