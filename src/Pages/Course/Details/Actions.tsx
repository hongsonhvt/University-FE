import { Course, GetCourseByIdData } from '@api';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
import { CourseDetails_Reset } from '@redux';
import { RetrieveData } from '@types';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  course: RetrieveData<GetCourseByIdData>;
};

type EditFormData = {
  name: string;
  courseId: string;
};

const editFormDataDefaultValues = (
  course: RetrieveData<GetCourseByIdData>
): EditFormData => {
  return { name: course.name!, courseId: course.courseId! };
};

const EditButton = ({ course }: ButtonProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: editFormDataDefaultValues(course),
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset(editFormDataDefaultValues(course));
  }, [course]);

  const onSubmit: SubmitHandler<EditFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new Course().putCourse(course.id!, data);

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });
      onClickClose();

      dispatch(CourseDetails_Reset());
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  const onClickClose = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Button colorScheme='green' onClick={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Course Details</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.courseId}>
                <FormLabel>Course ID:</FormLabel>
                <Input
                  {...register('courseId', {
                    required: ValidationMessage.required,
                  })}
                />
                <FormErrorMessage>
                  {errors.courseId && errors.courseId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Course Name:</FormLabel>
                <Input
                  {...register('name', {
                    required: ValidationMessage.required,
                  })}
                  autoComplete='off'
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClickClose}>Cancel</Button>
            <Button
              colorScheme='blue'
              ml={3}
              onClick={handleSubmit(onSubmit)}
              isLoading={isSubmitting}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const DeleteButton = ({ course }: ButtonProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickDelete = async () => {
    setIsSubmitting(true);

    try {
      await new Course().deleteCourse(course.id!);

      toast({
        title: 'Deleted course successfully!',
        status: 'success',
        isClosable: true,
      });
      onClose();
      navigate('/course');
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete course
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={onClickDelete}
                isLoading={isSubmitting}
                colorScheme='red'
                ml='3'
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

type ActionsProps = {
  course: RetrieveData<GetCourseByIdData>;
};

const Actions = ({ course }: ActionsProps) => {
  return (
    <Flex justify='end' columnGap={2}>
      <EditButton course={course} />
      <DeleteButton course={course} />
    </Flex>
  );
};

export { Actions };
