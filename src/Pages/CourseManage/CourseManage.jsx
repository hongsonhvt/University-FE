import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import axios from 'axios';

function CourseManage() {
  const token = useSelector((store) => store);
  const [courses, setCourses] = useState([]);
  const [programs, setPrograms] = useState([]); // Define programs state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(''); // Added state for program selection

  const getPrograms = async () => {
    try {
      const response = await axios.get("http://localhost:5123/Program");
      setPrograms(response.data.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  const getCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5123/Course", {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`, // Add the 'token' variable
        },
      });

      setCourses(response.data.data);
    } catch (e) {
      console.error("Error getting programs:", e);
    }
  };

  useEffect(() => {
    getPrograms();
    getCourses(); // Fetch courses when the component mounts
  }, []);

  const handleAddCourse = async () => {
    try {
      const response = await axios.post('http://localhost:5123/Course', {
        name: courseName, // Use the courseName state
        courseId: courseId, // Use the courseId state
        programs: [selectedProgram], // Use the selected program
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.token?.token}`, // Add the 'token' variable
        },
      });
  
      if (response.status === 200) {
        getCourses();
        setCourseId('');
        setCourseName('');
        setSelectedCourse(null);
        setSelectedProgram(''); // Clear the selected program
        onClose();
      }
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };
  

  const handleCancel = () => {
    onClose();
  };

  const handleSaveCourse = () => {
    if (selectedCourse) {
      handleEdit();
    } else {
      handleAddCourse();
    }
  };

  const handleEdit = async () => {
    const payload = {
      courseId: selectedCourse.courseId,
      courseName: selectedCourse.courseName,
      program: selectedProgram, // Use the selected program
    };

    try {
      if (selectedCourse.id) {
        const response = await axios.put(`http://localhost:5123/Course/${selectedCourse.id}`, payload);
        if (response.status === 200) {
          getCourses();
          onClose();
        }
      } else {
        console.error("Selected course does not have an ID.");
      }
    } catch (error) {
      console.error("Error editing course:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        const response = await axios.delete(`http://localhost:5123/Course/${id}`);
        if (response.status === 200) {
          getCourses();
          onClose();
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  const handleOpenDetail = (course) => {
    setSelectedCourse(course);
    setSelectedProgram(course.program); // Set the selected program
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
          <ChakraButton onClick={onOpen} colorScheme="blue">
            Add Course
          </ChakraButton>
        </div>
      </div>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedCourse ? "Course Details" : "Create Course"}
          </ModalHeader>
          <ModalCloseButton />
          {selectedCourse ? (
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Course ID:</FormLabel>
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
                <FormLabel>Course Name:</FormLabel>
                <Input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={selectedCourse.courseName}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      courseName: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="program">Program:</FormLabel>
                <Select
                  value={selectedProgram} // Use the selected program
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  {programs.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} onClick={handleEdit}>
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </ModalBody>
          ) : (
            <ModalBody pb={6}>
              <form>
                <FormControl>
                  <FormLabel htmlFor="courseId">Course ID:</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    id="courseId"
                    name="courseId"
                    value={courseId}
                    placeholder="COMP101"
                    onChange={(e) => setCourseId(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel htmlFor="courseName">Course Name:</FormLabel>
                  <Input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={courseName}
                    placeholder="ABC123"
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel htmlFor="program">Program:</FormLabel>
                  <Select
                    value={selectedProgram} // Use the selected program
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    {programs.map(program => (
                      <option key={program.id} value={program.id}>
                        {program.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </form>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} onClick={handleSaveCourse}>
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Program</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr key={course.id}>
              <td>{idx + 1}</td>
              <td>{course.courseId}</td>
              <td>{course.name}</td>
              <td>{course.program}</td>
              <td>
                <HStack spacing="15px" justify="center">
                  <Button
                    onClick={() => handleOpenDetail(course)}
                    colorScheme="cyan"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteCourse(course.id)}
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
