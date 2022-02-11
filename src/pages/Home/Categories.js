import React from 'react';
import {FaSun} from 'react-icons/fa'
import {FaPlay} from'react-icons/fa'
import {FaUpload} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const Categories = () => {
  return (
      <ul className='cat'>
          <li><FaPlay className='cat-icon'/><span>clothes</span></li>
          <li><FaSun className='cat-icon'/><span>sunglasses</span></li>
          <li><FaUpload className='cat-icon'/><span>sunglasses</span></li>
          <li><FaTwitter className='cat-icon'/><span>sunglasses</span></li>
      </ul>
  );
};

export default Categories;
