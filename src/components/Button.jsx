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
      <button className={`${variant} ${height} ${width} ${classname}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
