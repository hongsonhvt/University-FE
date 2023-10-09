import React from 'react'
import "./Education.css"
import { AiOutlineSearch } from "react-icons/ai"
import Images from '../../Images/Images'
import { FaArrowTurnUp } from "react-icons/fa6"
import "../../Images/Images"
import { FaStar } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa6"
import { FaShare } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="container">
      <div className="search-bar">                    
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <i>
          <AiOutlineSearch/>
          </i>
        </div>
      </div>
      <div className="course-fees">
      <div className="container-courseFees">
        <div className="box-courseFees distance-start-15">
            <h5 className="courseFees-content">
                Information Technology
            </h5>
            <h4>
                <span className="counter">$5000</span>
                <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
                <div className="progress-bar-success"></div>
            </div>
        </div>
        <div className="box-courseFees distance-center-15">
        <h5 className="courseFees-content">
                Business Administration
            </h5>
            <h4>
                <span className="counter">$3000</span>
                <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
                <div className="progress-bar-purple"></div>
            </div>
        </div>
        <div className="box-courseFees distance-center-15">
        <h5 className="courseFees-content">
                Graphic Design
            </h5>
            <h4>
                <span className="counter">$2000</span>
                <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
                <div className="progress-bar-green"></div>
            </div>
        </div>
        <div className="box-courseFees distance-end-15">
        <h5 className="courseFees-content">
                Logistics
            </h5>
            <h4>
                <span className="counter">$3500</span>
                <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
                <div className="progress-bar-red"></div>
            </div>
        </div>
            
        </div>
      </div>
      <div className="container-main-img">
        <div class="container-main-image">
          <div class="image-container" >
              <img src={Images.univer} alt="" />
          </div>
          <div className="International">
              <h4>International Students</h4>
              <ul>
                  <li>
                      <h4 className="number-student">250</h4>
                      <div className="infor-international">
                          <span className="location">
                              From USA
                          </span>
                          <span className="percent">
                              75%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-purple"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">150</h4>
                      <div className="infor-international">
                          <span className="location">
                              From England
                          </span>
                          <span className="percent">
                              55%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-UK"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">350</h4>
                      <div className="infor-international">
                          <span className="location">
                              From Canada
                          </span>
                          <span className="percent">
                              20%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-Can"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">550</h4>
                      <div className="infor-international">
                          <span className="location">
                              From VietNam
                          </span>
                          <span className="percent">
                              60%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-VN"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">50</h4>
                      <div className="infor-international">
                          <span className="location">
                              From India
                          </span>
                          <span className="percent">
                              33%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-In"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">50</h4>
                      <div className="infor-international">
                          <span className="location">
                              From India
                          </span>
                          <span className="percent">
                              33%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-Can"></div>
                      </div>
                  </li>
                  <li>
                      <h4 className="number-student">50</h4>
                      <div className="infor-international">
                          <span className="location">
                              From India
                          </span>
                          <span className="percent">
                              33%
                              <FaArrowTurnUp/>
                          </span>
                      </div>
                      <div className="Student-bar">
                          <div className="Student-bar-In"></div>
                      </div>
                  </li>
                  
              </ul>
          </div>
        </div>
      </div>
      <div className="university-information-social">
        <div className="container-univer-infor">
          <div className="box-univer-social">
              <div className="school-img">
                  <img src={Images.logo_1} alt="" /> 
              </div>
              <div className="school-single">
                  <img src={Images.logo_1} alt=""  className="school-single-img"/>
                  <h4 className="school-single-title">Kin9 University</h4>
                  <p>Lux et Veritas</p>
                  <a href="" className="follow-cart">Follow</a>
              </div>
          </div>
          <div className="box-univer-top">
              <div className="single-review-school">
                  <h3>Top Outstanding Student</h3>
              </div>
              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>
              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>

              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>
              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>
              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>
              <div className="review-student">
                  <img src={Images.Useravatar} alt="" />
                  <div className="review-student-name">
                      <h3>Nguyen Hong Son</h3>
                      <p>Information Technology</p>
                  </div>
                  <div className="student-ratting">
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                      <i className="star-ratting"> <FaStar></FaStar></i>
                  </div>
              </div>
            </div>
            <div className="box-univer-club">
              <div className="single-product-img">
                <img src={Images.musicclub} alt="" />
              </div>
              <div className="single-product-text">
                <h5>Music and Arts Club</h5>
                <h6>These clubs focus on music activities such as orchestras, choirs, bands, and even songwriting and composing. Activities like music performances, concerts, and art programs are often organized.</h6>
                <div className="product-button">
                  <button className='button-cart-btn'>Read More</button>
                  <button className='button-default'>
                    <i><FaHeart/></i>
                  </button>
                  <button className='button-default'>
                    <i><FaShare/></i>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
