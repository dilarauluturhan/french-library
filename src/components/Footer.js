import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { GiSwordwoman } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='font-nunito'>
      <section className='text-gray-600 relative'>
        <div className='container px-5 py-2 mx-auto'>
          <div className='mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-full pt-8 mt-8 text-center'>
                <span className='inline-flex'>
                  <a href='https://github.com/dilarauluturhan/french-library' target='blank'>
                    <VscGithub className='text-blue-900 w-7 h-7' />
                  </a>
                  <a href='https://bento.me/dilarauluturhan' className='ms-2' target='blank'>
                    <GiSwordwoman className='text-gray-600 w-7 h-7' />
                  </a>
                  <a href='https://www.buymeacoffee.com/dilarauluturhan' className='ms-2' target='blank'>
                    <BiCoffeeTogo className='text-rose-800 w-7 h-7' />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class='bg-gray-100'>
        <div class='container mx-auto py-4 px-5 flex justify-center'>
          <p class='text-gray-500 text-sm'>© 2023 French Library —
            <a href='https://bento.me/dilarauluturhan' class='text-gray-600 ml-1' target='blank'>@dilarauluturhan</a>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;