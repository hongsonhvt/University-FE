import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';
import { updateToken } from '../redux/feature/tokenSlice';
import { updateUser } from '../redux/feature/userSlice';
import { RootState } from '../redux/store';
import "./Layout.css";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((store: RootState) => store.token);

  const getDataUser = async () => {
    try {
      const response = await axios.get("http://localhost:5123/auth", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });

      console.log('response', response);
      dispatch(updateUser(response.data.data));

    } catch (e) {
      // dispatch( updateUser( response.data.data ) )
      dispatch(updateToken(''));
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
          <Header />
        </div>
        <div className='main-content'>
          <div className='sidebar'>
            <SideBar />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
