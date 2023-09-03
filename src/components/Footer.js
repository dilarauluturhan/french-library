import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { GiSwordwoman } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <div className='px-5 py-24'>
        <div className='container px-5 py-8 flex flex-wrap mx-auto items-center border-t border-gray-200'>
          <div className='flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start'>
            <div className='relative sm:w-64 w-40 sm:mr-4 mr-2'>
              <label for='footer-field' class='leading-7 text-sm text-gray-600'></label>
              <input type='text' id='footer-field' name='footer-field' class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <button class='inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 rounded'>Subscribe</button>
          </div>
          <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
            <a href='https://github.com/dilarauluturhan/french-library' target='blank'>
              <VscGithub className='text-gray-600 w-7 h-7' />
            </a>
            <a href='https://bento.me/dilarauluturhan' className='ms-2' target='blank'>
              <GiSwordwoman className='text-gray-600 w-7 h-7' />
            </a>
            <a href='https://www.buymeacoffee.com/dilarauluturhan' className='ms-2' target='blank'>
              <BiCoffeeTogo className='text-gray-600 w-7 h-7' />
            </a>
          </span>
        </div>
      </div>
      <div class='bg-gray-100'>
        <div class='container mx-auto py-4 px-5 flex justify-center'>
          <p class='text-gray-500 text-sm'>© 2023 French Library —
            <a href='https://bento.me/dilarauluturhan' class='text-gray-600 ml-1' target='blank'>@dilarauluturhan</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer