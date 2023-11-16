import {
  Button,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Useravatar from '../../Images/User-avatar.svg.png';
import './Student.css';

const Student = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Nguyen Hong Son',
      dob: '01/01/2000',
      studentCode: 'SV001',
      className: 'TCH2305',
      email: 'SonNh@gmail.com',
      studentIntroduction:
        "Hello there! My name is Nguyen Hong Son, and I'm pleased to introduce myself. I was born in 2001, which makes me 23 years old. I come from Ha Noi, and I'm currently pursuing my studies at the University of Greenwich. At university, Im immersing myself in the world of knowledge and growth. Im particularly interested in Information Technology. I believe that education is a powerful tool that empowers us to make a positive impact on the world. Outside of my studies, I enjoy Playing Game. These activities allow me to unwind and express my creativity. Additionally, I value, and I strive to integrate them into every facet of my life.",
      studentPhone: '08345834759',
      studentMajor: 'Information Technology',
      studentAddress: 'Ha Noi, Viet Nam',
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState<any>({});

  const openEditModal = (student: any) => {
    setEditedStudent(student);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEditedStudent = () => {
    // Xử lý lưu thông tin chỉnh sửa ở đây (tạm thời không được cung cấp)
    // Sau đó đóng modal chỉnh sửa
    closeEditModal();
  };

  return (
    <div>
      <div className='search-bar-1'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search...' />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
      </div>
      <div className='student-fluid'>
        {students.map((student) => (
          <div key={student.id} className='student-row'>
            <div className='student-profile'>
              <div className='student-profile-info'>
                <div className='student-profile-img'>
                  <img src={Useravatar} alt='' />
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Name</h6>
                      <p>{student.name}</p>
                    </div>
                  </div>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Major</h6>
                      <p>{student.studentMajor}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Email</h6>
                      <p>{student.email}</p>
                    </div>
                  </div>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Phone</h6>
                      <p>{student.studentPhone}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='address-student'>
                      <h6>Address</h6>
                      <p>{student.studentAddress}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      size='sm'
                      onClick={() => openEditModal(student)}
                    >
                      Edit Information
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='student-main'>
              <div className='student-main-inner'>
                <ul className='student-active'>
                  <li className='active'>
                    <a href=''>Activity</a>
                  </li>
                </ul>
                <div className='activity-detail'>
                  <div className='student-tab-list'>
                    <div className='student-row-1'>
                      <div className='student-row-content'>
                        <div className='student-row-session'>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6>Full Name</h6>
                              <p>{student.name}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6> Phone</h6>
                              <p>{student.studentPhone}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6>Email</h6>
                              <p>{student.email}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6>Address</h6>
                              <p>{student.studentAddress}</p>
                            </div>
                          </div>
                        </div>
                        <div className='student-content-profile'>
                          <p>{student.studentIntroduction}</p>
                        </div>
                        <div className='student-skill'>
                          <div className='skill-test'>
                            <div className='skill-test-title'>
                              <h3>Skill Set</h3>
                              <p className='line-skill'></p>
                            </div>
                          </div>
                          <div className='student-progress'>
                            <h3>PHP</h3>
                            <div className='progress-mini'>
                              <div className='progress-bar-purple'></div>
                            </div>
                          </div>
                          <div className='student-progress'>
                            <h3>Java</h3>
                            <div className='progress-mini'>
                              <div className='progress-bar-red'></div>
                            </div>
                          </div>
                          <div className='student-progress'>
                            <h3>C#</h3>
                            <div className='progress-mini'>
                              <div className='progress-bar-blue'></div>
                            </div>
                          </div>
                          <div className='student-progress'>
                            <h3>ReactJS</h3>
                            <div className='progress-mini'>
                              <div className='progress-bar-green'></div>
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
        ))}
      </div>
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Student Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor='name'>Name:</FormLabel>
              <Input
                type='text'
                id='name'
                name='name'
                value={editedStudent.name}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
              <Input
                type='date'
                id='dob'
                name='dob'
                value={editedStudent.dob}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, dob: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Email:</FormLabel>
              <Input
                type='email'
                id='email'
                name='email'
                value={editedStudent.email}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Introduction:</FormLabel>
              <Input
                type='text'
                id='studentIntroduction'
                name='studentIntroduction'
                value={editedStudent.studentIntroduction}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    studentIntroduction: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Phone:</FormLabel>
              <Input
                type='phone'
                id='studentPhone'
                name='studentPhone'
                value={editedStudent.studentPhone}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    studentPhone: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Address:</FormLabel>
              <Input
                type='text'
                id='studentAddress'
                name='studentAddress'
                value={editedStudent.studentAddress}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    studentAddress: e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={saveEditedStudent}>
              Save
            </Button>
            <Button colorScheme='red' onClick={closeEditModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Student;
