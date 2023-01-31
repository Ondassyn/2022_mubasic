import React from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const FollowSection = () => {
  return (
    <div className="h-[60vh] flex flex-row">
      <LeftSubsection />
      <RightSubsection />
    </div>
  );
};

export default FollowSection;
