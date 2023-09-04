import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { GiSwordwoman } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='font-nunito'>
      <section class="text-gray-600 relative">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name:</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email:</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Message:</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Submit</button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <span class="inline-flex">
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
          </div>
        </div>
      </section>
      {/* <div className='px-5 py-24'>
        <div className='container px-5 py-8 flex flex-wrap mx-auto items-center border-t border-gray-200'>
          <div className='flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start'>
            <div className='relative sm:w-64 w-40 sm:mr-4 mr-2'>
              <label for='footer-field' class='leading-7 text-sm text-gray-600'></label>
              <input type='text' id='footer-field' name='footer-field' class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <button class='inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 rounded'>Subscribe</button>
          </div>
          <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
            
            
          </span>
        </div>
      </div> */}
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