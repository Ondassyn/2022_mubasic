import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const LeftSubsection = () => {
  const sectionRef = useRef();

  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    debouncedHandleResize();

    window.addEventListener('resize', debouncedHandleResize);

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textAnimation = gsap.from('section', {
        duration: 2,
        ease: 'elastic.out',
        stagger: 0.2,
        scale: 0.5,
        transformOrigin: 'center',
        scrollTrigger: '#section',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: 'section',
        start: `top 80%`,
        onEnter: () => textAnimation.play(),
      });

      ScrollTrigger.create({
        trigger: 'section',
        onLeaveBack: () => textAnimation.pause(0),
      });

      const imgAnimation = gsap.from('.-z-10', {
        duration: 1.5,
        ease: 'power4',
        delay: 2,
        y: '+=500',
        transformOrigin: 'center',
        scrollTrigger: '#section',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: 'section',
        start: `top bottom`,
        onEnter: () => imgAnimation.play(),
      });

      ScrollTrigger.create({
        trigger: 'section',
        onLeaveBack: () => imgAnimation.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="#section"
      ref={sectionRef}
      className="w-1/2 bg-[#f5e1be] flex flex-col justify-end items-center -z-30"
    >
      <section
        id="#rectangle"
        className="absolute w-1/4 h-[60%] mb-[10%] bg-[#fac670] rounded-[7rem] -z-20"
      ></section>
      <section
        id="#circle"
        className="absolute left-[5%] mb-[10%] mt-72 bg-[#f37925] rounded-full -z-20"
        style={{
          width: dimensions?.width / 5,
          height: dimensions?.width / 5,
        }}
      ></section>

      <Image
        src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a62e004468e7a56680b37f_mubasic-vision-girl-min.png"
        alt="Picture of a singing child"
        width={dimensions?.width ? dimensions?.width / 3 : 300}
        height={dimensions?.width ? dimensions?.width / 3 : 300}
        className="-z-10"
      />
    </div>
  );
};

export default LeftSubsection;
