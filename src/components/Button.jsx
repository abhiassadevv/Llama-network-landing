const Button = (props) => {
  const {
    variant = "bg-purple-700",
    height = "h-12",
    width = "w-44",
    classname,
    children,
  } = props;

  return (
    <>
      <button
        className={`${variant} ${height} ${width} border-2 border-slate-400 ${classname} hover:bg-blue-800 hover:duration-400`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
