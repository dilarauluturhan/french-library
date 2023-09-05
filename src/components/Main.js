import React, { useState } from 'react';
import DATA from '../data/data.json';
import { IoIosArrowBack } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';

const Main = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [open, setOpen] = useState(true);

  const categories = Array.from(new Set(DATA.map(item => item.category)));

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  };

  return (
    <main className='font-nunito sm:flex'>
      <div
        className={`${open ? 'w-64' : 'w-20'} duration-300 h-32 p-5 pt-7 bg-gray-200 relative border rounded-lg`}
      >
        <IoIosArrowBack
          className={`absolute cursor-pointer -right-4 top-8 w-10 h-10 border-2 border-gray-800 rounded-full bg-white ${!open && 'rotate-180'}`}
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
              <button className='text-xl hover:text-2xl font-semibold p-2 ml-8 hover:bg-gray-50 border border-transparent rounded-lg duration-300'>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`pr-10 pl-10 pt-5 sm:pt-0 sm:pl-8 ${activeCategory ? 'hidden' : ''}`}>
        <h1 className='text-2xl sm:text-3xl font-bold'>Bonjour!</h1><br />
        <p className='text-md sm:text-xl flex-wrap md:flex-nowrap'>
          French is a language spoken around the world and has a very rich cultural heritage. <br />If you have just started learning French, are preparing for the Delf/Dalf exam or already speak this beautiful language, "French Library" is for you!<br />
          <b>french library</b> was designed as a tool for you to access resources related to French. The project allows users to easily access resources based on their interests.<br /><br />
          If you want to improve your French vocabulary, the <b>Dictionary</b> category is perfect for you. It provides an opportunity to both learn and practice.<br />
          For those who want to learn the French language more deeply, there are educational materials in the <b>Education</b> category.<br />
          To follow current events in France and French-speaking countries, you should check the <b>News</b> category. Provides access to local and international news.<br />
          Visit the <b>Literature</b> category to plunge into the magical world of French literature. It offers many options from classics to contemporary works.<br />
          If you are interested in French TV series and TV shows, the <b>Series</b> category offers you series suggestions.<br />
          Use the <b>YouTube</b> category to discover French-language YouTubers. Fun and instructive videos are waiting for you.<br />
          Step into the world of French-speaking podcasts. You will find many options related to the topics you are interested in in the <b>Podcast</b> category.<br /><br />
          <b>french library</b> is a treasure chest for anyone who wants to better understand and learn the French language and culture.<br /> Browse through categories, browse the resources you want, and start exploring the world of French. <br /><br />
          Start your French adventure with the <b>french library</b> and discover the beauties of the language.🥳
        </p>
      </div>
      <div className='p-7 ml-7 sm:ml-5 mt-1 sm:pt-0 flex-1 h-screen'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6'>
          {DATA
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <li key={item.id}>
                <a href={item.link} target='blank' className='flex w-5/6 sm:w-96 p-2 font-semibold text-xl bg-gray-50 border rounded-lg duration-300' rel="noopener noreferrer">
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

export default Main;