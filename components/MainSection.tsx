'use client';
import { useEffect, useState } from 'react';
import Categories from './Categories';
import Spinner from './Spinner';
import { Dish } from '@/utils/types';
import ItemCard from './ItemCard';

const MainSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/dishes');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full bg-[#FFF6EE] h-full-screen-minus-header px-14 py-12'>
      <Categories />
      <div className='pt-10 h-full'>
        {data.length === 0 && loading ? (
          <div className='h-[80%] w-full flex justify-center items-center'>
            <Spinner />
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-6 overflow-y-scroll h-full custom-scrollbar'>
            {data.map((dish: Dish) => (
              <ItemCard key={dish.dishName} dish={dish} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
