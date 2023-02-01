import React, { useState } from 'react';

const QUESTIONS = [
  {
    question: 'How is the music that makes up your catalog created?',
    answer:
      'We work together with our incredible partners of songwriters, producers and musicians from all over the globe. We call these heroes our creators.',
  },
  {
    question: 'How do you know what kids are listening to?',
    answer:
      'In order to understand what music the kids like, we use an analysis tool based on AI that we have developed. We can effectively process and analyze a vast amount of data. This gives us a better understanding of patterns and trends within childrens music.',
  },
  {
    question: 'Where can I find your music?',
    answer:
      'You can find our music on 100+ streaming platforms worldwide.',
  },
  {
    question: 'Who are the people behind Mubasic?',
    answer:
      'In addition to our fantastic music creators, a number of sharp enablers contribute within the fields of graphic design, economy, administration, legal and software development.',
  },
  {
    question: 'Do you create bespoke music for brands?',
    answer:
      'Yes, we work with businesses and brands for all different types of needs within childrens music.',
  },
];

const FAQSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="faq" className="panel h-screen flex flex-row">
      <div className="w-1/2 p-12 bg-[#f3f3f3] flex flex-col gap-2">
        {QUESTIONS.map((q, index) => (
          <div
            key={index}
            className={`w-full rounded-xl text-xl font-semibold p-8 cursor-pointer
                ${
                  selected === index
                    ? 'bg-[#0D0D0D] text-[#C0A8E6]'
                    : 'bg-[#EEEBF2]'
                } 
            `}
            onClick={() => setSelected(index)}
          >
            {q?.question}
          </div>
        ))}
      </div>
      <div className="w-1/2 p-12 bg-[#C0A8E6] flex flex-col gap-12">
        <p className="text-xl">Answer</p>
        <p className="text-3xl pt-12 border-t border-[#0d0d0d]">
          {QUESTIONS[selected]?.answer}
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
