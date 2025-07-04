import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '@/data';

function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Kind words from <span className="text-[#CBACF9]">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((item) => (
            <div key={item.id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={item.img} alt={item.name} className="md:w-10 w-5" />
              <img src={item.nameImg} alt={item.name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
