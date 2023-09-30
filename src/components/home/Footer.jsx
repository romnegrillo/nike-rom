import { FooterList } from '../common';

import { socialMedia, footerLinks } from '../../data';
import { footerLogo } from '../../assets/images';

const Footer = () => {
  return (
    <footer className="max-container flex flex-col text-white font-montserrat">
      <div className="flex gap-x-16 mb-20 max-lg:flex-col">
        <div className="flex flex-col gap-8 mb-4">
          <img src={footerLogo} alt="nike logo" width={150} />
          <p className="max-w-sm leading- font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-6 font-montserrat">
            {socialMedia.map((icon, index) => (
              <a href="#" key={index}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={45}
                  height={45}
                  className="bg-white rounded-full text-black p-2"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 items-start flex-1 gap-8 max-lg:grid-cols-2">
          {footerLinks.map((footerLink, index) => (
            <FooterList key={index} footerLink={footerLink} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end max-lg:flex-col max-lg:items-center">
        <p className="text-stone-300 font-palanquin text-lg">
          <span>&copy;</span> Copyright. All rights reserved.
        </p>
        <a href="#" className="text-stone-300 text-lg font-palenquin">
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
