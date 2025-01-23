'use client';
import { RootState, useAppSelector } from '@/utils/redux/store';
import { Badge } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const cart = useAppSelector((state: RootState) => state.cartSlice.cart);
  return (
    <div className='h-[60px] px-16 py-4 bg-[#fff] flex items-center justify-between max-sm:px-8 '>
      <Link href='/'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={60}
          height={60}
          className=''
        />
      </Link>
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
        <Link className='flex items-center gap-[6px]' href='/cart'>
          <Badge
            badgeContent={cart.length}
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '10px',
                bgcolor: '#996531',
                color: '#fff',
                fontWeight: 'bold',
              },
            }}
          >
            <Image
              src='/assets/icons/cart.svg'
              alt='logo'
              width={20}
              height={20}
            />
          </Badge>
          <p className='text-[#704124] text-sm font-medium max-sm:hidden'>
            Go to Cart
          </p>
        </Link>
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
