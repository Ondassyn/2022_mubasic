import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const LeftSubsection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textAnimation = gsap.to('h1', {
        duration: 1,
        ease: 'power4',
        stagger: 0.2,
        scaleY: 1,
        transformOrigin: 'bottom',
        scrollTrigger: '#main-text',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: 'h1',
        start: 'top 80%',
        onEnter: () => textAnimation.play(),
      });

      ScrollTrigger.create({
        trigger: 'h1',
        onLeaveBack: () => textAnimation.pause(0),
      });

      gsap.to('#section', {
        scrollTrigger: {
          pin: '#main-text',
          trigger: '#main-text',
          start: 'top top+=48px',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="#section"
      className="w-1/2 bg-[#fac670] p-12 flex flex-col justify-between"
    >
      <div
        id="main-text"
        className="text-[5.5rem] font-bold whitespace-pre-line tracking-[-.2rem] leading-[4.7rem] flex-shrink-0"
      >
        <h1 className="scale-y-0">Send your</h1>
        <h1 className="scale-y-0 text-[#f37925]">good</h1>
        <h1 className="scale-y-0">vibes</h1>
        <h1 className="scale-y-0">our way.</h1>
      </div>
    </div>
  );
};

export default LeftSubsection;
