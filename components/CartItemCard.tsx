'use client';
import { Dish } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const CartItemCard = ({
  cartItem,
  counter,
  onCounterChange,
}: {
  cartItem: Dish;
  counter: number;
  onCounterChange: (value: number) => void;
}) => {
  return (
    <div className='h-[100px] w-[500px] bg-[#FFFFFF] rounded-[20px] shadow-custom-orange relative flex items-center justify-between gap-2 max-sm:w-[90%] max-sm:mx-5 max-sm:gap-0'>
      <div className='flex gap-2 items-center h-full'>
        <Image
          src={cartItem.imgSrc}
          alt={cartItem.dishName}
          width={95}
          height={95}
          className='rounded-2xl object-cover h-full '
        />
        <div className='flex flex-col gap-2 max-sm:w-fit'>
          <p className='font-medium text-base w-[70%] overflow-hidden text-ellipsis  whitespace-nowrap max-sm:w-[50%] max-sm:text-sm'>
            {cartItem.dishName}
          </p>
          <div className='flex items-center gap-2 max-sm:w-1/2'>
            <p className='font-light text-sm text-[#1C140C] capitalize'>
              {cartItem.category}
            </p>
            <p className='font-light text-sm text-[#77726D]'>
              ${cartItem.price}
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 flex-col pr-4 max-sm:pr-3'>
        <p className='font-medium text-base text-[#1C140C]'>
          ${(cartItem.price * counter).toFixed(2)}
        </p>
        <div className='flex items-center gap-3 py-1 px-3 border border-[#1C140C] rounded-xl'>
          <span
            onClick={() => counter > 1 && onCounterChange(counter - 1)}
            className='cursor-pointer'
          >
            -
          </span>
          <span>{counter}</span>
          <span
            onClick={() => onCounterChange(counter + 1)}
            className='cursor-pointer'
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
