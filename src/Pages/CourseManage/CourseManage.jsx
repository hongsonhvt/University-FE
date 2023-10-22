import React, { useState } from "react";
import "./CourseManage.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Select } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter, 
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  FormControl,
} from '@chakra-ui/react';

function CourseManage() {
  const [courses, setCourses] = useState([
    {
      courseId: "1",
      courseName: "AI",
      courseStart: "02/02/2001",
      courseEnd: "02/02/2022",
      courseCode: "COMP1243",
      program: "Information Technology"
    },
    {
      courseId: "2",
      courseName: "AI",
      courseStart: "02/02/2001",
      courseEnd: "02/02/2022",
      courseCode: "COMP1243",
      program: "Business Administration	"
    },
    // Thêm dữ liệu khóa học khác ở đây
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  
  const [newCourse, setNewCourse] = useState({
    courseId: "",
    courseName: "",
    courseStart: "",
    courseEnd: "",
    courseCode: "",
    program: "" 
  });

  // State to store the selected course for detail modal
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleAddCourse = () => {
    setNewCourse({
      courseId: "",
      courseName: "",
      courseStart: "",
      courseEnd: "",
      courseCode: "",
      program: "" 
    });
    onOpen();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, newCourse]);
    onClose();
  };

  const handleDelete = (courseId) => {
    const updatedCourses = courses.filter(
      (course) => course.courseId !== courseId
    );
    setCourses(updatedCourses);
  };

  // Function to open the detail modal and set the selected course
  const handleOpenDetail = (course) => {
    setSelectedCourse(course);
    onOpen();
  };

  return (
    <div className="App">
      <div className="search-bar-1">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        <div className="add-btn">
          <Button onClick={handleAddCourse} colorScheme='blue'>Add Course</Button>
        </div>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedCourse ? "Course Details" : "Create Course"}
          </ModalHeader>
          <ModalCloseButton />
          {selectedCourse ? (
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="courseId">Course ID</FormLabel>
                <Input 
                  ref={initialRef}
                  type="text"
                  id="courseId"
                  name="courseId"
                  value={selectedCourse.courseId}
                  readOnly
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="courseName">Course Name</FormLabel>
                <Input 
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={selectedCourse.courseName}
                  readOnly
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="courseStart">Course Start</FormLabel>
                <Input 
                  type="date"
                  id="courseStart"
                  name="courseStart"
                  value={selectedCourse.courseStart}
                  readOnly
                />
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel htmlFor="courseEnd">Course End</FormLabel>
                <Input 
                  type="date"
                  id="courseEnd"
                  name="courseEnd"
                  value={selectedCourse.courseEnd}
                  readOnly
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="courseCode">Course Code</FormLabel>
                <Input 
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={selectedCourse.courseCode}
                  readOnly
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="program">Program</FormLabel>
                <Select
                  value={selectedCourse.program}
                  isReadOnly
                >
                  <option value="Information Technology">Information Technology</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Business Administration">Business Administration</option>
                </Select>
              </FormControl>
            </ModalBody>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel htmlFor="courseId">Course ID</FormLabel>
                  <Input 
                    ref={initialRef}
                    type="text"
                    id="courseId"
                    name="courseId"
                    value={newCourse.courseId}
                    placeholder="01"
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseId: e.target.value })
                    } 
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel htmlFor="courseName">Course Name</FormLabel>
                  <Input 
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={newCourse.courseName}
                    placeholder="ABC123"
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseName: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="courseStart">Course Start</FormLabel>
                  <Input 
                    type="date"
                    id="courseStart"
                    name="courseStart"
                    value={newCourse.courseStart}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseStart: e.target.value })
                    }
                  />
                </FormControl>
                
                <FormControl mt={4}>
                  <FormLabel htmlFor="courseEnd">Course End</FormLabel>
                  <Input 
                    type="date"
                    id="courseEnd"
                    name="courseEnd"
                    value={newCourse.courseEnd}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseEnd: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="courseCode">Course Code</FormLabel>
                  <Input 
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    value={newCourse.courseCode}
                    placeholder="COMP1985"
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, courseCode: e.target.value })
                    } 
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel htmlFor="program">Program</FormLabel>
                  <Select
                    value={newCourse.program}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, program: e.target.value })
                    }
                  >
                    <option value="Information Technology">Information Technology</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Business Administration">Business Administration</option>
                  </Select>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} type="submit">
                  Save
                </Button> 
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Course Start</th>
            <th>Course End</th>
            <th>Course Code</th>
            <th>Program</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.courseId}</td>
              <td>{course.courseName}</td>
              <td>{course.courseStart}</td>
              <td>{course.courseEnd}</td>
              <td>{course.courseCode}</td>
              <td>{course.program}</td>
              <td>
                <button
                  onClick={() => handleDelete(course.courseId)}
                  className="delete-teacher"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleOpenDetail(course)}
                  className="detail-course"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseManage;
