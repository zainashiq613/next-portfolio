'use client';
import { cn } from '@/lib/utils';
import GradientBg from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from '../../data/confetti.json';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5', className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  console.log('dfgiloyfjkl', id);
  const [copy, setCopy] = useState();
  const handleCopy = () => {
    navigator.clipboard.writeText('zain.ashiq613@gmail.com');
    setCopy(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center ')} />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <GradientBg>
            <div className="absolute z-60 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </GradientBg>
        )}

        <div
          className={`group-hover/bento:translate-x-2 transition duration-200 ${
            id === 2 || id == 3 ? 'absolute' : 'relative'
          } md:h-full ${id === 6 ? 'min-h-60' : 'min-h-40'} flex flex-col px-5 lg:p-10`}
        >
          <div className="font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-20">
            {description}
          </div>
          <div
            className={cn(titleClassName, 'font-sans text-lg lg:text-3xl max-w-96 font-bold z-10')}
          >
            {title}
          </div>
        </div>

        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit relative left-[57.5%]">
            <div className="flex flex-col gap-3 lg:gap-4">
              {['React js', 'Next js', 'JavaScript'].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              {['Vue js', 'AWS', 'MongoDB'].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id == 6 && (
          <div className="mt-5 absolute top-[80px]">
            <div className="absolute">
              <Lottie
                options={{
                  loop: copy,
                  autoplay: copy,
                  animationData: animationData,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                }}
              />
            </div>
            <MagicButton
              title={copy ? 'Email Copied' : 'Copy My Email'}
              icon={<IoCopyOutline />}
              position={'left'}
              otherClasses={'!bg-[#161a31]'}
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
