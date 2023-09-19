import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { GiSwordwoman } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between h-40'>
        <div className='w-80'>
          <h1 className='text-5xl font-bold font-adlam ml-2 md:ml-0'>french library</h1>
        </div>
        <div className='flex items-center'>
          <a href='https://github.com/dilarauluturhan/french-library' target='blank'>
            <VscGithub className='text-blue-900 w-7 h-7' />
          </a>
          <a href='https://bento.me/dilarauluturhan' className='ms-2' target='blank'>
            <GiSwordwoman className='text-gray-600 w-7 h-7' />
          </a>
          <a href='https://www.buymeacoffee.com/dilarauluturhan' className='ms-2' target='blank'>
            <BiCoffeeTogo className='text-rose-800 w-7 h-7' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;