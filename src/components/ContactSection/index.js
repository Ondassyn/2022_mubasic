import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const ContactSection = () => {
  return (
    <section className="h-[90vh] z-20 flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </section>
  );
};

export default ContactSection;
