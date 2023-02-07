import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const LeftSubsection = () => {
  const sectionRef = useRef();
  const [copied, setCopied] = useState(false);

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
      className="w-1/2 bg-[#c0a8e6] p-10 flex flex-col justify-between"
    >
      <Image
        src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a7833b0d6bca0f42891670_contact-icn.svg"
        alt="@"
        loading="lazy"
        height={100}
        width={100}
      />
      <div className="flex flex-col">
        {/* <p className="contact text-7xl font-bold scale-y-0">
          Contact us
        </p> */}

        <div className="text-7xl font-bold flex flex-row flex-wrap">
          {[...'Contact us'].map((c, index) => {
            if (c === ' ')
              return (
                <pre key={index} className="text-2xl">
                  {c}
                </pre>
              );
            else
              return (
                <p key={index} className="contact scale-y-0">
                  {c}
                </p>
              );
          })}
        </div>
        <p className="italic font-bold text-[#f5e1be] text-3xl">
          anytime
        </p>
      </div>
      <p
        className="text-5xl font-bold cursor-copy"
        onClick={() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        {copied ? 'Copied!' : 'info@mubasic.com'}
      </p>
    </div>
  );
};

export default LeftSubsection;
