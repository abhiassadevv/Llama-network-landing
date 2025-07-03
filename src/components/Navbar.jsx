const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-10">
        <div>
          <a href="" className="text-xl font-bold text-white">
            Llama Network
          </a>
        </div>
        <div>
          <button>
            <i className="bi bi-list text-2xl text-white"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
