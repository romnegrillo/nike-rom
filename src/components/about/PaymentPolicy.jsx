import { paymentPolicies } from '../../data';

const PaymentPolicy = () => {
  return (
    <div id="paymentPolicy" className="flex flex-col justify-start items-start">
      <h2 className="text-3xl font-bold font-palanquin mt-16 mb-8">
        Payment Policy
      </h2>

      {paymentPolicies.map((paymentPolicy, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold font-palanquin mb-4">
            {index + 1}.) {paymentPolicy.title}
          </h3>

          <p className="font-montserrat leading-7 text-slate-gray mb-8">
            {paymentPolicy.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PaymentPolicy;
