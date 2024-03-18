const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border fomt-montserrat text-lg leading-none ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } rounded-full ${textColor ? textColor : "text-white"}  ${
        borderColor ? borderColor : "bg-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {iconURL && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="Icon" />
      )}
    </button>
  );
};

export default Button;
