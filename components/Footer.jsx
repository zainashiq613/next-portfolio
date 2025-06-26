import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

function Footer() {
  return (
    <footer className="w-full mb-[20px] pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-[#CBACF9]">your</span> digital presence to the next
          level?
        </h1>
        <p className="text-[#C1C2D3] md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:zain.ashiq613@gmail.com">
          <MagicButton title={"Let's get in touch"} icon={<FaLocationArrow />} position={'right'} />
        </a>
      </div>
      <div className="flex gap-3 mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter bg-[rgba(17, 25, 40, 0.75)] backdrop-blur-lg rounded-lg saturate-180 bg-opacity-75 border border-[rgba(255, 255, 255, 0.125)]"
            >
              <img src={item.img} alt={item.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
