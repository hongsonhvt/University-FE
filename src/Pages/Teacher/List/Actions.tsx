import { Teacher, UMApplicationTeacherCommandsCreateCreateCommand } from '@api';
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
  Switch,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { ValidationMessage } from '@constants';
import { TeacherList_Get } from '@redux';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const AddButton = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UMApplicationTeacherCommandsCreateCreateCommand>();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<
    UMApplicationTeacherCommandsCreateCreateCommand
  > = async (data) => {
    setIsSubmitting(true);

    try {
      await new Teacher().postTeacher(data);
      toast({
        title: `Imported successfully`,
        status: 'success',
        isClosable: true,
      });
      onCloseModal();
      dispatch(TeacherList_Get({}));
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
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import students</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.firstName}>
                <FormLabel>First name</FormLabel>
                <Input
                  {...register('firstName', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.middleName}>
                <FormLabel>Middle name</FormLabel>
                <Input
                  {...register('middleName', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.middleName && errors.middleName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.lastName}>
                <FormLabel>Last name</FormLabel>
                <Input
                  {...register('lastName', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.userName}>
                <FormLabel>Username</FormLabel>
                <Input
                  {...register('userName', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.userName && errors.userName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register('email', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.address}>
                <FormLabel>Address</FormLabel>
                <Input
                  {...register('address', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='gender' mb='0'>
                  Male
                </FormLabel>
                <Switch
                  id='gender'
                  onChange={(e) => setValue('isMale', !!e.target.value)}
                />
                <FormLabel htmlFor='gender' ml='3' mb='0'>
                  Female
                </FormLabel>
              </FormControl>

              <FormControl isInvalid={!!errors.teacherId}>
                <FormLabel>Teacher ID</FormLabel>
                <Input
                  {...register('teacherId', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.teacherId && errors.teacherId.message}
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
