import { FAQCard } from '../about';
import { faqs } from '../../data';

const FAQ = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <h2 className="text-3xl font-bold font-palanquin mt-16 mb-8">
        Frequently Asked Questions
      </h2>

      <ul className="flex flex-col items-center gap-8 w-full ">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
