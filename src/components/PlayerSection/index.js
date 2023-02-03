import React, { useState } from 'react';
import LeftSubsection from './LeftSubsection';
import RightSubsection from './RightSubsection';

const DATA = [
  {
    title: 'Quirky',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c161492dc2e4f7_01_quirky_1872.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Sleep',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c1610f11c2e4f8_02_sleep_1821.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Characters',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62beb05ca3120395d345345d_03_characters_1159.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Movement',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c161b5b2c2e4fc_04_movement_649.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Holidays & Celebrations',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62b323af3a6b3e8619d06722_05_holidaysV2_1103.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Party & Playtime',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c16158b8c2e4f9_06_playtime_1126.json',
    audio: 'sample.mp3',
  },
  {
    title: 'Educational',
    lottie:
      'https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c161e32bc2e4fa_07_education_1524.json',
    audio: 'sample.mp3',
  },
];

const PlayerSection = () => {
  const [dataIndex, setDataIndex] = useState(0);
  return (
    <section id="catalogue" className="flex flex-row">
      <LeftSubsection
        data={DATA}
        dataIndex={dataIndex}
        setDataIndex={setDataIndex}
      />
      <RightSubsection data={DATA} dataIndex={dataIndex} />
    </section>
  );
};

export default PlayerSection;
