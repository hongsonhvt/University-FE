import React, { useState } from 'react'
import "./TeacherManage.css"
import { AiOutlineSearch } from "react-icons/ai"

function TeacherManage() {
    const [teachers, setTeachers] = useState([
      {
        id: 1,
        name: 'Nguyễn Văn A',
        dob: '01/01/2000',
        teacherCode: 'SV001',
        email: 'nguyenvana@example.com',
      },
      {
        id: 2,
        name: 'Trần Thị B',
        dob: '02/02/2001',
        teacherCode: 'SV002',
        className: '12A2',
        email: 'tranthib@example.com',
      },
      // Thêm dữ liệu sinh viên khác ở đây
    ]);
  
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const [newTeacher, setNewTeacher] = useState({
      id: '',
      name: '',
      dob: '',
      teacherCode: '',
      email: '',
    });
  
    const handleAddTeacher = () => {
      setIsFormVisible(true);
    };
  
    const handleCancel = () => {
        setIsFormVisible(false);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setTeachers([...teachers, newTeacher]);
      setNewTeacher({
        id: '',
        name: '',
        dob: '',
        teacherCode: '',
        email: '',
      });
      setIsFormVisible(false);
    };
    const handleDelete = (id) => {
        const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
        setTeachers(updatedTeachers);
    };


  
    return (
      <div className="App">
        <div className="search-bar-1">                    
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
                <i>
                <AiOutlineSearch/>
                </i>
            </div>
            <div className="add-btn">
                <button className="add-button" onClick={handleAddTeacher} type="submit">Add Teacher</button>
            </div>
        </div>
        {isFormVisible && (
            
          <form  className="add-teacher-form form-visible" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="id" className='title-add'>ID:</label>
              <input className='Teacher-m-input'
                type="text"
                id="id"
                name="id"
                value={newTeacher.id}
                placeholder='01'
                onChange={(e) => setNewTeacher({ ...newTeacher, id: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className='title-add'>Teacher Name:</label>
              <input className='Teacher-m-input'
                type="text"
                id="name"
                name="name"
                value={newTeacher.name}
                placeholder='Nguyen Van A'
                onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob" className='title-add'>Date Of Birth:</label>
              <input className='Teacher-m-input'
                type="date"
                id="dob"
                name="dob"
                value={newTeacher.dob}
                onChange={(e) => setNewTeacher({ ...newTeacher, dob: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="teacherCode" className='title-add'>Teacher Code:</label>
              <input className='Teacher-m-input'
                type="text"
                id="teacherCode"
                name="teacherCode"
                value={newTeacher.teacherCode}
                placeholder='GCH220041'
                onChange={(e) => setNewTeacher({ ...newTeacher, teacherCode: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className='title-add'>Email:</label>
              <input className='Teacher-m-input'
                type="email"
                id="email"
                name="email"
                value={newTeacher.email}
                placeholder='abcgd@gmail.com'
                onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
              />
            </div>
            <button type="submit" className='button-add-teacher'>Add Teacher</button>
            <button onClick={handleCancel} className='button-cancel-teacher'>Hủy</button>
          </form>
        )}
  
        <table class="teacher-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Teacher Name</th>
              <th>Date Of Birth</th>
              <th>Teacher code</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.dob}</td>
                <td>{teacher.teacherCode}</td>
                <td>{teacher.email}</td>
                <td>
                  <button onClick={() => handleDelete(teacher.id)} className='delete-teacher'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default TeacherManage;
