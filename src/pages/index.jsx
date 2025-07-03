import Navbar from "../components/Navbar";

import Button from "../components/Button";

import Statistic from "../components/Statistic";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-t from-blue-700 to-transparent h-screen">
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="bg-blue-700 w-44 h-8 rounded-full flex justify-center items-center gap-3">
            <i className="bi bi-broadcast text-white"></i>
            <p className="text-sm font-medium text-white">Testnet is Live!</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-bold text-white krona-one-regular text-center">
              Open Source and Public Blockchain
            </h1>
            <p className="text-base font-normal text-white text-center mt-5">
              Llama Network is open source and public blockchain build with Node
              JS.
            </p>
            <Button classname="text-base font-bold text-white rounded-lg mt-10">
              Read Docs
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-26">
          <Statistic title="2000" description="Block" />
          <Statistic title="1000" description="transaction" />
          <Statistic title="100" description="Node" />
        </div>
      </main>
    </>
  );
};

export default MainPage;
