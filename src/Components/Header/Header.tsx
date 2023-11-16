import React from 'react';
import './Header.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header-inside'>
      <div className='header-left'>
        <div className='Logo-header'>
          <div className='Logo'>
            <h1>
              <a href=''>Kin9 University</a>
            </h1>
          </div>
        </div>
        <div className='HeaderContent'>
          <div className='container_header'>
            <i className='icon_menu'>
              <AiOutlineMenu />
            </i>
            {/* <div className="navContent">
                  <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Support</a></li>
                  </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className='header-right'>
        <div className='User-information'>
          <i className='icon_menu-user'>
            <AiOutlineUser />
          </i>
          <div className='user_name'>
            <h3>GCH2001.NHSon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
