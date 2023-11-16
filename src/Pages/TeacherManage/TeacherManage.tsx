import React, { FormEvent, useState } from 'react';
import './TeacherManage.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

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
      email: 'tranthib@example.com',
    },
    // Thêm dữ liệu giáo viên khác ở đây
  ]);

  const [newTeacher, setNewTeacher] = useState<any>({
    id: '',
    name: '',
    dob: '',
    teacherCode: '',
    email: '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  // State to store the selected teacher for detail modal
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  const handleAddTeacher = () => {
    setNewTeacher({
      id: '',
      name: '',
      dob: '',
      teacherCode: '',
      email: '',
    });
    onOpen();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTeachers([...teachers, newTeacher]);
    onClose();
  };

  const handleDelete = (id: any) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  // Function to open the detail modal and set the selected teacher
  const handleOpenDetail = (teacher: any) => {
    setSelectedTeacher(teacher);
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
          <Button onClick={handleAddTeacher} colorScheme='blue'>
            Add Teacher
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedTeacher ? 'Teacher Details' : 'Add Teacher'}
          </ModalHeader>
          <ModalCloseButton />
          {selectedTeacher ? (
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor='id'>ID:</FormLabel>
                <Input
                  type='text'
                  id='id'
                  name='id'
                  value={selectedTeacher.id}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='name'>Teacher Name:</FormLabel>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  value={selectedTeacher.name}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
                <Input
                  type='text'
                  id='dob'
                  name='dob'
                  value={selectedTeacher.dob}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='teacherCode'>Teacher Code:</FormLabel>
                <Input
                  type='text'
                  id='teacherCode'
                  name='teacherCode'
                  value={selectedTeacher.teacherCode}
                  readOnly
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email'>Email:</FormLabel>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={selectedTeacher.email}
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
                    value={newTeacher.id}
                    placeholder='01'
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, id: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='name'>Teacher Name:</FormLabel>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    value={newTeacher.name}
                    placeholder='Nguyen Van A'
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
                  <Input
                    type='date'
                    id='dob'
                    name='dob'
                    value={newTeacher.dob}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, dob: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='teacherCode'>Teacher Code:</FormLabel>
                  <Input
                    type='text'
                    id='teacherCode'
                    name='teacherCode'
                    value={newTeacher.teacherCode}
                    placeholder='GCH220041'
                    onChange={(e) =>
                      setNewTeacher({
                        ...newTeacher,
                        teacherCode: e.target.value,
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
                    value={newTeacher.email}
                    placeholder='abcgd@gmail.com'
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, email: e.target.value })
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <ChakraButton colorScheme='blue' type='submit'>
                  Add Teacher
                </ChakraButton>
                <ChakraButton onClick={handleCancel}>Hủy</ChakraButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
      <table className='teacher-table'>
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
                <Button
                  onClick={() => handleDelete(teacher.id)}
                  colorScheme='red'
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleOpenDetail(teacher)}
                  colorScheme='blue'
                  className='detail-teacher'
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

export default TeacherManage;
