import React, { useState } from 'react';
import DATA from '../data/data.json';
import { IoIosArrowBack } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';

const Main = () => {

  // kategorileri bir diziye al
  const categories = Array.from(new Set(DATA.map(item => item.category)));

  // Aktif kategoriye ait verileri saklamak için bir state kullan
  const [activeCategory, setActiveCategory] = useState('');
  const [open, setOpen] = useState(true);

  // kategoriye tıklandığında aktif kategoriyi günceller
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  };

  return (
    <main className='font-nunito flex'>
      <div
        className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-7 bg-gray-200 relative`}
      >
        <IoIosArrowBack
          className={`absolute cursor-pointer -right-3 top-8 w-8 h-8 border-2 border-gray-800 rounded-full bg-white ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex items-center gap-x-2'>
          <BiCategoryAlt
            className={`w-8 h-8 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`origin-left text-2xl font-bold duration-300 ${!open && "scale-0"}`}>Categories</h1>
        </div>
        <ul className='pt-4'>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`${!open && "hidden"}`}
            >
              <button className='text-xl hover:text-2xl font-semibold p-2 ml-8 hover:bg-gray-50 border rounded-lg duration-300'>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-7 flex-1 h-screen'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6'>
          {DATA
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <li key={item.id}>
                <a href={item.link} target='blank' className='flex w-96 p-2 font-semibold text-xl bg-gray-50 border rounded-lg duration-300' rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </main>
  )
}

export default Main