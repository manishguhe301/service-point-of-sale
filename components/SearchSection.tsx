import { Dish } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const SearchSection = ({
  search,
  setSearch,
  filteredData,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredData: Dish[];
}) => {
  return (
    <div className='flex justify-between items-center pb-6 max-sm:flex-col gap-4'>
      <div className='relative w-1/2 max-sm:w-full'>
        <Image
          src='/assets/icons/search.svg'
          alt='search'
          width={20}
          height={20}
          className='absolute top-5 left-4 -translate-y-1/2'
        />
        <input
          type='text'
          placeholder='Search'
          className='w-full pl-11 pr-4 font-medium py-2 rounded-[40px] outline-none text-[#704A24] shadow-custom-orange-l3 placeholder:text-[#704A24] placeholder:font-semibold'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className=' text-sm font-medium text-[#1C140C] max-sm:hidden'>
        <span className='mr-1 font-bold text-[#1C140C]'>
          {filteredData.length}
        </span>
        Results
      </p>
    </div>
  );
};

export default SearchSection;
