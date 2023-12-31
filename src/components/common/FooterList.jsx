import { HashLink } from 'react-router-hash-link';

const FooterList = ({ footerLink }) => {
  return (
    <div className="flex flex-col flex-1 justify-center max-w-[200px]">
      <p className="font-bold mb-8 text-3xl font-palanquin">
        {footerLink.title}
      </p>

      <ul className="flex  flex-col gap-y-1">
        {footerLink.links.map((link, index) => (
          <HashLink key={index} to={link.link}>
            <li className="leading-8 text-stone-300 font-montserrat">
              {link.name}
            </li>
          </HashLink>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
