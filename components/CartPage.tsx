'use client';
import { RootState, useAppSelector } from '@/utils/redux/store';
import Image from 'next/image';
import React, { useState } from 'react';
import CartItemCard from './CartItemCard';
import { Dish } from '@/utils/types';

const CartPage = () => {
  const { cart } = useAppSelector((state: RootState) => state.cartSlice);
  const [counters, setCounters] = useState(
    cart.reduce((acc, cartItem) => ({ ...acc, [cartItem.id]: 1 }), {})
  );

  const handleCounterChange = (id: string, value: number) => {
    setCounters((prev) => ({ ...prev, [id]: value }));
  };

  const totalPrice = cart.reduce(
    (total, cartItem) =>
      total +
      cartItem.price * (counters[cartItem.id as keyof typeof counters] || 1),
    0
  );

  return (
    <div className='h-full-screen-minus-header bg-[#FFF6EE] overflow-hidden '>
      {cart.length === 0 ? (
        <div className='h-[80vh] flex flex-col  gap-10 justify-center items-center'>
          <Image
            src='/assets/icons/empty-cart.svg'
            alt='empty-cart'
            width={200}
            height={200}
            className='max-sm:w-[100px] max-sm:h-[100px]'
          />
          <h1 className='text-2xl font-bold text-[#704A24] max-sm:text-lg text-center max-sm:px-10'>
            Your cart is empty, Please add some items to your cart to proceed.
          </h1>
        </div>
      ) : (
        <>
          <h1 className='text-2xl font-bold text-[#704A24] text-center py-4'>
            {' '}
            Your Cart
          </h1>
          <div className='h-full flex flex-col items-center '>
            <div className='flex flex-col gap-5 max-h-[50vh] overflow-y-auto custom-scrollbar '>
              <div className='flex flex-col justify-center items-center gap-2'>
                {cart.map((cartItem: Dish) => {
                  return (
                    <CartItemCard
                      key={cartItem.id}
                      cartItem={cartItem}
                      counter={
                        counters[cartItem.id as keyof typeof counters] || 1
                      }
                      onCounterChange={(value) =>
                        handleCounterChange(cartItem.id.toString(), value)
                      }
                    />
                  );
                })}
              </div>
            </div>
            <button className='py-5 px-20  text-[#1C140C] font-bold flex justify-center  items-center gap-2 bg-[#FBA651] rounded-full absolute bottom-6'>
              <p>Continue to Checkout</p>
              <span>|</span>
              <p>${totalPrice.toFixed(2)}</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
