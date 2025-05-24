import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh">
      <div className="bg-[url(/hero-2.jpg)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10">
        <div className=" h-full w-full flex justify-center items-center">
          <img src="/sand-barry.png" alt="" className=" md:mt-64" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
