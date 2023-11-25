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
  Input,
  InputGroup,
  InputRightElement,
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
  Spinner,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { ValidationMessage } from '@constants';
import { CourseClassList_Get, RootState } from '@redux';
import { useDebounce } from '@uidotdev/usehooks';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
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
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(searchText, 300);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    const searchHN = async () => {
      dispatch(CourseClassList_Get({ q: debouncedSearch }));
    };

    searchHN();
  }, [debouncedSearch]);

  return (
    <InputGroup>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Search...'
      />
      <InputRightElement>
        {status === 'loading' ? <Spinner /> : <AiOutlineSearch />}
      </InputRightElement>
    </InputGroup>
  );
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
