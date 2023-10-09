import React from 'react'
import "./Student.css"
import { AiOutlineSearch } from "react-icons/ai"
import Images from '../../Images/Images'

const Student = () => {
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
      <div className="student-fluid">
      <div className="student-row">
        <div className="student-profile">
          <div className="student-profile-info">
            <div className="student-profile-img">
              <img src={Images.Useravatar} alt="" /> 
            </div>
            <div className="student-profile-detail">
              <div className="student-profile-header">
                <div className="student-profile-infor-detail">
                  <h6>Name</h6>
                  <p>Nguyen Hong Son</p>
                </div>
              </div>
              <div className="student-profile-header">
                <div className="student-profile-infor-detail">
                  <h6>Major</h6>
                  <p>Information Technology</p>
                </div>
              </div>
            </div>
            <div className="student-profile-detail">
              <div className="student-profile-header">
                <div className="student-profile-infor-detail">
                  <h6>Email ID</h6>
                  <p>abcdefg@gmail.com</p>
                </div>
              </div>
              <div className="student-profile-header">
                <div className="student-profile-infor-detail">
                  <h6>Phone</h6>
                  <p>08345834759</p>
                </div>
              </div>
            </div>
            <div className="student-profile-detail">
              <div className="student-profile-header">
                  <div className="address-student">
                    <h6>Address</h6>
                    <p>Ha Noi, Viet Nam</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="student-main">
        <div className="student-main-inner">
          <ul className="student-active">
            <li className="active">
              <a href="">Activity</a>
            </li>
          </ul>
          <div className="activity-detail">
            <div className="student-tab-list">
              <div className="student-row-1">
                <div className="student-row-content">
                  <div className="student-row-session">
                    <div className="student-row-session-item">
                      <div className="student-hr-address">
                        <h6>Full Name</h6>
                        <p>Nguyen Hong Son</p>
                      </div>
                    </div>
                    <div className="student-row-session-item">
                      <div className="student-hr-address">
                        <h6> Mobile</h6>
                        <p>0346548356</p>
                      </div>
                    </div>
                    <div className="student-row-session-item">
                      <div className="student-hr-address">
                        <h6>Email</h6>
                        <p>SonNh@gmail.com</p>
                      </div>
                    </div>
                    <div className="student-row-session-item">
                      <div className="student-hr-address">
                        <h6>Location</h6>
                        <p>Ha Noi, Viet Nam</p>
                      </div>
                    </div>
                  </div>
                  <div className="student-content-profile">
                    <p>
                    Hello there! My name is Nguyen Hong Son, and I'm pleased to introduce myself. I was born in 2001, which makes me 23 years old. I come from Ha Noi, and I'm currently pursuing my studies at the University of Greenwich. At university, I'm immersing myself in the world of knowledge and growth. I'm particularly interested in Information Technology. I believe that education is a powerful tool that empowers us to make a positive impact on the world. Outside of my studies, I enjoy Playing Game. These activities allow me to unwind and express my creativity. Additionally, I value, and I strive to integrate them into every facet of my life.
                    </p>
                  </div>
                  <div className="student-skill">
                    <div className="skill-test">
                      <div className="skill-test-title">
                        <h3>Skill Set</h3>
                        <p className='line-skill'></p>
                      </div>
                    </div>
                    <div className="student-progress">
                      <h3>PHP</h3>
                      <div className="progress-mini">
                        <div  className="progress-bar-purple"></div>
                      </div>
                    </div>
                    <div className="student-progress">
                      <h3>Java</h3>
                      <div className="progress-mini">
                        <div className="progress-bar-red"></div>
                      </div>
                    </div>
                    <div className="student-progress">
                      <h3>C#</h3>
                      <div className="progress-mini">
                        <div className="progress-bar-blue"></div>
                      </div>
                    </div>
                    <div className="student-progress">
                      <h3>ReactJS</h3>
                      <div className="progress-mini">
                        <div className="progress-bar-green"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Student
