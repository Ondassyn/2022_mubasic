import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const CreatorsSection = () => {
  return (
    <section id="creators" className="panel h-[120vh] flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </section>
  );
};

export default CreatorsSection;
