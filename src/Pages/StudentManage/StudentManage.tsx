import {
  Button,
  Button as ChakraButton,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './StudentManage.css';

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

  const [newStudent, setNewStudent] = useState<any>({
    id: '',
    name: '',
    dob: '',
    studentCode: '',
    className: '',
    email: '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  // State to store the selected student for detail modal
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleAddStudent = () => {
    setNewStudent({
      id: '',
      name: '',
      dob: '',
      studentCode: '',
      className: '',
      email: '',
    });
    onOpen();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    onClose();
  };

  const handleDelete = (id: any) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  // Function to open the detail modal and set the selected student
  const handleOpenDetail = (student: any) => {
    setSelectedStudent(student);
    onOpen();
  };

  return (
    <div className='App'>
      <div className='search-bar-1'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search...' />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        <div className='add-btn'>
          <Button onClick={handleAddStudent} colorScheme='blue'>
            Add Student
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedStudent ? 'Student Details' : 'Add Student'}
          </ModalHeader>
          <ModalCloseButton />
          {selectedStudent ? (
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor='id'>ID:</FormLabel>
                <Input
                  type='text'
                  id='id'
                  name='id'
                  value={selectedStudent.id}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='name'>Student Name:</FormLabel>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  value={selectedStudent.name}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
                <Input
                  type='text'
                  id='dob'
                  name='dob'
                  value={selectedStudent.dob}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='studentCode'>Student Code:</FormLabel>
                <Input
                  type='text'
                  id='studentCode'
                  name='studentCode'
                  value={selectedStudent.studentCode}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='className'>Lớp Học:</FormLabel>
                <Input
                  type='text'
                  id='className'
                  name='className'
                  value={selectedStudent.className}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email'>Email:</FormLabel>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={selectedStudent.email}
                  readOnly
                />
              </FormControl>
            </ModalBody>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <ModalBody>
                <FormControl>
                  <FormLabel htmlFor='id'>ID:</FormLabel>
                  <Input
                    type='text'
                    id='id'
                    name='id'
                    value={newStudent.id}
                    placeholder='01'
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, id: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='name'>Student Name:</FormLabel>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    value={newStudent.name}
                    placeholder='Nguyen Van A'
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
                  <Input
                    type='date'
                    id='dob'
                    name='dob'
                    value={newStudent.dob}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, dob: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='studentCode'>Student Code:</FormLabel>
                  <Input
                    type='text'
                    id='studentCode'
                    name='studentCode'
                    value={newStudent.studentCode}
                    placeholder='GCH220041'
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        studentCode: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='className'>Lớp Học:</FormLabel>
                  <Input
                    type='text'
                    id='className'
                    name='className'
                    value={newStudent.className}
                    placeholder='TCH2213'
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        className: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email'>Email:</FormLabel>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={newStudent.email}
                    placeholder='abcgd@gmail.com'
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <ChakraButton colorScheme='blue' type='submit'>
                  Add Student
                </ChakraButton>
                <ChakraButton onClick={handleCancel}>Hủy</ChakraButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
      <table className='student-table'>
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
                <Button
                  onClick={() => handleDelete(student.id)}
                  colorScheme='red'
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleOpenDetail(student)}
                  colorScheme='blue'
                  className='detail-student'
                >
                  Detail
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManage;
