import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

const RightSubsection = ({ data, dataIndex }) => {
  const equalizerRef = useRef();

  const isFirstRender = useFirstRender();

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      equalizerRef.current.play();
    } else {
      equalizerRef.current.stop();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isFirstRender) setIsPlaying(true);
  }, [dataIndex]);

  return (
    <div
      id="section"
      className="w-1/2 h-screen flex flex-col box-border sticky top-0"
    >
      <div className="flex flex-row">
        <div className="w-1/2 bg-[#91C3CE] p-20">
          <Player
            src={data[dataIndex]?.lottie}
            className="player"
            loop
            autoplay
            // speed={10}
            // background='red'
            // direction={-1}
            // style={{ height: '300px', width: '300px' }}
            // onEvent={handleEventPlayer}
            // ref={playerRef}
          />
        </div>
        <div className="w-1/2 bg-[#F37925] p-20 flex flex-row justify-center items-center">
          <div
            className="rounded-full bg-[#f38e44] flex flex-row justify-center items-center w-full h-full
            hover:scale-95 origin-center cursor-pointer transition duration-200 ease-in-out"
            onClick={() => setIsPlaying((state) => !state)}
          >
            <div className="relative w-1/3 h-1/3">
              {isPlaying ? (
                <Image
                  src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c1612914c2e4d9_pause.svg"
                  alt="pause"
                  fill
                />
              ) : (
                <Image
                  src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c1618d9ec2e4b2_play.svg"
                  alt="play"
                  fill
                  className="translate-x-1"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full bg-[#fac670] flex flex-col p-10 box-border justify-between">
        <div className="h-2/3 px-12 box-border">
          <Player
            src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a8808a990edd4f338a966d_lottie-equalizer_01.json"
            loop
            ref={equalizerRef}
          />
        </div>
        <div className="bg-[#f9ce87] rounded-xl px-8 text-lg py-4 box-border">
          {data[dataIndex]?.audio}
        </div>
      </div>
    </div>
  );
};

export default RightSubsection;
