import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const RightSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgAnimation = gsap.from('.img', {
        duration: 1,
        ease: 'elastic.out(1.1, 0.7)',
        delay: 'random(0, 1, 0.2)',
        y: '+=150',
        scrollTrigger: '#section',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: '.img',
        start: 'bottom bottom',
        onEnter: () => imgAnimation.play(),
      });

      ScrollTrigger.create({
        trigger: '.img',
        onLeaveBack: () => imgAnimation.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="section"
      className="w-1/2 p-10 flex flex-col bg-[#f5e1be] text-xl"
    >
      <div className="h-1/3 flex flex-row">
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#91c3ce] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e8db5f7b49223465dd4d_creator_01_producers.png"
              alt="girl with mic"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Producers</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#fac670] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e8e508915b202c504eea_creator_02_artists.png"
              alt="guy with trumpet"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Musicians</p>
        </div>
      </div>

      <div className="h-1/3 flex flex-row justify-end">
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#c0a8e6] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e8f175be69693a80b179_creator_03_instrumentalists.png"
              alt="girl with mic"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Instrumentalists</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#f37925] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e8f90231625cfc85caf6_creator_04_guitarists.png"
              alt="guy with trumpet"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Songwriters</p>
        </div>
      </div>

      <div className="h-1/3 flex flex-row">
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#fac670] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e9037b5b9df257524259_creator_05_beat-makers.png"
              alt="girl with mic"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Visual artists</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 px-4">
          <div className="rounded-xl bg-[#91c3ce] overflow-hidden">
            <Image
              src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b2e90b401ff748a486ebbf_creator_06_vocalists.png"
              alt="guy with trumpet"
              height={260}
              width={260}
              className="img translate-y-6"
            />
          </div>
          <p>Vocalists</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
