import React from 'react'
import "./Course.css"
import { AiOutlineSearch } from "react-icons/ai"
import Images from '../../Images/Images'

const Course = () => {
  return (
    <div>
        <div className="search-bar-1">                    
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <i>
            <AiOutlineSearch/>
            </i>
          </div>
        </div>
        <div className="course-area">
          <div className="course-fluid">
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>

          </div>
          <div className="course-fluid">
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            <div className="course-row">
              <div className="course-item">
                <div className="course-item-title">
                  <a href="">
                    <img src={Images.appdev} alt="" />
                  </a>
                  <h3>Apps Development</h3>
                </div>
                <div className="course-des">
                  <p><span></span> <b>Duration:</b> 4 Months</p>
                  <p><span></span> <b>Professor:</b> Jane Doe</p>
                  <p><span></span> <b>Students:</b> 100+</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Course
