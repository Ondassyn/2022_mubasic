import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef } from 'react';

const LeftSubsection = ({ data, dataIndex, setDataIndex }) => {
  const lottieRefs = useRef([]);
  lottieRefs.current = [];

  const addToRefs = (el) => {
    if (el && !lottieRefs.current.includes(el)) {
      lottieRefs.current.push(el);
    }
  };

  return (
    <section className="p-10 w-1/2 flex flex-col bg-[#f3f3f3]">
      <p className="text-xl">Explore our genres and moods.</p>
      <div className="my-36 flex flex-col gap-2 font-bold text-5xl">
        {data?.map((d, index) => (
          <div
            key={index}
            className={`flex flex-row gap-4 items-center py-6 pl-10 hover:pl-20 rounded-3xl cursor-pointer
                transition-[padding] duration-500 ease-in-out
                ${
                  index === dataIndex
                    ? 'bg-[#91C3CE]'
                    : 'hover:bg-[#dce8eb]'
                }
            `}
            onClick={() => {
              lottieRefs.current[dataIndex].stop();
              lottieRefs.current[index].play();
              setDataIndex(index);
            }}
          >
            <div className="w-24 h-24">
              <Player
                src={data[index]?.lottie}
                loop
                autoplay={index === dataIndex}
                ref={addToRefs}
              />
            </div>
            <p>{data[index]?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeftSubsection;
