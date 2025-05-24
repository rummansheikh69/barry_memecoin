import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";
import Arts from "./_components/Arts";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[#e4e0e1]">
        <About />
        <Exchanges />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/art1.webp"
                width={300}
                height={300}
                alt="dui-5"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <Arts />

        <Tokenomics />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/art1.webp"
                width={300}
                height={300}
                alt="dui-8"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <HowToBuy />
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              className="hidden md:block"
              src="/p10-trans.webp"
              width={300}
              height={300}
              alt="dui-6"
            />
            <Image
              className=" mt-10"
              src="/p3-trans.webp"
              width={300}
              height={300}
              alt="dui-8"
            />
          </div>
          <div className="mt-5">
            <p className="font-stopbuck text-2xl text-black">Woof! Woof!</p>
          </div>
        </div>
        {/* <WallOfLove /> */}
        <Footer />
      </div>
    </>
  );
}
