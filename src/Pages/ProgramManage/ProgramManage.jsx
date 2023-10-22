import React, { useState } from "react";
import "./ProgramManage.css";
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
  // Đổi tên Button thành ChakraButton
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function ProgramManage() {
  const [programs, setPrograms] = useState([
    {
      programId: "1",
      programName: "Computer Science",
      programCode: "COMP",
      programDuration: "4 years",
    },
    {
      programId: "2",
      programName: "Business Administration",
      programCode: "BADM",
      programDuration: "3 years",
    },
    // Thêm dữ liệu chương trình khác ở đây
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const [newProgram, setNewProgram] = useState({
    programId: "",
    programName: "",
    programCode: "",
    programDuration: "",
  });

  // State to store the selected program for detail modal
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleAddProgram = () => {
    setNewProgram({
      programId: "",
      programName: "",
      programCode: "",
      programDuration: "",
    });
    onOpen();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPrograms([...programs, newProgram]);
    onClose();
  };

  const handleDelete = (programId) => {
    const updatedPrograms = programs.filter(
      (program) => program.programId !== programId
    );
    setPrograms(updatedPrograms);
  };

  // Function to open the detail modal and set the selected program
  const handleOpenDetail = (program) => {
    setSelectedProgram(program);
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
          <ChakraButton onClick={handleAddProgram} colorScheme="blue">
            Add Program
          </ChakraButton>
        </div>
      </div>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedProgram ? "Program Details" : "Create Program"}
          </ModalHeader>
          <ModalCloseButton />
          {selectedProgram ? ( // Render program details if a program is selected
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Program ID:</FormLabel>
                <Input
                  type="text"
                  id="programId"
                  name="programId"
                  value={selectedProgram.programId}
                  readOnly
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Program Name:</FormLabel>
                <Input
                  type="text"
                  id="programName"
                  name="programName"
                  value={selectedProgram.programName}
                  readOnly
                />
              </FormControl>

              <FormControl>
                <FormLabel>Program Code:</FormLabel>
                <Input
                  type="text"
                  id="programCode"
                  name="programCode"
                  value={selectedProgram.programCode}
                  readOnly
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Program Duration:</FormLabel>
                <Input
                  type="text"
                  id="programDuration"
                  name="programDuration"
                  value={selectedProgram.programDuration}
                  readOnly
                />
              </FormControl>
            </ModalBody>
          ) : (
            // Render form for creating a new program
            <form onSubmit={handleFormSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Program ID:</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    id="programId"
                    name="programId"
                    value={newProgram.programId}
                    placeholder="01"
                    onChange={(e) =>
                      setNewProgram({ ...newProgram, programId: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Program Name:</FormLabel>
                  <Input
                    type="text"
                    id="programName"
                    name="programName"
                    value={newProgram.programName}
                    placeholder="Computer Science"
                    onChange={(e) =>
                      setNewProgram({
                        ...newProgram,
                        programName: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Program Code:</FormLabel>
                  <Input
                    type="text"
                    id="programCode"
                    name="programCode"
                    value={newProgram.programCode}
                    placeholder="COMP"
                    onChange={(e) =>
                      setNewProgram({
                        ...newProgram,
                        programCode: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Program Duration:</FormLabel>
                  <Input
                    type="text"
                    id="programDuration"
                    name="programDuration"
                    value={newProgram.programDuration}
                    placeholder="4 years"
                    onChange={(e) =>
                      setNewProgram({
                        ...newProgram,
                        programDuration: e.target.value,
                      })
                    }
                  />
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
            <th>ID</th>
            <th>Program Name</th>
            <th>Program Code</th>
            <th>Program Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program.programId}>
              <td>{program.programId}</td>
              <td>{program.programName}</td>
              <td>{program.programCode}</td>
              <td>{program.programDuration}</td>
              <td>
                <button
                  onClick={() => handleDelete(program.programId)}
                  className="delete-teacher"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleOpenDetail(program)} // Open detail modal with the selected program
                  className="detail-teacher"
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

export default ProgramManage;
