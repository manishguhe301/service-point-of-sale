'use client';

import MainSection from './MainSection';

const Root = () => {
  return (
    <div className='w-full no-scrollbar h-full-screen-minus-header overflow-y-scroll custom-scrollbar'>
      <MainSection />
    </div>
  );
};

export default Root;
