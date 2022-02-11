import './header.css'
import React from 'react';
// import {IoIosMenu} from 'react-icons/io'
// import {AiOutlineAppstore} from 'react-icons/ai'
import {AiFillShopping} from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io';
import { IoMdColorFilter } from 'react-icons/io';
import {BsAppIndicator} from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header>
          <div className='icon-bar'>
              <BsAppIndicator className='icon'/>
          </div>
          <div className="logo">
              <h2>Logyn</h2>
          </div>
          <div>
              <AiFillShopping className='icon'/>
          </div>
      </header>
      <div className='search-bar'>
        <div className='search-box'>
          <input type='text' name='search'/>
          <IoMdSearch  className='icon'/>
        </div>
        <div className='icon-filter'>
          <IoMdColorFilter className='icon'/>
        </div>
      </div>
    </>
  );
};

export default Header;
