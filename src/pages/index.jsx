import Navbar from "../components/Navbar";

import Button from "../components/Button";

import Statistic from "../components/Statistic";

import BlurElement from "../components/BlurElement";

import Card from "../components/Card";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-gradient-to-t from-blue-700 to-transparent px-5 py-16">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 w-44 h-8 rounded-full flex justify-center items-center gap-3">
            <i className="bi bi-broadcast text-white"></i>
            <p className="text-sm font-medium text-white">Testnet is Live!</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-2xl font-bold text-white krona-one-regular text-center">
              Open Source and Public Blockchain
            </h1>
            <p className="text-base font-normal text-white text-center mt-5">
              Llama Network is open source and public blockchain build with Node
              JS.
            </p>
            <Button classname="text-base font-bold text-white rounded-lg mt-10">
              <i className="bi bi-book-fill mr-2"></i>Read Docs
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-26">
          <Statistic title="2000" description="Block" />
          <Statistic title="1000" description="transaction" />
          <Statistic title="100" description="Node" />
        </div>
        <BlurElement />
      </main>
      <section className="px-5 py-10">
        <h3 className="text-xl font-bold text-white mt-20 text-center">
          Why Llama Network ?
        </h3>
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
          <Card
            title="Fast"
            description="Llama Network cant proccessed 100tps."
            icon="bi bi-lightning-fill"
          />
          <Card
            title="Node"
            description="Llama Network nodes run in many parts of the world."
            icon="bi bi-globe-americas-fill"
          />
        </div>
      </section>
      <section className="px-5 py-10">
        <div className="bg-gradient-to-tr from-slate-600 to-slate-900 h-80 rounded-2xl flex flex-col justify-center items-center">
          <h5 className="text-2xl font-bold text-white text-center">
            Ready to use Llama Network?
          </h5>
          <Button classname="rounded-lg text-base font-bold text-white mt-5">
            Use Now
          </Button>
        </div>
      </section>
      <footer className="px-5 py-10">
        <h5 className="text-2xl font-bold text-white">Llama Network</h5>
        <p className="text-base font-normal text-white opacity-80">
          Open source and public blockchain.
        </p>
        <p className="text-xs font-normal text-white opacity-80 mt-5">
          &copy; 2025 Llama Network Developer. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default MainPage;
