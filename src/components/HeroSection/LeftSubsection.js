import Image from 'next/image';
import React from 'react';

const LeftSubsection = () => {
  return (
    <div className="p-10 w-1/2 flex flex-col justify-between bg-[#fac670]">
      <div className="flex flex-row justify-between font-bold">
        <p className="text-3xl">mubasic</p>
        <div className="relative w-10 h-10">
          <Image
            src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b9d5bc544874e52353ea10_BRANDMARK_BLACK_SVG_X1.svg"
            fill
            alt="logo"
          />
        </div>
      </div>
      <div className="text-[5.5rem] font-bold whitespace-pre-line tracking-[-.2rem] leading-[4.7rem] flex-shrink-0">
        <h1>
          The <span className="text-[#f37925]">#1</span>
        </h1>
        <h1>source for</h1>
        <h1>{"children's"}</h1>
        <h1>music.</h1>
      </div>
      <div className="w-1/2 text-xl">
        {
          "An ever-growing catalogue of high-quality children's music, sourced by talented music creators from all over the world."
        }
      </div>
    </div>
  );
};

export default LeftSubsection;
