import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const ChildrenSection = () => {
  return (
    <section id="about" className="panel h-screen flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </section>
  );
};

export default ChildrenSection;
