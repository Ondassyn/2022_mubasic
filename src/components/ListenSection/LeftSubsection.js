import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const LeftSubsection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textAnimation = gsap.to('.contact', {
        duration: 1,
        ease: 'elastic',
        stagger: 0.03,
        scaleY: 1,
        transformOrigin: 'bottom',
        scrollTrigger: '#section',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: '.contact',
        start: 'top 80%',
        onEnter: () => textAnimation.play(),
      });

      ScrollTrigger.create({
        trigger: '.contact',
        onLeaveBack: () => textAnimation.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="section"
      ref={sectionRef}
      className="bg-[#1b1a19] w-1/2 p-10 flex flex-col justify-between"
    >
      <Image
        src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a8a5715cc9b22ee358da21_05_DSP_Icon_Spotify.svg"
        alt="Spotify logo"
        height={100}
        width={100}
      />
      <div className="flex flex-col">
        {/* <p className="contact text-7xl font-bold scale-y-0">
          Contact us
        </p> */}

        <div className="text-7xl font-bold flex flex-row flex-wrap text-[#fcf3e4]">
          {[...'Listen to us'].map((c, index) => {
            if (c === ' ') return <pre className="text-2xl">{c}</pre>;
            else
              return (
                <p key={index} className="contact scale-y-0">
                  {c}
                </p>
              );
          })}
        </div>
        <p className="italic font-bold text-[#f5e1be] text-3xl">
          all the time
        </p>
      </div>
      <p className="text-4xl underline text-[#fcf3e4] font-bold">
        Spotify
      </p>
    </div>
  );
};

export default LeftSubsection;
