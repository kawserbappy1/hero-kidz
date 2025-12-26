import { MyFont } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className={`${MyFont.className} flex-1`}>
        <h1 className="text-6xl font-bold leading-16">
          সংখ্যা ও গণনা শেখার <br />
          <span className="text-primary">শিক্ষামূলক বোর্ড</span>
        </h1>
        <p className="text-xl my-5 max-w-md">
          একটি শিক্ষামূলক বোর্ড যা সংখ্যা ও গণনার মাধ্যমে শিক্ষার প্রক্রিয়াকে
          সহজের মতো করে।একটি শিক্ষামূলক বোর্ড যা সংখ্যা ও গণনার মাধ্যমে শিক্ষার
          প্রক্রিয়াকে সহজের মতো করে।
        </p>
        <button className="btn btn-primary">আরো জানুন</button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Hero Image"
          width={800}
          height={600}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
