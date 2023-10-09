import React, { useState } from 'react'
import "./StudentManage.css"
import { AiOutlineSearch } from "react-icons/ai"

function StudentManage() {
    const [students, setStudents] = useState([
      {
        id: 1,
        name: 'Nguyễn Văn A',
        dob: '01/01/2000',
        studentCode: 'SV001',
        className: '12A1',
        email: 'nguyenvana@example.com',
      },
      {
        id: 2,
        name: 'Trần Thị B',
        dob: '02/02/2001',
        studentCode: 'SV002',
        className: '12A2',
        email: 'tranthib@example.com',
      },
      // Thêm dữ liệu sinh viên khác ở đây
    ]);
  
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const [newStudent, setNewStudent] = useState({
      id: '',
      name: '',
      dob: '',
      studentCode: '',
      className: '',
      email: '',
    });
  
    const handleAddStudent = () => {
      setIsFormVisible(true);
    };
  
    const handleCancel = () => {
        setIsFormVisible(false);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setStudents([...students, newStudent]);
      setNewStudent({
        id: '',
        name: '',
        dob: '',
        studentCode: '',
        className: '',
        email: '',
      });
      setIsFormVisible(false);
    };
    const handleDelete = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
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
                <button className="add-button" onClick={handleAddStudent} type="submit">Add Student</button>
            </div>
        </div>
        {isFormVisible && (
            
          <form  className="add-student-form form-visible" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="id" className='title-add'>ID:</label>
              <input className='Student-m-input'
                type="text"
                id="id"
                name="id"
                value={newStudent.id}
                placeholder='01'
                onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className='title-add'>Student Name:</label>
              <input className='Student-m-input'
                type="text"
                id="name"
                name="name"
                value={newStudent.name}
                placeholder='Nguyen Van A'
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob" className='title-add'>Date Of Birth:</label>
              <input className='Student-m-input'
                type="date"
                id="dob"
                name="dob"
                value={newStudent.dob}
                onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentCode" className='title-add'>Student Code:</label>
              <input className='Student-m-input'
                type="text"
                id="studentCode"
                name="studentCode"
                value={newStudent.studentCode}
                placeholder='GCH220041'
                onChange={(e) => setNewStudent({ ...newStudent, studentCode: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="className" className='title-add'>Lớp Học:</label>
              <input className='Student-m-input'
                type="text"
                id="className"
                name="className"
                value={newStudent.className}
                placeholder='TCH2213'
                onChange={(e) => setNewStudent({ ...newStudent, className: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className='title-add'>Email:</label>
              <input className='Student-m-input'
                type="email"
                id="email"
                name="email"
                value={newStudent.email}
                placeholder='abcgd@gmail.com'
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              />
            </div>
            <button type="submit" className='button-add-student'>Add Student</button>
            <button onClick={handleCancel} className='button-cancel-student'>Hủy</button>
          </form>
        )}
  
        <table class="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Date Of Birth</th>
              <th>Student code</th>
              <th>Class</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.studentCode}</td>
                <td>{student.className}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)} className='delete-student'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default StudentManage;
