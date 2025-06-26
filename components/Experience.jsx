import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorder';

function Experience() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My <span className="text-[#CBACF9]">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className={'flex-1 text-white border-neutral-200 dark:border-slate-800'}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src={item.thumbnail} alt={item.thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{item.title}</h1>
                <p className="text-start text-[#BEC1DD] mt-3 font-semibold">{item.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience;
