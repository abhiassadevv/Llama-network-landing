const Card = (props) => {
  const { title, description, icon } = props;

  return (
    <>
      <div className="bg-slate-950 border-3 border-slate-900 h-80 w-72 rounded-2xl p-5 flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <i className={`${icon} text-[120px] text-blue-700 blur-sm`}></i>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{title}</h4>
          <p className="text-base font-normal text-white opacity-80">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
