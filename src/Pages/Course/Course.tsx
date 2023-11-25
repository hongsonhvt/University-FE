import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import appdev from '../../Images/app-dev.png';
import './Course.css';

const courses = [
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Jane Doe',
    Grade: 'Merrit',
    Status: 'Studying',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'Project Web',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Tyler Doe',
    Grade: '	Not graded',
    Status: 'Passed',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 3,
    courseCode: 'COMP1254',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Marcus Doe',
    Grade: 'Fail',
    courseName: 'Requirements Management',
    Status: 'Fail',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Jane Doe',
    Grade: 'Merrit',
    Status: 'Studying',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'AI',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Tyler Doe',
    Grade: '	Not graded',
    Status: 'Passed',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 3,
    courseCode: 'COMP1254',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Marcus Doe',
    Grade: 'Fail',
    courseName: 'AI',
    Status: 'Fail',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Jane Doe',
    Grade: 'Merrit',
    Status: 'Studying',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'AI',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    professor: 'Tyler Doe',
    Grade: '	Not graded',
    Status: 'Passed',
    courseDetail:
      'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },

  // Thêm thông tin khóa học khác ở đây
];

const CourseComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
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
      <div className='course-area'>
        {courses.map((course, idx) => (
          <div key={idx} className='course-row'>
            <div className='course-item'>
              <div
                className='course-item-title'
                onClick={() => openModal(course)}
              >
                <a href=''>
                  <img src={appdev} alt='' />
                </a>
                <h3>{course.courseName}</h3>
              </div>
              <div className='course-des'>
                <p>
                  <span></span> <b>Duration:</b> {course.courseStart} -{' '}
                  {course.courseEnd}
                </p>
                <p>
                  <span></span> <b>Professor:</b> {course.professor}
                </p>
                <p>
                  <span></span> <b>Grade:</b> {course.Grade}
                </p>
                <p>
                  <span
                    className={`Status-grade ${
                      course.Status === 'Studying'
                        ? 'Studying'
                        : course.Status === 'Fail'
                        ? 'Fail'
                        : ''
                    }`}
                  ></span>{' '}
                  <b>Status:</b> {course.Status}
                </p>
              </div>
            </div>
          </div>
        ))}

        {selectedCourse && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedCourse.courseName}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src={appdev} alt='' />
                <p>
                  <span></span> <b>Duration:</b> {selectedCourse.courseStart} -{' '}
                  {selectedCourse.courseEnd}
                </p>
                <p>
                  <span></span> <b>Professor:</b> {selectedCourse.professor}
                </p>
                <Text>{selectedCourse.courseDetail}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' onClick={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};

export { CourseComponent };
