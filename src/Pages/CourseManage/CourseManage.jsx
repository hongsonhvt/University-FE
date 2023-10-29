import React, { useState, useEffect } from "react";
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
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
  Button,
  HStack
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function CourseManage() {
  const token = useSelector((store) => store);
  const [courses, setCourses] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  
  const [newCourse, setNewCourse] = useState({
    courseId: "",
    courseName: "",
  });

  // State to store the selected course for detail modal
  const [selectedCourse, setSelectedCourse] = useState(null);

  const getCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5123/Course", {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      console.log('response', response);
      setCourses(response.data.data);
    } catch (e) {
      // dispatch( updateUser( response.data.data ) )
      // dispatch( updateToken( '' ) )
      // navigate("/login");
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleAddCourse = () => {
    setNewCourse({
      courseId: "",
      courseName: "",
    });
    setSelectedCourse(null);
    onOpen();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5123/Course", newCourse, {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      // Cập nhật danh sách chương trình và đóng modal
      setCourses([...courses, response.data]);
      onClose();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this courrse?")) {
      try {
        await axios.delete(`http://localhost:5123/course${courseId}`, {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        });
  
        // Loại bỏ chương trình đã xóa khỏi danh sách
        const updatedCourses = courses.filter((course) => course.id !== courseId);
        setCourses(updatedCourses);
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  // Function to open the detail modal and set the selected course
  const handleOpenDetail = (course) => {
    setSelectedCourse(course);
    onOpen();
  };

  const handleEdit = async () => {
    const payload = {
      courseId: selectedCourse.courseId,
      name: selectedCourse.name
    }
  

    const res = await axios.put(`http://localhost:5123/Course/${selectedCourse.id}`,payload,{
      headers: {
        Authorization: `Bearer ${token?.token?.token}`,
      },
    })
    console.log('res',res);
    
    getCourses()
    onClose()
  }

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
          <ChakraButton onClick={handleAddCourse} colorScheme="blue">
            Add Course
          </ChakraButton>
        </div>
      </div>
      <Modal
        initialFocusRef={initialRef}
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
                <FormLabel>Course ID</FormLabel>
                <Input 
                  type="text"
                  id="courseId"
                  name="courseId"
                  value={selectedCourse.courseId}
                  onChange={(e) =>
                    setSelectedCourse({ ...selectedCourse, courseId: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="courseName">Course Name</FormLabel>
                <Input 
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={selectedCourse.courseName}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel htmlFor="program">Program</FormLabel>
                <Select
                  value={selectedCourse.program}
               
                >
                  <option value="Information Technology">Information Technology</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Business Administration">Business Administration</option>
                </Select>
              </FormControl>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} type="submit" onClick={handleEdit}>
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
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
                    placeholder="COMP101"
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
                <ChakraButton colorScheme="blue" mr={3} type="submit">
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr key={course.courseId}>
              <td>{idx + 1}</td>
              <td>{course.courseId}</td>
              <td>{course.name}</td>
              <td>
                <HStack spacing="15px" justify="center">
                  {/* <Button
                    onClick={() => handleOpenDetail(course)}
                    colorScheme="blue"
                  >
                    Detail
                  </Button> */}
                  <Button
                    onClick={() => handleOpenDetail(course)}
                    colorScheme="cyan"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteCourse(course.courseId)}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </HStack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseManage;