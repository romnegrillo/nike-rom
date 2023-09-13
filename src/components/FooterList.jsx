import React from 'react';

const FooterList = ({ footerLink }) => {
  return (
    <div className="flex flex-col flex-1 justify-center min-w-[200px]">
      <p className="font-bold mb-8 text-3xl font-palanquin">
        {footerLink.title}
      </p>

      <ul className="flex  flex-col gap-y-1">
        {footerLink.links.map((link, index) => (
          <li className="leading-8 text-stone-300 font-montserrat" key={index}>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
