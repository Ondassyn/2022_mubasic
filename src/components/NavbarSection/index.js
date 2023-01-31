import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const NavbarSection = () => {
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
      ref={sectionRef}
      className="h-[80vh] p-10 bg-[#fcf3e4] flex flex-col justify-between items-center"
    >
      <div className="flex flex-row justify-between"></div>

      <div className="text-[20vw] leading-none font-bold flex flex-row flex-wrap">
        {[...'mubasic'].map((c, index) => (
          <p key={index} className="contact scale-y-0">
            {c}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavbarSection;
