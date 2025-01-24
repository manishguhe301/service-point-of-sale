'use client';
import { RootState, useAppSelector } from '@/utils/redux/store';
import { Dish } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CheckOutPage = () => {
  const cart = useAppSelector((state: RootState) => state.cartSlice.cart);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    email: '',
  });

  useEffect(() => {
    if (cart.length === 0) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div
      style={{ backgroundImage: "url('/assets/checkout.jpg')" }}
      className='relative h-full-screen-minus-header bg-cover bg-center bg-no-repeat '
    >
      <div
        className='absolute inset-0 bg-[#5E5852] opacity-60'
        aria-hidden='true'
      ></div>

      <div className='absolute top-8 left-8 z-50 flex items-center max-sm:top-4 max-sm:left-4 max-sm:hidden'>
        <Link
          href='/cart'
          className='p-2 rounded-full bg-white flex items-center gap-2 cursor-pointer mr-4'
        >
          <Image
            src='/assets/icons/left.svg'
            alt='back'
            width={24}
            height={24}
          />
        </Link>

        <div className='flex items-center gap-2 max-sm:hidden'>
          {cart.length > 0 &&
            cart.map((item: Dish) => (
              <Image
                key={item.id}
                src={item.imgSrc}
                alt={item.imgSrc}
                width={80}
                height={80}
                className='rounded-2xl object-cover max-sm:w-[50px] max-sm:h-[50px]'
              />
            ))}
        </div>
      </div>

      <div className='relative z-10 text-white flex justify-center items-center w-[500px] mx-auto h-full max-sm:w-[90%] '>
        <div className='absolute bg-[#FFF6EE] h-[90%]    w-full shadow-custom-orange-l3 rounded-[40px] px-5 py-7 max-sm:px-2 max-sm:py-4'>
          <p className='absolute left-[30%] top-10 transform font-light   text-[#704A24] text-center text-xs py-2 px-4 rounded-full'>
            Demo card image
          </p>
          <Image
            src='/assets/card.svg'
            alt='card'
            width={100}
            height={100}
            className='w-full h-[160px]'
          />
        </div>
        <div className='absolute top-[44%] max-sm:top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <form className='flex flex-col gap-4 items-center'>
            <div className='flex gap-2 max-sm:flex-col'>
              <input
                type='text'
                className='border  text-[#704A24]  font-medium border-[#704A24] rounded-xl outline-none px-3 py-2 max-sm:w-full'
                placeholder='Enter First Name'
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type='text'
                className='border  text-[#704A24]  font-medium border-[#704A24] rounded-xl outline-none px-3 py-2'
                placeholder='Enter Last Name'
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className='flex gap-2 max-sm:flex-col'>
              <input
                type='email'
                className='border  text-[#704A24]  font-medium border-[#704A24] rounded-xl outline-none px-3 py-2'
                placeholder='Enter Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type='number'
                className='border w-full  text-[#704A24]  font-medium border-[#704A24] rounded-xl outline-none px-3 py-2'
                placeholder='Enter Card No.'
                value={formData.cardNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cardNumber: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>
        <button className={`w-full absolute bottom-16 self-center flex justify-center items-center max-sm:bottom-12 max-sm:w-full ${!formData.firstName || !formData.lastName || !formData.email || !formData.cardNumber ? 'hidden' : 'flex'} transition-all duration-300 ease-in-out`}>
          {' '}
          <Link
            href={{
              pathname: '/order-confirmation',
              query: formData,
            }}
            className='py-5 px-20  text-[#1C140C] font-bold flex justify-center  items-center gap-2 bg-[#FBA651] rounded-full absolute bottom-6'
          >
            <p>Continue to Checkout</p>
          </Link>
        </button>
        <p className='absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-1 text-[#1C140C] font-light text-sm max-sm:bottom-12'>
          <Image src='/assets/icons/pay.svg' width={16} height={16} alt='pay' />
          Secure payment
        </p>
      </div>
    </div>
  );
};

export default CheckOutPage;
