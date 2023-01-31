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
gsap.registerPlugin(ScrollTrigger);

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
        className={`${suisseintl.variable} font-sans text-[#0D0D0D]`}
      >
        <HeroSection />
        <PlayerSection />
        <EverywhereSection />
        <FAQSection />
        <ChildrenSection />
        <ContactSection />
        <FollowSection />
        <PlayerSection />
      </main>
    </>
  );
}
