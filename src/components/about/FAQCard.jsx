import { useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const FAQCard = ({ question, answer }) => {
  const [toggleCard, setToggleCard] = useState(true);

  return (
    <li className="flex flex-col justify-start lg:w-2/3 w-full font-semibold rounded-lg shadow-md border">
      <h3
        className={`md:text-xl text-lg font-palanquin text-white flex justify-between items-center px-8 py-4 bg-coral-red rounded-tl-lg  rounded-tr-lg ${
          toggleCard ? '' : 'rounded-lg'
        }`}
      >
        <span className="flex-1">{question}</span>

        {toggleCard ? (
          <MdKeyboardArrowUp
            className="w-8 h-8 cursor-pointer ml-2"
            onClick={() => setToggleCard(!toggleCard)}
          />
        ) : (
          <MdKeyboardArrowDown
            className="w-8 h-8 cursor-pointer ml-2"
            onClick={() => setToggleCard(!toggleCard)}
          />
        )}
      </h3>

      {toggleCard && (
        <p className="px-8 py-4 rounded-bl-xl font-montserrat text-sm md:text-md leading-7 text-slate-gray">
          {answer}
        </p>
      )}
    </li>
  );
};

export default FAQCard;
