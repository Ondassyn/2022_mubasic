import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const RightSubsection = () => {
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
              window.innerHeight / 1.2 -
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
        <h1 className="scale-y-0">Driven by</h1>
        <h1 className="scale-y-0">the desire to</h1>
        <h1 className="scale-y-0">enable</h1>
        <h1 className="scale-y-0">better music</h1>
        <h1 className="scale-y-0">for children.</h1>
      </div>
      <div ref={textRef} className="whitespace-pre-line text-xl">
        {
          "Studies prove that children's abilities to learn are\n highly affected by auditory inputs. We believe that \n children deserve high quality music productions -\n just like adults - and are striving to set the new\nstandard for children's music anywhere in the world."
        }
      </div>
    </div>
  );
};

export default RightSubsection;
