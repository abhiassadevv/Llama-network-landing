import { useState } from "react";

import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-10 md:px-10">
        <div className="flex justify-start items-center">
          <a href="" className="text-xl font-bold text-white">
            Llama Network
          </a>
        </div>
        <ul className="hidden justify-center items-center gap-10 md:flex">
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-xs font-normal text-white">
              Whitepaper
            </a>
          </li>
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-xs font-normal text-white">
              Docs
            </a>
          </li>
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-xs font-normal text-white">
              Explorer
            </a>
          </li>
        </ul>
        <div className="flex justify-end items-center">
          <button onClick={() => menuButtonHandler()} className="md:hidden">
            <i className="bi bi-list text-2xl text-white"></i>
          </button>
          <Button
            height="h-10"
            width="w-26"
            classname="hidden rounded-lg text-base font-bold text-white md:flex"
          >
            Run Node
          </Button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="absolute top-26 left-0 right-0 z-1 bg-slate-950 p-5 flex flex-col gap-10">
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-sm font-normal text-white">
              Whitepaper
            </a>
          </li>
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-sm font-normal text-white">
              Docs
            </a>
          </li>
          <li className="border-b-3 border-transparent py-2 hover:border-b-3 hover:border-blue-700 hover:duration-300">
            <a href="" className="text-sm font-normal text-white">
              Explorer
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
