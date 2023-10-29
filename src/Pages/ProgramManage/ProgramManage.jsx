import React, { useState, useEffect } from "react";
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
  Button,
  HStack
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import axios from 'axios';

function ProgramManage() {
  const token = useSelector((store) => store);
  const [programs, setPrograms] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const [newProgram, setNewProgram] = useState({
    programId: "",
    programName: "",
  });

  const isProgramNameExists = async (programName) => {
    try {
      const response = await axios.get(`http://localhost:5123/program?programName=${programName}`, {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      return response.data.data.length > 0;
    } catch (error) {
      console.error("Error checking program name:", error);
      return false;
    }
  };

  const getPrograms = async () => {
    try {
      const response = await axios.get("http://localhost:5123/Program", {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      setPrograms(response.data.data);
    } catch (e) {
      console.error("Error getting programs:", e);
    }
  };

  useEffect(() => {
    getPrograms();
  }, []);

  const handleAddProgram = () => {
    setNewProgram({
      programId: "",
      programName: "",
    });
    setSelectedProgram(null);
    onOpen();
  };

  const handleSaveProgram = () => {
    if (selectedProgram) {
      handleEdit();
    } else {
      handleAddProgram();
    }
  };
  

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = async () => {
    const isNameExists = await isProgramNameExists(newProgram.programName);

    if (isNameExists) {
      alert("Program name already exists. Please choose a different name.");
    } else {
      try {
        const response = await axios.post("http://localhost:5123/program", newProgram, {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        });

        setPrograms([...programs, response.data.data]);
        onClose();
      } catch (error) {
        console.error("Error adding program:", error);
      }
    }
  };

  const handleDelete = async (programId) => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      try {
        await axios.delete(`http://localhost:5123/program/${programId}`, {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        });

        const updatedPrograms = programs.filter((program) => program.programId !== programId);
        setPrograms(updatedPrograms);
      } catch (error) {
        console.error("Error deleting program:", error);
      }
    }
  };

  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleOpenDetail = (program) => {
    setSelectedProgram(program);
    onOpen();
  };

  const handleEdit = async () => {
    const payload = {
      programId: selectedProgram.programId,
      name: selectedProgram.name
    };

    try {
      const res = await axios.put(`http://localhost:5123/Program/${selectedProgram.id}`, payload, {
        headers: {
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });
      console.log('res', res);
      getPrograms();
      onClose();
    } catch (error) {
      console.error("Error editing program:", error);
    }
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
          {selectedProgram ? (
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Program ID:</FormLabel>
                <Input
                  type="text"
                  id="programId"
                  name="programId"
                  value={selectedProgram.programId}
                  onChange={(e) =>
                    setSelectedProgram({ ...selectedProgram, programId: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Program Name:</FormLabel>
                <Input
                  type="text"
                  id="programName"
                  name="programName"
                  value={selectedProgram.name}
                  onChange={(e) =>
                    setSelectedProgram({
                      ...selectedProgram,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} onClick={handleEdit}>
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </ModalBody>
          ) : (
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
                    placeholder="IT"
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
                    placeholder="Information Technology"
                    onChange={(e) =>
                      setNewProgram({
                        ...newProgram,
                        programName: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} onClick={handleSaveProgram}>
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
            <th>ID</th>
            <th>Program Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, idx) => (
            <tr key={program.programId}>
              <td>{idx + 1}</td>
              <td>{program.programId}</td>
              <td>{program.name}</td>
              <td>
                <HStack spacing="15px" justify="center">
                  <Button
                    onClick={() => handleOpenDetail(program)}
                    colorScheme="cyan"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(program.programId)}
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

export default ProgramManage;
