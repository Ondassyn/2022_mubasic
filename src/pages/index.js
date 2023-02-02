import EverywhereSection from '@/components/EverywhereSection';
import HeroSection from '@/components/HeroSection';
import PlayerSection from '@/components/PlayerSection';
import Head from 'next/head';
import localFont from '@next/font/local';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import FAQSection from '@/components/FAQSection';
import ChildrenSection from '@/components/ChildrenSection';
import ContactSection from '@/components/ContactSection';
import FollowSection from '@/components/FollowSection';
import ListenSection from '@/components/ListenSection';
import NavbarSection from '@/components/NavbarSection';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef } from 'react';
import CreatorsSection from '@/components/CreatorsSection';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const suisseintl = localFont({
  src: [
    {
      path: './fonts/SuisseIntl-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SuisseIntl-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suisseintl',
});

export default function Home() {
  const mainRef = useRef();

  useEffect(() => {
    /* Main navigation */

    const ctx = gsap.context(() => {
      document.querySelectorAll('.anchor').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetElem = document.querySelector(
            e.target.getAttribute('href')
          );
          gsap.to(window, {
            scrollTo: {
              y: targetElem,
              autoKill: false,
            },
            duration: 1,
          });
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Mubasic</title>
        <meta
          name="description"
          content="the #1 source for children's music"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        ref={mainRef}
        className={`${suisseintl.variable} font-sans text-[#0D0D0D]`}
      >
        <HeroSection />
        {/* <section id="panels"> */}
        <div id="panels-container">
          <PlayerSection />
          <CreatorsSection />
          <EverywhereSection />
          <FAQSection />
          <ChildrenSection />
          <ContactSection />
        </div>

        <FollowSection />
        <ListenSection />
        <NavbarSection />

        {/* </section> */}
      </main>
    </>
  );
}
