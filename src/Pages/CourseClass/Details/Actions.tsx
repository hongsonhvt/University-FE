import {
  CourseClass,
  UMApplicationCourseClassCommandsUpdateUpdateCommandData,
  UMApplicationCourseClassQueriesGetByIdGetByIdDto,
} from '@api';
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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { SlotsName, ValidationMessage } from '@constants';
import { SelectItemType } from '@models';
import { RootState } from '@redux';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { Select } from 'chakra-react-select';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DetailsAssignManagementClassForm } from 'src/Pages/CourseClass/Details/AssignManagementClassForm';
import { DetailsAssignStudentsForm } from 'src/Pages/CourseClass/Details/AssignStudentsForm';
import { DetailsAssignTeacherForm } from 'src/Pages/CourseClass/Details/AssignTeacherForm';

type EditFormData = {
  name: string;
  startAt: Date;
  sessionsCount: number;
  slots: readonly SelectItemType[];
};

type ButtonProps = {
  reload?: () => void;
  courseClass: UMApplicationCourseClassQueriesGetByIdGetByIdDto;
};

const slotOptions: SelectItemType[] = Object.entries(SlotsName).map(
  ([key, value]) => ({ value: key, label: value })
);

const editFormDataDefaultValues = (
  courseClass: UMApplicationCourseClassQueriesGetByIdGetByIdDto
): EditFormData => {
  return {
    slots:
      courseClass.slots?.map((s) => ({
        value: `${s.weekDay}${s.daySlot}`,
        label: SlotsName[`${s.weekDay}${s.daySlot}`],
      })) ?? [],
    name: courseClass.name!,
    sessionsCount: courseClass.sessionsCount!,
    startAt: new Date(courseClass.startAt!),
  };
};

const AssignButton = ({ reload, courseClass }: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>
        Assign
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assign course class</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs size='md' variant='enclosed'>
              <TabList>
                <Tab>Assign to teacher</Tab>
                <Tab>Assign to management class</Tab>
                <Tab>Assign to students</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <DetailsAssignTeacherForm
                    close={onClose}
                    reload={reload}
                    courseClass={courseClass}
                  />
                </TabPanel>
                <TabPanel>
                  <DetailsAssignManagementClassForm
                    close={onClose}
                    reload={reload}
                    courseClass={courseClass}
                  />
                </TabPanel>
                <TabPanel>
                  <DetailsAssignStudentsForm
                    close={onClose}
                    reload={reload}
                    courseClass={courseClass}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const EditButton = ({ reload, courseClass }: ButtonProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: editFormDataDefaultValues(courseClass),
  });
  const toast = useToast();
  const watchSlots = watch('slots');
  const watchStartAt = watch('startAt');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasSessions, setHasSessions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset(editFormDataDefaultValues(courseClass));
    setHasSessions(!!courseClass.sessions?.length);
  }, [courseClass]);

  const onSubmit: SubmitHandler<EditFormData> = async (data) => {
    setIsSubmitting(true);

    const body: UMApplicationCourseClassCommandsUpdateUpdateCommandData = {
      ...data,
      startAt: moment(data.startAt).format('YYYY-MM-DDTHH:mm:ss.SSS'),
      slots: data.slots.map((s) => s.value).join(','),
    };

    try {
      await new CourseClass().putCourseClass(courseClass.id!, body);

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });
      onClickClose();
      reload?.();
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

      <Modal isOpen={isOpen} onClose={onClickClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit course class</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register('name', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.startAt}>
                <FormLabel>Start date</FormLabel>
                <SingleDatepicker
                  name='startAt'
                  date={watchStartAt}
                  onDateChange={(date) => setValue('startAt', date)}
                  propsConfigs={{ inputProps: { isReadOnly: hasSessions } }}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.sessionsCount}>
                <FormLabel>Number of sessions</FormLabel>
                <NumberInput min={1} isReadOnly={hasSessions}>
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

              <FormControl isInvalid={!!errors.slots}>
                <FormLabel>Slots</FormLabel>
                <Select
                  {...register('slots', {
                    required: ValidationMessage.required,
                  })}
                  isMulti
                  options={slotOptions}
                  closeMenuOnSelect={false}
                  value={watchSlots}
                  onChange={(options) => setValue('slots', options)}
                  isDisabled={hasSessions}
                />
                <FormErrorMessage>
                  {errors.slots && errors.slots.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClickClose}>Cancel</Button>
            <Button
              colorScheme='green'
              ml='3'
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

const DeleteButton = ({ courseClass }: ButtonProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickDelete = async () => {
    setIsSubmitting(true);

    try {
      await new CourseClass().deleteCourseClass(courseClass.id!);

      toast({
        title: 'Deleted class successfully',
        status: 'success',
        isClosable: true,
      });

      onClose();
      navigate('/course-class');
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
              Delete course class
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
  reload: () => void;
};

const Actions = ({ reload }: ActionsProps) => {
  const courseClass = useSelector(
    (store: RootState) => store.courseClassDetails.courseClass
  );

  if (!courseClass) {
    return (
      <Flex justify='end'>
        <Spinner />
      </Flex>
    );
  }

  return (
    <Flex justify='end' columnGap='2'>
      <AssignButton reload={reload} courseClass={courseClass} />
      <EditButton reload={reload} courseClass={courseClass} />
      <DeleteButton courseClass={courseClass} />
    </Flex>
  );
};

export { Actions };
