import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const RightSubsection = () => {
  const sectionRef = useRef();

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
        start: 'top-=300 bottom',
        onLeaveBack: () => textAnimation.pause(0),
      });

      const imgAnimation = gsap.from('.-z-10', {
        duration: 1,
        ease: 'power-4',
        y: '+=400',
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
        start: 'top-=300 bottom',
        onLeaveBack: () => imgAnimation.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#1b1a19] w-1/2 flex flex-col justify-end items-center -z-30"
    >
      <section className="absolute rounded-2xl bg-[#c0a8e6] left-[60%] h-1/4 w-1/6 -z-20" />
      <section className="absolute rounded-3xl bg-[#49a3a7] right-[5%] h-1/2 w-1/6 -z-20" />
      <Image
        src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a8a68699851c644ef2ba62_spotify_kid_cutout_01.png"
        alt="boy with player"
        width={550}
        height={550}
        className="-z-10"
      />
    </div>
  );
};

export default RightSubsection;
