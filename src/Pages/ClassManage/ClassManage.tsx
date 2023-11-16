import React, { useState, useEffect } from 'react';
import './ClassManage.css';
import { AiOutlineSearch } from 'react-icons/ai';
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
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../redux/store';

function ClassManage() {
  const token = useSelector((store: RootState) => store);
  const [mclasss, setMClasss] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const [newMClass, setNewMClass] = useState<any>({
    mclassId: '',
    mclassName: '',
  });

  const isMClassNameExists = async (mclassName: any) => {
    try {
      const response = await axios.get(
        `http://localhost:5123/ManagentClass?mclassName=${mclassName}`,
        {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        }
      );

      return response.data.data.length > 0;
    } catch (error) {
      console.error('Error checking class name:', error);
      return false;
    }
  };

  const getMClasss = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5123/ManagementClass',
        {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        }
      );

      setMClasss(response.data.data);
    } catch (e) {
      console.error('Error getting Classes:', e);
    }
  };

  useEffect(() => {
    getMClasss();
  }, []);

  const handleAddMClass = () => {
    setNewMClass({
      mclassId: '',
      mclassName: '',
    });
    setSelectedMClass(null);
    onOpen();
  };

  const handleSaveMClass = () => {
    if (selectedMClass) {
      handleEdit();
    } else {
      handleAddMClass();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFormSubmit = async () => {
    const isNameExists = await isMClassNameExists(newMClass.mclassNameName);

    if (isNameExists) {
      alert('Class name already exists. Please choose a different name.');
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5123/ManagementClass',
          newMClass,
          {
            headers: {
              Authorization: `Bearer ${token?.token?.token}`,
            },
          }
        );

        setMClasss([...mclasss, response.data.data]);
        onClose();
      } catch (error) {
        console.error('Error adding class:', error);
      }
    }
  };

  const handleDelete = async (mclassId: any) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        await axios.delete(
          `http://localhost:5123/ManagementClass/${mclassId}`,
          {
            headers: {
              Authorization: `Bearer ${token?.token?.token}`,
            },
          }
        );

        const updatedMClasss = mclasss.filter(
          (mclass: any) => mclass.mclassId !== mclassId
        );
        setMClasss(updatedMClasss);
      } catch (error) {
        console.error('Error deleting class:', error);
      }
    }
  };

  const [selectedMClass, setSelectedMClass] = useState<any>(null);

  const handleOpenDetail = (mclass: any) => {
    setSelectedMClass(mclass);
    onOpen();
  };

  const handleEdit = async () => {
    const payload = {
      mclassId: selectedMClass.mclassId,
      name: selectedMClass.name,
    };

    try {
      const res = await axios.put(
        `http://localhost:5123/ManagementClass/${selectedMClass.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token?.token?.token}`,
          },
        }
      );
      console.log('res', res);
      getMClasss();
      onClose();
    } catch (error) {
      console.error('Error editing class:', error);
    }
  };

  return (
    <div className='App'>
      <div className='search-bar-1'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search...' />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        <div className='add-btn'>
          <ChakraButton onClick={handleAddMClass} colorScheme='blue'>
            Add Class
          </ChakraButton>
        </div>
      </div>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedMClass ? 'Class Details' : 'Create Class'}
          </ModalHeader>
          <ModalCloseButton />
          {selectedMClass ? (
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Class ID:</FormLabel>
                <Input
                  type='text'
                  id='mclassId'
                  name='mclassId'
                  value={selectedMClass.mclassId}
                  onChange={(e) =>
                    setSelectedMClass({
                      ...selectedMClass,
                      mclassId: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Class Name:</FormLabel>
                <Input
                  type='text'
                  id='mclassName'
                  name='mclassName'
                  value={selectedMClass.name}
                  onChange={(e) =>
                    setSelectedMClass({
                      ...selectedMClass,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              <ModalFooter>
                <ChakraButton colorScheme='blue' mr={3} onClick={handleEdit}>
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </ModalBody>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Class ID:</FormLabel>
                  <Input
                    ref={initialRef}
                    type='text'
                    id='mclassId'
                    name='mclassId'
                    value={newMClass.mclassId}
                    placeholder='IT'
                    onChange={(e) =>
                      setNewMClass({ ...newMClass, mclassId: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Class Name:</FormLabel>
                  <Input
                    type='text'
                    id='mclassName'
                    name='mclassName'
                    value={newMClass.mclassName}
                    placeholder='Information Technology'
                    onChange={(e) =>
                      setNewMClass({
                        ...newMClass,
                        mclassName: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <ChakraButton
                  colorScheme='blue'
                  mr={3}
                  onClick={handleSaveMClass}
                >
                  Save
                </ChakraButton>
                <ChakraButton onClick={onClose}>Cancel</ChakraButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
      <table className='teacher-table'>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Class Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mclasss.map((mclass: any, idx) => (
            <tr key={mclass.mclassId}>
              <td>{idx + 1}</td>
              <td>{mclass.mclassId}</td>
              <td>{mclass.name}</td>
              <td>
                <HStack spacing='15px' justify='center'>
                  <Button
                    onClick={() => handleOpenDetail(mclass)}
                    colorScheme='cyan'
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(mclass.mclassId)}
                    colorScheme='red'
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

export default ClassManage;
