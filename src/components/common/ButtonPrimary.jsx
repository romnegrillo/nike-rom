const ButtonPrimary = ({ label, iconUrl, className, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white  border-colar-red hover:bg-coral-red-dark hover:border-coral-red-dark min-w-[170px]   ${
        className ? className : ''
      }`}
      onClick={onClick ? onClick : null}
    >
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

export default ButtonPrimary;
