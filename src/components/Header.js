import React from 'react';
import logo from '../image/french.png';
import github from '../image/github.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' container mx-auto flex items-center justify-between'>
      <Link to='/'><img className='w-96' src={logo} alt='logo' /></Link>
      <Link to='https://github.com/dilarauluturhan/french-library' target='blank'>
        <img src={github} alt='github' />
      </Link>
    </header>
  )
}

export default Header;