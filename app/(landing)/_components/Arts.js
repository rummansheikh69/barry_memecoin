import React from "react";

const Arts = () => {
  const upperMarquee = [
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/zs2sgjhzit5s1s3njmcn",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/lpm8aufdr1c7wgvsrdcj",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/ton3obt4399evcnssons",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/jbbteerxf0dymcnhfyjk",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/eufzccendkwbu7xerycb",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/pxq3bhlhby6el78f7mv1",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/klrfs00itfxubv0lhopx",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/qvvddsdogkxqy0b09nzu",
  ];
  const lowerMarquee = [
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/cvsdd4sgukhntkyqkwlx",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/lopg6qdnzskensk1fou2",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/vfcmenrbre6gas347xz4",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/gbzwsvbpokpknrz9fiqa",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/wysptz7lcpl3ucbunpdn",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/yu2sgwfla7chjmcktnl3",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/xzbjtuli3brpii6wi24k",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/gtlqjjtqk3xeho8d15vh",
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
