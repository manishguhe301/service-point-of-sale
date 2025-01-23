'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const SideBar = () => {
  const [activeSort, setActiveSort] = useState(null as string | null);

  const handleSortClick = (sortType: string | null) => {
    setActiveSort(sortType === activeSort ? null : sortType);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-14 w-full'>
      <div className='relative w-full'>
        <Image
          src='/assets/icons/search.svg'
          alt='search'
          width={20}
          height={20}
          className='absolute top-1/2 left-4 -translate-y-1/2'
        />
        <input
          type='text'
          placeholder='Search'
          className='w-full pl-11 pr-4 font-medium py-2 rounded-[40px] outline-none text-[#704A24] shadow-custom-orange-l3 placeholder:text-[#704A24] placeholder:font-semibold'
        />
      </div>
      <div className='flex flex-col w-full gap-4'>
        <p className=' text-sm font-medium text-[#1C140C]'>
          <span className='mr-1 font-bold text-[#1C140C]'>24</span>
          Results
        </p>
        <div className='flex flex-col'>
          <p className='font-medium text-xl text-[#1C140C] py-3'>Sort By:</p>
          <div className='flex flex-wrap gap-2'>
            <p
              className={`py-2 px-5 border border-[#704A24] rounded-3xl cursor-pointer w-fit text-[#704A24] font-bold transition-all duration-300 ${
                activeSort === 'lowToHigh'
                  ? 'bg-[#B07439] text-white font-bold '
                  : ''
              }`}
              onClick={() => handleSortClick('lowToHigh')}
            >
              Price: Low to High
            </p>
            <p
              className={`py-2 px-5 border border-[#704A24] rounded-3xl cursor-pointer w-fit text-[#704A24] font-bold transition-all duration-300 ${
                activeSort === 'highToLow'
                  ? 'bg-[#B07439] text-white font-bold'
                  : ''
              }`}
              onClick={() => handleSortClick('highToLow')}
            >
              Price: High to Low
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-medium text-xl text-[#1C140C] py-3'>Show me:</p>
          <div className='flex flex-wrap gap-2'>
            <p className='py-2 px-5 border border-[#704A24] rounded-3xl  w-fit  font-bold bg-[#B07439] text-white cursor-not-allowed'>
              All Options
            </p>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 text-center p-4 w-fit flex  items-center gap-1'>
        Made with{' '}
        <Image
          src='/assets/icons/heart.svg'
          alt='heart'
          width={20}
          height={20}
        />{' '}
        by <span className='font-bold'>Manish</span>
      </div>
    </div>
  );
};

export default SideBar;
