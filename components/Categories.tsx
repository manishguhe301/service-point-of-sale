import { categories } from '@/utils/constants';
import { setCategory } from '@/utils/redux/category/category.slice';
import { useAppDispatch } from '@/utils/redux/store';
import { Category } from '@/utils/types';
import Image from 'next/image';
import React, { useState } from 'react';

const Categories = () => {
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState(
    categories.find((category) => category.title === 'All') || categories[0]
  );

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    dispatch(setCategory(category.title));
  };

  return (
    <>
      <div className='flex items-center gap-4 overflow-x-scroll no-scrollbar max-md:hidden'>
        {categories.map((category) => {
          const isActive = activeCategory.title === category.title;
          return (
            <div
              key={category.title}
              className={`flex items-center gap-1 cursor-pointer pr-2 py-1 hover:border-[#996531] hover:border-b-2 transition duration-300 ease-in-out ${
                isActive ? 'border-[#996531] border-b-2' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <Image
                src={category.img}
                alt={category.title}
                width={24}
                height={24}
              />
              <p
                className={`text-sm font-medium text-[#1C140C] ${
                  isActive ? 'text-[#996531] font-semibold' : ''
                }`}
              >
                {category.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className='md:hidden'>
        <select
          className='w-full py-2 px-4 rounded-md border border-[#996531] text-[#1C140C] font-medium bg-white outline-none'
          value={activeCategory.title}
          onChange={(e) => {
            const selectedCategory = categories.find(
              (category) => category.title === e.target.value
            );
            if (selectedCategory) {
              handleCategoryClick(selectedCategory);
            }
          }}
        >
          {categories.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Categories;
