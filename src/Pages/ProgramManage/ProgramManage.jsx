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
  HStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import axios from 'axios';

function ProgramManage() {
  const token = useSelector((store) => store);
  const [programs, setPrograms] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [programId, setProgramId] = useState('');
  const [programName, setProgramName] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);

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

  const handleAddProgram = async () => {
    try {
      const response = await axios.post('http://localhost:5123/Program', {
        programId,
        name: programName,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      if (response.status === 200) {
        getPrograms();
        setProgramId('');
        setProgramName('');
        onClose();
      }
    } catch (error) {
      console.error('Error adding program:', error);
    }
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

  const handleEdit = async () => {
    const payload = {
      programId: selectedProgram.programId,
      name: selectedProgram.name,
    };

    try {
      const res = await axios.put(`http://localhost:5123/Program/${selectedProgram.id}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.token?.token}`,
        },
      });

      if (res.status === 200) {
        getPrograms();
        onClose();
      }
    } catch (error) {
      console.error("Error editing program:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      try {
        const response = await axios.delete(`http://localhost:5123/Program/${id}`, {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        });

        if (response.status === 200) {
          getPrograms();
          onClose();
        }
      } catch (error) {
        console.error("Error deleting program:", error);
      }
    }
  };

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
          <ChakraButton onClick={onOpen} colorScheme="blue">
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
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Program ID:</FormLabel>
                <Input
                  ref={initialRef}
                  type="text"
                  id="programId"
                  name="programId"
                  value={programId}
                  placeholder="IT"
                  onChange={(e) =>
                    setProgramId(e.target.value)
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Program Name:</FormLabel>
                <Input
                  type="text"
                  id="programName"
                  name="programName"
                  value={programName}
                  placeholder="Information Technology"
                  onChange={(e) =>
                    setProgramName(e.target.value)
                  }
                />
              </FormControl>
              <ModalFooter>
                <ChakraButton colorScheme="blue" mr={3} onClick={handleSaveProgram}>
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
            <th>ID</th>
            <th>Program Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, idx) => (
            <tr key={program.id}> {/* Thay đổi key thành program.id */}
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
                    onClick={() => handleDelete(program.id)}
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
