import React , { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  return (
    <nav 
      className={`${styles.paddingX} w-full flx items-center py-5 foxed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'></div> 

          <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>

            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className="text-white text-[18px] font-bold cursor-pointer">Sarat <span className="sm:block hidden"> | Bondada </span></p>

          </Link>
    </nav>
  )
}

export default Navbar

// npm install --legacy-peer-deps -D  postcss autoprefixer  
// npx tailwindcss init -p