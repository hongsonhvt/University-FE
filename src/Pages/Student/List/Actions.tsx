import { ImportPayload, Student } from '@api';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import Dropzone from '@components/DropZone';
import { StudentList_Get } from '@redux';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const AddButton = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ImportPayload>();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ImportPayload> = async (data) => {
    setIsSubmitting(true);

    try {
      await new Student().import(data);
      toast({
        title: `Imported successfully`,
        status: 'success',
        isClosable: true,
      });
      onCloseModal();
      dispatch(StudentList_Get({}));
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCloseModal = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme='green'>
        Import from file
      </Button>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import students</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.File}>
                <Dropzone
                  onFileAccepted={(file) => setValue('File', file[0])}
                />
                <FormErrorMessage>
                  {errors.File && errors.File.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onCloseModal}>Cancel</Button>
            <Button
              colorScheme='green'
              ml={3}
              onClick={handleSubmit(onSubmit)}
              isLoading={isSubmitting}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Actions = () => {
  return (
    <Flex justify='end'>
      <AddButton />
    </Flex>
  );
};

export { Actions };
