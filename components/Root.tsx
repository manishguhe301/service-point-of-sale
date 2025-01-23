'use client';

import SideBar from './SideBar';
import MainSection from './MainSection';

const Root = () => {
  return (
    <div className='flex items-start'>
      <div className='w-[20%] bg-[#FAFAFA] h-full-screen-minus-header py-12 px-7 shadow-custom-orange'>
        <SideBar />
      </div>
      <div className='w-[80%]'>
        <MainSection />
      </div>
    </div>
  );
};

export default Root;
