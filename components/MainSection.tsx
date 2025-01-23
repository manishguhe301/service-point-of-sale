'use client';
import { useEffect, useRef, useState } from 'react';
import Categories from './Categories';
import Spinner from './Spinner';
import { Dish } from '@/utils/types';
import ItemCard from './ItemCard';
import { RootState, useAppDispatch, useAppSelector } from '@/utils/redux/store';
import { setFilteredData } from '@/utils/redux/data/data.slice';
import Image from 'next/image';
import SearchSection from './SearchSection';

const MainSection = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useAppSelector(
    (state: RootState) => state.categorySlice
  );
  const filteredData = useAppSelector(
    (state: RootState) => state.dataSlice.filteredData
  );
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(
      setFilteredData(
        category !== 'All'
          ? data.filter(
              (dish: Dish) =>
                dish.category.toLowerCase() === category.toLowerCase()
            )
          : data
      )
    );
  }, [category, data]);

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

  useEffect(() => {
    dispatch(
      setFilteredData(
        data.filter((dish: Dish) =>
          dish.dishName.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [search, data]);

  return data.length === 0 && loading ? (
    <div className='h-screen bg-[#FFF6EE] w-full flex justify-center items-center'>
      <Spinner />
    </div>
  ) : (
    <div className='w-full bg-[#FFF6EE]  px-14 py-6  max-sm:px-4 '>
      <div className='' ref={ref}>
        <SearchSection
          search={search}
          setSearch={setSearch}
          filteredData={filteredData}
        />
      </div>
      <Categories />
      <div className='py-10'>
        <div className='grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {filteredData.length > 0 ? (
            filteredData.map((dish: Dish) => (
              <ItemCard key={dish.dishName} dish={dish} />
            ))
          ) : (
            <div className='h-screen'>
              <h1 className='text-2xl font-bold text-[#1C140C]'>
                No items found
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className='relative '>
        <div
          className='fixed z-50 right-3 cursor-pointer bottom-2 -translate-y-1/2 p-4 bg-[#704A24] bg-opacity-20 rounded-full  animate-bounce'
          onClick={() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Image
            src='/assets/icons/up.svg'
            alt='up'
            width={20}
            height={20}
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
