import { Course, UMApplicationCourseCommandsCreateCreateCommand } from '@api';
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
import { SelectItemType } from '@models';
import { CourseList_Get, RootState } from '@redux';
import { Select } from 'chakra-react-select';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type CreateFormData = {
  courseId: string;
  name: string;
  programs: readonly SelectItemType[];
};

const AddButton = () => {
  const programOptions = useSelector(
    (state: RootState) => state.courseList.programOptions
  );

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateFormData>();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<CreateFormData> = async (
    data: CreateFormData
  ) => {
    setIsSubmitting(true);

    const body: UMApplicationCourseCommandsCreateCreateCommand = {
      ...data,
      programs: data.programs.map((s) => s.value),
    };

    try {
      await new Course().postCourse(body);
      toast({
        title: `Created ${data.name} program`,
        status: 'success',
        isClosable: true,
      });
      onCloseModal();
      dispatch(CourseList_Get({}));
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
        Add Course
      </Button>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.courseId}>
                <FormLabel>Course ID</FormLabel>
                <Input
                  {...register('courseId', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.courseId && errors.courseId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.name} mt={4}>
                <FormLabel>Course Name</FormLabel>
                <Input
                  {...register('name', {
                    required: ValidationMessage.required,
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.programs}>
                <FormLabel>Program</FormLabel>
                <Select
                  isMulti
                  {...register('programs', {
                    required: ValidationMessage.required,
                  })}
                  options={programOptions}
                  onChange={(options) => setValue('programs', options)}
                />
                <FormErrorMessage>
                  {errors.programs && errors.programs.message}
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
