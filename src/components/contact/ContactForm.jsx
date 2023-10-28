import { MdEmail, MdTitle, MdMessage } from 'react-icons/md';

import { ButtonPrimary } from '../common';

const ContactForm = () => {
  return (
    <form className="flex flex-col flex-1 mb-8 w-full">
      <div className="flex justify-center items-center border border-slate-gray rounded-xl px-7 py-4  mb-4 md:max-w-xl w-full">
        <MdEmail className="mr-4 h-5 w-5 text-slate-gray" />
        <input
          type="text"
          className="flex-1 border-none outline-none   text-slate-gray"
          placeholder="Email"
        ></input>
      </div>

      <div className="flex border border-slate-gray rounded-xl px-7 py-4  mb-4 md:max-w-xl w-full">
        <MdTitle className="mr-4 h-5 w-5 text-slate-gray" />
        <input
          type="text"
          className="flex-1 border-none outline-none   text-slate-gray"
          placeholder="Subject"
        ></input>
      </div>

      <div className="flex border border-slate-gray rounded-xl px-7 py-4  mb-4 md:max-w-xl w-full">
        <MdMessage className="mr-4 h-5 w-5 text-slate-gray" />
        <textarea
          type="text"
          className="flex-1 border-none outline-none   text-slate-gray h-32"
          placeholder="Message"
        ></textarea>
      </div>

      <ButtonPrimary label="Send" className="max-w-xl" />
    </form>
  );
};

export default ContactForm;
