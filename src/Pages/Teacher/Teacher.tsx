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
import './Teacher.css';

const Teacher = () => {
  const [teachers, setTeachers] = useState<any>([
    {
      id: 1,
      name: 'Michael Omar',
      dob: '01/01/2000',
      teacherCode: 'TC001',
      email: 'SonNh@gmail.com',
      teacherIntroduction:
        "Hello there! My name is Michael Omar, and I'm pleased to introduce myself. I was born in 2001, which makes me 23 years old. I come from Ha Noi, and I'm currently pursuing my studies at the University of Greenwich. At university, Im immersing myself in the world of knowledge and growth. Im particularly interested in Information Technology. I believe that education is a powerful tool that empowers us to make a positive impact on the world. Outside of my studies, I enjoy Playing Game. These activities allow me to unwind and express my creativity. Additionally, I value, and I strive to integrate them into every facet of my life.",
      teacherPhone: '08345834759',
      teacherMajor: 'Information Technology',
      teacherAddress: 'Ha Noi, Viet Nam',
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedTeacher, setEditedTeacher] = useState<any>({});

  const openEditModal = (teacher: any) => {
    setEditedTeacher(teacher);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEditedTeacher = () => {
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
        {teachers.map((teacher: any) => (
          <div key={teacher.id} className='student-row'>
            <div className='student-profile'>
              <div className='student-profile-info'>
                <div className='student-profile-img'>
                  <img src={Useravatar} alt='' />
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Name</h6>
                      <p>{teacher.name}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Email</h6>
                      <p>{teacher.email}</p>
                    </div>
                  </div>
                  <div className='student-profile-header'>
                    <div className='student-profile-infor-detail'>
                      <h6>Phone</h6>
                      <p>{teacher.teacherPhone}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <div className='address-student'>
                      <h6>Address</h6>
                      <p>{teacher.teacherAddress}</p>
                    </div>
                  </div>
                </div>
                <div className='student-profile-detail'>
                  <div className='student-profile-header'>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      size='sm'
                      onClick={() => openEditModal(teacher)}
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
                              <p>{teacher.name}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6> Phone</h6>
                              <p>{teacher.teacherPhone}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6>Email</h6>
                              <p>{teacher.email}</p>
                            </div>
                          </div>
                          <div className='student-row-session-item'>
                            <div className='student-hr-address'>
                              <h6>Address</h6>
                              <p>{teacher.teacherAddress}</p>
                            </div>
                          </div>
                        </div>
                        <div className='student-content-profile'>
                          <p>{teacher.teacherIntroduction}</p>
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
          <ModalHeader>Edit Teacher Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor='name'>Name:</FormLabel>
              <Input
                type='text'
                id='name'
                name='name'
                value={editedTeacher.name}
                onChange={(e) =>
                  setEditedTeacher({ ...editedTeacher, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='dob'>Date Of Birth:</FormLabel>
              <Input
                type='date'
                id='dob'
                name='dob'
                value={editedTeacher.dob}
                onChange={(e) =>
                  setEditedTeacher({ ...editedTeacher, dob: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Email:</FormLabel>
              <Input
                type='email'
                id='email'
                name='email'
                value={editedTeacher.email}
                onChange={(e) =>
                  setEditedTeacher({ ...editedTeacher, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Introduction:</FormLabel>
              <Input
                type='text'
                id='teacherIntroduction'
                name='teacherIntroduction'
                value={editedTeacher.teacherIntroduction}
                onChange={(e) =>
                  setEditedTeacher({
                    ...editedTeacher,
                    teacherIntroduction: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Phone:</FormLabel>
              <Input
                type='phone'
                id='teacherPhone'
                name='teacherPhone'
                value={editedTeacher.teacherPhone}
                onChange={(e) =>
                  setEditedTeacher({
                    ...editedTeacher,
                    teacherPhone: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='name'>Address:</FormLabel>
              <Input
                type='text'
                id='teacherAddress'
                name='teacherAddress'
                value={editedTeacher.teacherAddress}
                onChange={(e) =>
                  setEditedTeacher({
                    ...editedTeacher,
                    teacherAddress: e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={saveEditedTeacher}>
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

export default Teacher;
