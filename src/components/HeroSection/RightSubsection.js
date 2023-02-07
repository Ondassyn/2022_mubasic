import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const RightSubsection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.key', {
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        x: function (index, target, targets) {
          return target?.offsetWidth;
        },
      });

      let keys = gsap.utils.toArray('.key');

      keys.forEach((key, index) => {
        const hoverAnimation = gsap.to(key, {
          paused: true,
          duration: 0.1,
          x: 20,
        });

        key.addEventListener('mouseenter', () =>
          hoverAnimation.play()
        );
        key.addEventListener('mouseleave', () =>
          hoverAnimation.reverse()
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-1/2 bg-[#1b1a19] flex flex-col justify-center items-end gap-2 text-white text-2xl font-bold"
    >
      <div className="key bg-[#91c3ce] w-11/12 h-[15%] rounded-l-md px-8 flex flex-row items-center cursor-pointer">
        <div className="bg-black bg-opacity-5 px-8 py-6 rounded-lg">
          M
        </div>
      </div>
      <div className="key absolute z-10 top-[20%] bg-[#0d0d0d] w-[30%] h-[12%] rounded-l-md px-4 flex flex-row items-center cursor-pointer">
        <div className="bg-[#262626] px-8 py-6 rounded-lg">U</div>
      </div>
      <div className="key bg-[#fac670] w-11/12 h-[15%] rounded-l-md px-8 flex flex-row items-center cursor-pointer">
        <div className="bg-black bg-opacity-5 px-8 py-6 rounded-lg">
          B
        </div>
      </div>
      <div className="key bg-[#f5e1be] w-11/12 h-[15%] rounded-l-md px-8 flex flex-row items-center cursor-pointer">
        <div className="bg-black bg-opacity-5 px-8 py-6 rounded-lg">
          A
        </div>
      </div>
      <div className="key absolute z-10 top-[52%] bg-[#0d0d0d] w-[30%] h-[12%] rounded-l-md px-4 flex flex-row items-center cursor-pointer">
        <div className="bg-[#262626] px-8 py-6 rounded-lg">S</div>
      </div>
      <div className="key bg-[#f37925] w-11/12 h-[15%] rounded-l-md px-8 flex flex-row items-center cursor-pointer">
        <div className="bg-black bg-opacity-5 px-8 py-6 rounded-lg">
          I
        </div>
      </div>
      <div className="key bg-[#c0a8e6] w-11/12 h-[15%] rounded-l-md px-8 flex flex-row items-center cursor-pointer">
        <div className="bg-black bg-opacity-5 px-8 py-6 rounded-lg">
          C
        </div>
      </div>
    </div>
  );
};

export default RightSubsection;
