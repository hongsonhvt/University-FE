import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Box, Button, Modal,  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, Text } from "@chakra-ui/react";
import Images from '../../Images/Images';
import "./CourseTeacher.css";

const courses = [
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    classTeach: 'ABC2345',
    Status: 'Teaching',
    courseDetail: 'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'Project Web',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    classTeach: 'ABC2345',
    Status: 'Teaching',
    courseDetail:'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
{
    id: 3,
    courseCode: 'COMP1254',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    classTeach: 'ABC2345',
    courseName: 'Requirements Management',
    Status: 'Teaching',
    courseDetail:'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    classTeach: 'ABC2345',
    Status: 'Teaching',
    courseDetail: 'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'AI',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    Status: 'Teaching',
    classTeach: 'ABC2345',
    courseDetail:'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
{
    id: 3,
    courseCode: 'COMP1254',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    courseName: 'AI',
    classTeach: 'ABC2345',
    Status: 'End',
    courseDetail:'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 1,
    courseName: 'AI',
    courseCode: 'COMP1243',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    Status: 'End',
    classTeach: 'ABC2345',
    courseDetail: 'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },
  {
    id: 2,
    courseName: 'AI',
    courseCode: 'COMP1244',
    courseStart: '02/02/2001',
    courseEnd: '02/02/2022',
    Status: 'End',
    classTeach: 'ABC2345',
    courseDetail:'Môn học Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu và ứng dụng trong khoa học máy tính, tập trung vào việc phát triển máy tính và hệ thống có khả năng thực hiện các nhiệm vụ thông minh mà trước đây chỉ có con người thực hiện được. AI bao gồm nhiều phương pháp và kỹ thuật, như học máy, mạng nơ-ron, xử lý ngôn ngữ tự nhiên và thị giác máy tính.',
  },

  // Thêm thông tin khóa học khác ở đây
];

const CourseTeacher = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

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
      <div className="course-area">
      {courses.map((course) => (
        <div key={course.id} className="course-row">
          <div className="course-item">
            <div className="course-item-title" onClick={() => openModal(course)}>
              <a href="">
                <img src={Images.appdev} alt="" />
              </a>
              <h3>{course.courseName}</h3>
            </div>
            <div className="course-des">
              <p>
                <span></span> <b>Duration:</b> {course.courseStart} - {course.courseEnd}
              </p>
              <p>
                <span></span> <b>Class Teaching:</b> {course.classTeach} {/* Use course.classTeach */}
              </p>
              <p>
                <span className={`Status-grade ${course.Status === 'Studying' ? 'Studying' : course.Status === 'Fail' ? 'Fail' : ''}`}></span> <b>Status:</b> {course.Status}
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
                <img src={Images.appdev} alt="" />
                <p>
                  <span></span> <b>Duration:</b> {selectedCourse.courseStart} - {selectedCourse.courseEnd}
                </p>
                <Text>{selectedCourse.courseDetail}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={closeModal}>
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

export default CourseTeacher;
