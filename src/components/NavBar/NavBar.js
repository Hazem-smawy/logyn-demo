import React from 'react';
import './navbar.css'
const NavBar = () => {
  return(
      <nav>
          <ul>
              <li className='active'>
                  home
              </li>
              <li>
                  help
              </li>
              <li>
                  contact
              </li>
          </ul>
      </nav>
  )
};

export default NavBar;
