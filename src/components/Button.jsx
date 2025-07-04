const Button = (props) => {
  const {
    variant = "bg-blue-500",
    height = "h-10",
    width = "w-44",
    classname,
    children,
  } = props;

  return (
    <>
      <button
        className={`${variant} ${height} ${width} ${classname} hover:bg-blue-700 hover:duration-400`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
