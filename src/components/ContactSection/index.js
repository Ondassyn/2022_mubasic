import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSection from './RightSection';

const ContactSection = () => {
  return (
    <section className="h-[90vh] z-20 flex flex-row">
      <LeftSubsection />
      <RightSection />
    </section>
  );
};

export default ContactSection;
