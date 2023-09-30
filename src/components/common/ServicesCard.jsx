const ServicesCard = ({ service }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[350px] max-md:w-full items-start justify-center  px-10 py-16 h-[300px] rounded-xl shadow-3xl">
      <img
        src={service.imgUrl}
        alt={service.label}
        className="bg-coral-red p-2 rounded-full"
      />
      <h3 className="text-3xl font-bold font-palanquin mt-8 leading-normal">
        {service.label}
      </h3>
      <p className="text-lg font-lg text-slate-gray font-palanquin leading-normal">
        {service.subtext}
      </p>
    </div>
  );
};

export default ServicesCard;
