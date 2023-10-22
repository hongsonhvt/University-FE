import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import SideBar from '../Components/SideBar/SideBar'
import Header from '../Components/Header/Header'
import "./Layout.css"
import { useSelector,useDispatch } from 'react-redux'
import { updateUser } from '../redux/feature/useSlice'
import { updateToken } from '../redux/feature/tokenSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
 
  const token = useSelector((store) => store);

    const getDataUser = async () => {
      try {
          const response = await axios.get("http://localhost:5123/auth", {
              headers: {
                  Authorization: `Bearer ${token?.token?.token}`,
              },
          })

          console.log('response',response);
          dispatch( updateUser( response.data.data ) )
          
      } catch (e) {
          // dispatch( updateUser( response.data.data ) )
          dispatch( updateToken( '' ) )
          navigate("/login");
      }
    };
    useEffect(() => {
      getDataUser();
    }, []);

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
