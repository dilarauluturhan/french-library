import React from 'react';
import logo from '../image/french.png';
import { VscGithub } from 'react-icons/vsc';
import { GiSwordwoman } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <a href='#\' className='w-80'>
          <img src={logo} alt='logo' />
        </a>
        <div className='flex items-center justify-between'>
          <a href='https://github.com/dilarauluturhan/french-library' target='blank'>
            <VscGithub className='text-black w-7 h-7' />
          </a>
          <a href='https://bento.me/dilarauluturhan' className='ms-2' target='blank'>
            <GiSwordwoman className='text-black w-7 h-7' />
          </a>
          <a href='https://www.buymeacoffee.com/dilarauluturhan' className='ms-2' target='blank'>
            <BiCoffeeTogo className='text-black w-7 h-7' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header