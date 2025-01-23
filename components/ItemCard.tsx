import { addToCart, removeFromCart } from '@/utils/redux/cart/cart.slice';
import { RootState, useAppDispatch, useAppSelector } from '@/utils/redux/store';
import { Dish } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const ItemCard = ({ dish }: { dish: Dish }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state: RootState) => state.cartSlice);
  return (
    <div className=' max-h-[354px]  bg-white shadow-custom-orange-l2 rounded-[30px]'>
      <div className='relative'>
        <div className='bg-white p-2 rounded-full absolute top-2 right-2'>
          <Image
            src='/assets/icons/heart-filled.svg'
            alt='heart'
            width={24}
            height={24}
          />
        </div>
        <Image
          src={dish.imgSrc}
          alt={dish.dishName}
          width={100}
          height={100}
          className='rounded-t-[30px]  w-full h-[280px] object-cover'
        />
        <button
          className='bg-[#FFFFFF] py-2 px-5 flex items-center justify-center text-[#1C140C] font-bold gap-3 absolute bottom-2 right-2 rounded-[30px]'
          onClick={() =>
            cart.some((item: Dish) => item.id === dish.id)
              ? dispatch(removeFromCart(dish.id))
              : dispatch(addToCart(dish))
          }
        >
          {cart.some((item: Dish) => item.id === dish.id)
            ? 'Remove from Cart'
            : 'Add to Cart'}
          <Image
            src={
              cart.some((item: Dish) => item.id === dish.id)
                ? '/assets/icons/remove.svg'
                : '/assets/icons/cart.svg'
            }
            alt='cart'
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className='flex flex-col gap-1 px-7 py-3'>
        <div className='flex items-center justify-between gap-4'>
          <p className='font-medium text-[#1C140C] text-sm overflow-hidden text-ellipsis whitespace-nowrap'>
            {dish.dishName}
          </p>
          <p className='font-semibold text-[#1C140C] text-sm'>${dish.price}</p>
        </div>
        <div className='flex items-center gap-1'>
          {' '}
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={
                i < Math.floor(dish.stars)
                  ? '/assets/icons/star-filled.svg'
                  : '/assets/icons/star.svg'
              }
              alt={i < Math.floor(dish.stars) ? 'filled star' : 'empty star'}
              width={15}
              height={15}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
