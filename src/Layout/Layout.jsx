import React from 'react'
import {Outlet} from 'react-router-dom'
import SideBar from '../Components/SideBar/SideBar'
import Header from '../Components/Header/Header'
import "./Layout.css"

const Layout = () => {
  return (
    <div className='portal-homepage'>
      <div className="wrap">
        <div className='header'>
          <Header/>
        </div>
        <div className='main-content'>
          <div className='sidebar'>
            <SideBar/>
          </div>
          <div className='content'>
              <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
