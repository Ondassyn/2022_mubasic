import React, { useState } from 'react';

const RightSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-1/2 p-10 flex flex-col justify-between bg-[#f3f3f3] font-bold">
      <div className="flex flex-col gap-6">
        <div className="bg-[#f5e1be] rounded-xl px-8 py-3 focus-within:ring-[#f37925] ring-2 ring-[#f5e1be] hover:ring-[#f37925]">
          <label className="block">
            <span className="flex flex-row gap-1 text-[#f37925]">
              Name
            </span>
            <input
              type="text"
              className="bg-[#f5e1be] text-2xl my-4 focus:outline-none block w-full"
              placeholder="Your name"
              onChange={(e) => setName(e?.target?.value)}
              value={name}
            />
          </label>
        </div>

        <div className="bg-[#f5e1be] rounded-xl px-8 py-3 focus-within:ring-[#f37925] ring-2 ring-[#f5e1be] hover:ring-[#f37925]">
          <label className="block">
            <span className="flex flex-row gap-1 text-[#f37925]">
              Email Address
            </span>
            <input
              type="email"
              className="bg-[#f5e1be] text-2xl my-4 focus:outline-none block w-full"
              placeholder="Your email"
              onChange={(e) => setEmail(e?.target?.value)}
              value={email}
            />
          </label>
        </div>

        <div className="bg-[#f5e1be] rounded-xl px-8 py-3 focus-within:ring-[#f37925] ring-2 ring-[#f5e1be] hover:ring-[#f37925]">
          <label className="block">
            <span className="flex flex-row gap-1 text-[#f37925]">
              Message
            </span>
            <textarea
              type="email"
              rows={4}
              className="bg-[#f5e1be] text-2xl my-4 focus:outline-none block w-full"
              placeholder="Your message"
              onChange={(e) => setMessage(e?.target?.value)}
              value={message}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row gap-4 items-center w-1/2">
          <div
            className="w-20 h-20 bg-[#f5e1be] rounded-lg cursor-pointer ring-2 ring-[#f5e1be] hover:ring-[#f37925] 
            text-7xl flex flex-row justify-center items-center"
            onClick={() => setChecked((c) => !c)}
          >
            {checked ? '\u2713' : ''}
          </div>
          <p className="font-normal w-1/2">
            When submitting your information you will agree to our{' '}
            <span className="underline">Terms & Privacy policy</span>
          </p>
        </div>
        <button className="text-6xl py-8 px-10 bg-[#f37925] rounded-xl">
          Send
        </button>
      </div>
    </div>
  );
};

export default RightSection;
