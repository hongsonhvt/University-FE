import {
  CourseClass,
  UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand,
} from '@api';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { InputSearch } from '@components';
import { ValidationMessage } from '@constants';
import { CourseClassList_Get, RootState } from '@redux';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type CreateFormData = {
  courseId: string;
  numberOfClasses: number;
  startAt: Date;
  sessionsCount: number;
};

const Search = () => {
  const status = useSelector(
    (store: RootState) => store.courseClassList.status
  );
  const dispatch = useDispatch();

  const onSearch = async (searchText: string) => {
    dispatch(CourseClassList_Get({ q: searchText }));
  };

  return <InputSearch onSearch={onSearch} status={status} />;
};

const AddButton = () => {
  const courses = useSelector(
    (state: RootState) => state.courseClassList.courses
  );

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateFormData>();
  const toast = useToast();
  const dispatch = useDispatch();
  const watchStartAt = watch('startAt');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<CreateFormData> = async (data) => {
    setIsSubmitting(true);

    const body: UMApplicationCourseClassCommandsBulkCreateBulkCreateCommand = {
      ...data,
      startAt: data.startAt.toISOString(),
    };

    try {
      await new CourseClass().postCourseClass(body);

      toast({
        title: `Created ${data.numberOfClasses} classes`,
        status: 'success',
        isClosable: true,
      });
      onClickClose();
      dispatch(CourseClassList_Get({}));
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
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClickClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add multiple course classes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.courseId}>
                <FormLabel>Course</FormLabel>
                <Select
                  placeholder='Select course'
                  {...register('courseId', {
                    required: ValidationMessage.required,
                  })}
                >
                  {courses?.map((course) => (
                    <option value={course.id} key={course.id}>
                      {course.name} ({course.courseId})
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.courseId && errors.courseId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.numberOfClasses}>
                <FormLabel>Number of classes</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField
                    {...register('numberOfClasses', {
                      required: ValidationMessage.required,
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {errors.numberOfClasses && errors.numberOfClasses.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.startAt}>
                <FormLabel>Start date</FormLabel>
                <SingleDatepicker
                  name='startAt'
                  date={watchStartAt}
                  onDateChange={(date) => setValue('startAt', date)}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.sessionsCount}>
                <FormLabel>Number of sessions</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField
                    {...register('sessionsCount', {
                      required: ValidationMessage.required,
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {errors.sessionsCount && errors.sessionsCount.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClickClose}>Cancel</Button>
            <Button
              colorScheme='green'
              ml={3}
              isLoading={isSubmitting}
              onClick={handleSubmit(onSubmit)}
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
    <Flex justify='space-between'>
      <Box w='50%' maxW='500px'>
        <Search />
      </Box>
      <AddButton />
    </Flex>
  );
};

export { Actions };
