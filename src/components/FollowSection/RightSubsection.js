import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const MEDIAS = [
  {
    name: 'Facebook',
    img: 'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a8358ab78e25445b015fb8_facebook.svg',
  },
  {
    name: 'YouTube',
    img: 'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a83c979ac0ad0fdb284490_youtube.svg',
  },
  {
    name: 'Instagram',
    img: 'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a83c9f734d917dcb8ae59f_instagram.svg',
  },
  {
    name: 'Twitter',
    img: 'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a83ca6cc7858e0ce1e5144_twitter.svg',
  },
  {
    name: 'TikTok',
    img: 'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62bdaf38ba2b208868e79137_tiktok.svg',
  },
];

const RightSubsection = () => {
  const sectionRef = useRef();
  const mediaTextRef = useRef();

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
      className="w-1/2 bg-[#ead0a3] p-10 flex flex-col justify-between"
    >
      <Image
        src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a78401085931572093d08f_follow-icn.svg"
        alt="@"
        loading="lazy"
        height={80}
        width={80}
      />
      <div className="flex flex-col">
        {/* <p className="contact text-7xl font-bold scale-y-0">
          Contact us
        </p> */}

        <div className="text-7xl font-bold flex flex-row flex-wrap">
          {[...'Follow us'].map((c, index) => {
            if (c === ' ') return <pre className="text-2xl">{c}</pre>;
            else
              return (
                <p key={index} className="contact scale-y-0">
                  {c}
                </p>
              );
          })}
        </div>
        <p className="italic font-bold text-[#4eaea5] text-3xl">
          anywhere
        </p>
      </div>
      <div className="flex flex-row gap-4">
        {MEDIAS.map((m, index) => (
          <div
            key={index}
            className={`group border-4 rounded-md cursor-pointer border-[#0d0d0d] flex flex-row items-center text-3xl font-bold hover:border-[#f37925]
              transition-width duration-500 ease-in-out w-16 hover:w-60
            `}
          >
            <Image
              src={m?.img}
              alt={m?.name}
              width={60}
              height={60}
            />

            <div
              className="pr-4 scale-x-0 transition transform ease-in-out duration-500 origin-left  group-hover:scale-x-100"
              ref={mediaTextRef}
            >
              {m?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSubsection;
