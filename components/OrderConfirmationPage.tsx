'use client';
import Image from 'next/image';
import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div className='flex flex-row items-start bg-[#FAFAFA] max-md:flex-col max-md:gap-10 '>
      <div className='flex flex-col  gap-14 w-1/3  max-sm:gap-5 pt-24 px-16 max-md:w-full max-sm:pt-10 max-sm:px-5'>
        <div className='flex items-center p-0 gap-2'>
          <Image
            src='/assets/icons/check.svg'
            alt='check'
            width={120}
            height={120}
            className='max-sm:w-16 max-sm:h-16'
          />
          <div className='flex flex-col items-start gap-1'>
            <p className='font-semibold text-2xl text-[#1C140C] max-sm:text-lg'>
              Thank you!
            </p>
            <p className='font-medium text-[#1C140C] text-base max-sm:text-sm'>
              Your order #SF12345 has been placed.
            </p>
            <p className='font-medium text-[#1C140C] text-base max-sm:text-sm'>
              Your order will be with you in: 11 min
            </p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-1'>
          <p className='text-[#1C140C] font-medium text-base max-sm:text-sm'>
            We sent you an email to your registered email with your order
            confrimation and bill.
          </p>
          <p className='text-[#1C140C] font-medium text-base max-sm:text-sm '>
            Time placed: {new Date().toLocaleString()}
          </p>
        </div>
        <Image
          className='self-center max-sm:w-[200px] max-sm:h-[200px]'
          src='/assets/icons/progress.svg'
          alt='progress-bar'
          width={300}
          height={10}
        />
      </div>
      <Image
        src='/assets/map.svg'
        alt='map'
        width={400}
        height={400}
        className='w-2/3 h-full max-md:w-full'
      />
    </div>
  );
};

export default OrderConfirmationPage;
