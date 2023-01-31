import Image from 'next/image';
import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const ListenSection = () => {
  return (
    <div className="h-[70vh] flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </div>
  );
};

export default ListenSection;
