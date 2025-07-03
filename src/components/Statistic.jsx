const Statistic = (props) => {
  const { title, description } = props;

  return (
    <>
      <div className="">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-base font-normal text-white">{description}</p>
      </div>
    </>
  );
};

export default Statistic;
