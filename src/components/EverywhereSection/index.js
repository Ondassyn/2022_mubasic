import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const EverywhereSection = () => {
  const ref = useRef();
  const smallRef = useRef();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(smallRef.current.clientHeight);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...

      const anim = gsap.to('h1', {
        duration: 1,
        ease: 'power4',
        stagger: 0.2,
        scaleY: 1,
        transformOrigin: 'bottom',
        scrollTrigger: '#everywhere-text',
        paused: true,
      });

      gsap.to('#everywhere-section', {
        scrollTrigger: {
          pin: '#everywhere-text',
          trigger: '#everywhere-text',
          start: 'top top+=48px',
          // end: `+=${window.innerHeight / 2}`,
          end: `bottom-=${height}`,
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: '#everywhere-section',
        start: 'top top',
        onEnter: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: 'h1',
        onLeaveBack: () => anim.pause(0),
      });
    }, ref); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  }, [height]);

  return (
    <section
      className="h-screen flex flex-row"
      ref={ref}
      id="everywhere-section"
    >
      <div className="w-1/2 bg-gray-900 p-12"></div>
      <div className="w-1/2 bg-[#F3F3F3] p-12 flex flex-col justify-between">
        <div
          id="everywhere-text"
          className="text-[5.5rem] font-bold whitespace-pre-line tracking-[-.2rem] leading-[4.7rem]"
        >
          <h1 className="scale-y-0">Our music is</h1>
          <h1 className="scale-y-0">already</h1>
          <h1 className="scale-y-0">playing</h1>
          <h1 className="scale-y-0">practically</h1>
          <h1 className="scale-y-0">everywhere</h1>
        </div>
        <div ref={smallRef} className="whitespace-pre-line text-xl">
          {
            'With collaborations ranging from\n big movie scores to\n groundbreaking metaverse audio\n experiences.'
          }
        </div>
      </div>
    </section>
  );
};

export default EverywhereSection;
