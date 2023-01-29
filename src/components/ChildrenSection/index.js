import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const ChildrenSection = () => {
  return (
    <section className="h-screen flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </section>
  );
};

export default ChildrenSection;
