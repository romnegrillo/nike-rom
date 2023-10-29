const ButtonSecondary = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray  border border-slate-gray hover:bg-slate-500 hover:text-white hover:border-slate-500 min-w-[170px]">
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default ButtonSecondary;
