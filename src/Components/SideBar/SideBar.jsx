import React from 'react'
import "./SideBar.css"
import { AiFillHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneFileImage } from "react-icons/ai";
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
    <ul>
      <li>
          <NavLink to={'/'} className="nav-link-custom">
            <i className="icon-navbar">
                <AiFillHome/>
            </i>
            Education
          </NavLink>
      </li>
      <li>
          <NavLink to={'/event'} className="nav-link-custom">
            <i className="icon-navbar">
                    <AiOutlineCalendar/>
            </i>
            Event
          </NavLink>
      </li>
      <li>
          <NavLink to={'/professor'} className="nav-link-custom">
            <i className="icon-navbar">
                <AiOutlineBook/>
            </i>
            Professor
          </NavLink>

      </li>
      <li>
          <NavLink to={'/student'} className="nav-link-custom">
            <i className="icon-navbar">
                <AiOutlineUser/>
            </i>
            Student
          </NavLink>
      </li>
      <li>
          <NavLink to={'/course'} className="nav-link-custom">
            <i className="icon-navbar">
              <AiTwotoneFileImage/>
            </i>
            Course
          </NavLink>
      </li>
      <li>
          <NavLink to={'/login'} className="nav-link-custom">
            <i className="icon-navbar">
              <AiTwotoneFileImage/>
            </i>
            Login
          </NavLink>
      </li>
      <li>
          <NavLink to={'/student-manage'} className="nav-link-custom">
            <i className="icon-navbar">
              <AiTwotoneFileImage/>
            </i>
            Student Manage
          </NavLink>
      </li>
      <li>
          <NavLink to={'/teacher-manage'} className="nav-link-custom">
            <i className="icon-navbar">
              <AiTwotoneFileImage/>
            </i>
            Teacher Manage
          </NavLink>
      </li>
    </ul>
  </div>
  )
}

export default SideBar
