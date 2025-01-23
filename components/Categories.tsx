import { categories } from '@/utils/constants';
import { Category } from '@/utils/types';
import Image from 'next/image';
import React, { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(
    categories.find((category) => category.title === 'Most Popular') ||
      categories[0]
  );

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };
  
  return (
    <div className='flex items-center gap-4 overflow-x-scroll no-scrollbar'>
      {categories.map((category) => (
        <div
          key={category.title}
          className={`flex items-center gap-1 cursor-pointer pr-2 py-1  hover:border-[#996531] hover:border-b-2 transition duration-300 ease-in-out ${
            activeCategory === category ? 'border-[#996531] border-b-2' : ''
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
              activeCategory === category ? 'text-[#996531] font-semibold' : ''
            }`}
          >
            {category.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
