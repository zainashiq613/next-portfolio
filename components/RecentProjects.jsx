import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa6';

function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        A small selection of <span className="text-[#CBACF9]">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-7 mt-10 p-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] sm:w-[570px] h-[32rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="" />
                </div>
                <img src={item.img} alt={item.title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      key={icon}
                      className="border flex items-center justify-center border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex items-center lg:text-xl md:text-xs text-sm text-[#CBACF9]">
                    Check Live Site <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
