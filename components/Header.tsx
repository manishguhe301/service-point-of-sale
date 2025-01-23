import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='h-[60px] px-16 py-4 bg-neutral-50 flex items-center justify-between max-sm:px-8 '>
      <Image
        src='/assets/logo.svg'
        alt='logo'
        width={60}
        height={60}
        className=''
      />
      <div className='flex items-center gap-10 max-sm:gap-6'>
        <div className='flex items-center gap-[6px]'>
          <Image
            src='/assets/icons/notify.svg'
            alt='logo'
            width={20}
            height={20}
          />
          <p className='text-[#704124] text-sm font-medium max-sm:hidden'>
            Notification
          </p>
        </div>
        <div className='flex items-center gap-[6px]'>
          <Image
            src='/assets/icons/cart.svg'
            alt='logo'
            width={20}
            height={20}
          />
          <p className='text-[#704124] text-sm font-medium max-sm:hidden'>
            Go to Cart
          </p>
        </div>
        <div className='flex items-center gap-[6px]'>
          <Image
            src='/assets/icons/user.svg'
            alt='logo'
            width={20}
            height={20}
          />
          <p className='text-[#704124] text-sm font-medium max-sm:hidden'>
            Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
