import React from "react";

const Arts = () => {
  const upperMarquee = [
    "/p1.webp",
    "/p2.webp",
    "/p3.webp",
    "/p4.webp",
    "/p5.webp",
    "/p6.webp",
    "/p7.webp",
    "/p8.webp",
  ];
  const lowerMarquee = [
    "/p9.webp",
    "/p10.webp",
    "/p11.webp",
    "/p12.webp",
    "/p13.webp",
    "/p14.webp",
    "/p15.webp",
    "/p16.webp",
  ];

  return (
    <div id="exchanges" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Arts
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          Trending Arts
        </h3>
      </div>
      <div className=" container mx-auto gap-y-20 ">
        <div className=" border p-2 border-black rounded ">
          {/* upper marquee  */}

          <div className=" flex gap-5">
            {upperMarquee.map((image, index) => (
              <div
                key={index}
                className={`h-64 w-64 ${index % 2 === 1 ? "mt-5" : ""}`}
              >
                <img
                  src={image}
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className=" flex gap-2 mt-10">
            {lowerMarquee.map((image, index) => (
              <div
                key={index}
                className={`h-64 w-64 ${index % 2 === 1 ? "mt-5" : ""}`}
              >
                <img
                  src={image}
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arts;
