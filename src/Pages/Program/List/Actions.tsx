import { Program, UMApplicationProgramCommandsCreateCreateCommand } from '@api';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
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
import { ValidationMessage } from '@constants';
import { ProgramList_Get } from '@redux';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const AddButton = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UMApplicationProgramCommandsCreateCreateCommand>();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<
    UMApplicationProgramCommandsCreateCreateCommand
  > = async (data: UMApplicationProgramCommandsCreateCreateCommand) => {
    setIsSubmitting(true);
    try {
      await new Program().postProgram(data);
      toast({
        title: `Created ${data.name} program`,
        status: 'success',
        isClosable: true,
      });
      onCloseModal();
      dispatch(ProgramList_Get({}));
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
        Add Program
      </Button>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Program</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.programId}>
                <FormLabel>Program ID</FormLabel>
                <Input
                  {...register('programId', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.programId && errors.programId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.name} mt={4}>
                <FormLabel>Program Name</FormLabel>
                <Input
                  {...register('name', {
                    required: ValidationMessage.required,
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
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
