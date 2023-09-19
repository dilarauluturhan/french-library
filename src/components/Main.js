import React, { useState } from 'react';
import DATA from '../data/data.json';
import { MdDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';

const Main = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const categories = Array.from(new Set(DATA.map(item => item.category)));

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const buttonVariants = {
    initial: {
      y: 0,
    },
    shake: {
      y: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
      transition: {
        duration: 3,
      },
    },
  };


  return (
    <main className='font-nunito'>
      <div className='flex flex-col items-center'>
        <motion.div
          className='flex items-center flex-col md:flex-row gap-x-7'
          initial='hidden'
          animate='visible'
          variants={textVariants}
        >
          <h1 className='text-md md:text-3xl font-bold inline-flex items-center rounded-lg bg-gray-50 ring-1 ring-inset ring-gray-500/10 mb-3 p-1.5 md:p-2.5'>
            Categories
            <MdDoubleArrow />
          </h1>
          <ul className='flex items-center flex-row flex-wrap ml-6 md:ml-0 mr-2 md:mr-0 gap-x-5'>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
              >
                <motion.button
                  variants={buttonVariants}
                  initial='initial'
                  whileHover='shake'
                  className='text-md md:text-xl font-semibold inline-flex items-center rounded-lg bg-gray-50 hover:bg-blue-900 text-black hover:text-gray-100 ring-1 ring-inset ring-gray-500/10 mb-3 p-1.5 md:p-3'>
                  {category}
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className={`mt-7 ml-2 md:ml-[14rem] pr-10 pl-10 pt-5 sm:pt-0 sm:pl-8 ${activeCategory ? 'hidden' : ''}`}>
        <h1 className='text-2xl sm:text-3xl font-bold'>Bonjour!</h1><br />
        <p className='text-md sm:text-xl flex-wrap md:flex-nowrap'>
          French is a language spoken around the world and has a very rich cultural heritage. <br />If you have just started learning French, are preparing for the Delf/Dalf exam or already speak this beautiful language, <b>"French Library"</b> is for you!<br />
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
      <div className='p-7 ml-9 sm:ml-5 mt-1 sm:pt-0 flex-1 mb-24'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 mt-0 md:mt-8 ml-0 md:ml-[11rem]'>
          {DATA
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <li key={item.id}>
                <a href={item.link} target='blank' className='flex w-5/6 sm:w-96 p-2 font-semibold text-sm md:text-xl bg-gray-50 border rounded-lg duration-300'>
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