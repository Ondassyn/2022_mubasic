import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';

const LeftSubsection = () => {
  const sectionRef = useRef();
  const textRef = useRef();

  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    setTextHeight(textRef.current.clientHeight);
  }, []);

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
          end: (self) => {
            return (
              self.start +
              innerHeight -
              self.pin.clientHeight -
              textHeight
            );
          },
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [textHeight]);

  return (
    <div
      ref={sectionRef}
      id="#section"
      className="w-1/2 bg-[#ead0a3] p-12 flex flex-col justify-between"
    >
      <div
        id="main-text"
        className="text-[5.5rem] font-bold whitespace-pre-line tracking-[-.2rem] leading-[4.7rem] flex-shrink-0"
      >
        <h1 className="scale-y-0">We work</h1>
        <h1 className="scale-y-0">with the</h1>
        <h1 className="scale-y-0">best talent</h1>
        <h1 className="scale-y-0">across the</h1>
        <h1 className="scale-y-0">globe.</h1>
      </div>
      <div ref={textRef} className="whitespace-pre-line text-xl">
        {'From established musicians to\nupcoming creators.'}
      </div>
    </div>
  );
};

export default LeftSubsection;
