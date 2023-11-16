import React from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import { FaFacebookF, FaVoicemail } from "react-icons/fa";
import Useravatar from '../../Images/User-avatar.svg.png'
import "./Professor.css";

const professors = [
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  {
    id: 1,
    name: 'Professor Michael Omar',
    hometown: 'Pakistan, Los, US',
    professorInformation: 'Professor Michael Omar is a distinguished professor in the Department of Physics at Stanford University. With a Ph.D. in Theoretical Physics, she is renowned for her groundbreaking research in quantum mechanics and has published numerous papers in prestigious scientific journals.',
  },
  
  // Thêm thông tin giáo viên khác ở đây
];

const Professor = () => {
  return (
    <div>
      <div className="search-bar-1">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
      </div>
      <div className="row-professor">
        {professors.map((professor) => (
          <div key={professor.id} className="professor">
            <div className="professor-information">
              <div className="intro-professor">
                <div className="social-media">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaVoicemail />
                  </a>
                </div>
                <img src={Useravatar} alt="" />
                <h4>{professor.name}</h4>
                <p className="professor-loc">{professor.hometown}</p>
                <p>{professor.professorInformation}</p>
              </div>
              {/* <div className="professor-footer"></div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professor;
