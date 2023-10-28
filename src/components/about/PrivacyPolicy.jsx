import { privacyPolicies } from '../../data';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <h2 className="text-3xl font-bold font-palanquin mt-16 mb-8">
        Privacy Policy
      </h2>

      {privacyPolicies.map((privacyPolicy, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold font-palanquin mb-4">
            {index + 1}.) {privacyPolicy.title}
          </h3>

          <p className="font-montserrat leading-7 text-slate-gray mb-8">
            {privacyPolicy.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
