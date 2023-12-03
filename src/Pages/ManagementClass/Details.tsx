import {
  ManagementClass,
  Student,
  UMApplicationManagementClassCommandsUpdateUpdateCommandData,
  UMApplicationManagementClassQueriesGetByIdGetByIdDto,
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
  Grid,
  GridItem,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { DataCard, DataCardProps } from '@components';
import { ValidationMessage } from '@constants';
import { getGender, setStateWithApiFallback } from '@functions';
import { StringHelper } from '@helpers';
import { useWaitUserInfo } from '@hooks';
import { BackToPage, MainData } from '@layout';
import { SelectItemType } from '@models';
import { Select } from 'chakra-react-select';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from 'react-router-dom';

type ContentProps = {
  managementClass: UMApplicationManagementClassQueriesGetByIdGetByIdDto;
};

type AddStudentsFormData = {
  students: readonly SelectItemType[];
};

type EditFormData = {
  name: string;
};

type ButtonProps = {
  reload?: () => void;
  managementClass: UMApplicationManagementClassQueriesGetByIdGetByIdDto;
};

const addStudentsFormDataDefaultValues = (): AddStudentsFormData => {
  return { students: [] };
};

const editFormDataDefaultValues = (
  managementClass: UMApplicationManagementClassQueriesGetByIdGetByIdDto
): EditFormData => {
  return { name: managementClass.name! };
};

const AddStudentsButton = ({ reload, managementClass }: ButtonProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AddStudentsFormData>({
    defaultValues: addStudentsFormDataDefaultValues(),
  });
  const toast = useToast();
  const user = useWaitUserInfo();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentOptions, setStudentOptions] = useState<
    SelectItemType[] | undefined
  >([]);

  const getStudentOptions = async () => {
    if (!user) return;
    try {
      const res = await new Student().getStudent({});
      const filteredStudents = (res.data.data ?? []).filter(
        (s) => s.managementClass?.id !== managementClass.id
      );

      setStudentOptions(
        filteredStudents.map((t) => {
          const managementClass = t.managementClass
            ? t.managementClass.name
            : 'Not assigned';
          const name = StringHelper.shortNameWithMiddle(t);

          return {
            value: t.id!,
            label: `${name} (${managementClass})`,
          };
        })
      );
    } catch {
      if (true) {
        setStudentOptions([]);
      }
    }
  };

  useEffect(() => {
    getStudentOptions();
  }, [user]);

  const onSubmit: SubmitHandler<AddStudentsFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new ManagementClass().addStudents(managementClass.id!, {
        studentsId: data.students.map((s) => s.value),
      });

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });

      onClose();
      reload?.();
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>
        Add students
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add students to management class</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.students}>
                <FormLabel>Students</FormLabel>
                <Select
                  isMulti
                  {...register('students', {
                    required: ValidationMessage.required,
                  })}
                  options={studentOptions}
                  onChange={(options) => setValue('students', options)}
                />
                <FormErrorMessage>
                  {errors.students && errors.students.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
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

const EditButton = ({ reload, managementClass }: ButtonProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: editFormDataDefaultValues(managementClass),
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset(editFormDataDefaultValues(managementClass));
  }, [managementClass]);

  const onSubmit: SubmitHandler<EditFormData> = async (data) => {
    setIsSubmitting(true);

    const body: UMApplicationManagementClassCommandsUpdateUpdateCommandData = {
      ...data,
    };

    try {
      await new ManagementClass().putManagementClass(managementClass.id!, body);

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
          <ModalHeader>Edit management class</ModalHeader>
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

const DeleteButton = ({ managementClass }: ButtonProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickDelete = async () => {
    setIsSubmitting(true);

    try {
      await new ManagementClass().deleteManagementClass(managementClass.id!);

      toast({
        title: 'Deleted class successfully',
        status: 'success',
        isClosable: true,
      });

      onClose();
      navigate('/management-class');
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
              Delete management class
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
  managementClass: UMApplicationManagementClassQueriesGetByIdGetByIdDto;
};

const Actions = ({ reload, managementClass }: ActionsProps) => {
  return (
    <Flex justify='end' columnGap='2'>
      <AddStudentsButton reload={reload} managementClass={managementClass} />
      <EditButton reload={reload} managementClass={managementClass} />
      <DeleteButton managementClass={managementClass} />
    </Flex>
  );
};

const InfoCard = ({ managementClass }: ContentProps) => {
  const data: DataCardProps['data'] = [
    {
      header: 'Program',
      label: (
        <Link
          as={ReactRouterLink}
          to={'/program/' + managementClass.program?.id}
        >
          {managementClass.program?.name}
        </Link>
      ),
    },
    {
      header: 'Academic year',
      label: managementClass.academicYear,
    },
    {
      header: 'Number of students',
      label: managementClass.students?.length,
    },
  ];

  return <DataCard heading={`Class ${managementClass.name}`} data={data} />;
};

const Students = ({ managementClass }: ContentProps) => {
  const students = managementClass.students;
  if (!students || students.length === 0) {
    return <></>;
  }

  return (
    <TableContainer>
      <Table variant='striped' size='sm'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>First Name</Th>
            <Th>Middle Name</Th>
            <Th>Last Name</Th>
            <Th>Student ID</Th>
            <Th>Gender</Th>
          </Tr>
        </Thead>

        <Tbody>
          {students.map((student, idx) => {
            return (
              <Tr key={idx}>
                <Td>{idx + 1}</Td>
                <Td>{student.firstName}</Td>
                <Td>{student.middleName}</Td>
                <Td>{student.lastName}</Td>
                <Td>{student.studentId}</Td>
                <Td>{getGender(student)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Content = ({ managementClass }: ContentProps) => {
  return (
    <Grid rowGap='3'>
      <GridItem>
        <InfoCard managementClass={managementClass} />
      </GridItem>
      <GridItem>
        <Students managementClass={managementClass} />
      </GridItem>
    </Grid>
  );
};

const ManagementClassDetails = () => {
  const params = useParams();
  const user = useWaitUserInfo();
  const [managementClass, setManagementClass] = useState<
    UMApplicationManagementClassQueriesGetByIdGetByIdDto | null | undefined
  >();

  const getManagementClass = () => {
    const id = params.managementClassId;

    if (user && id) {
      setStateWithApiFallback(
        new ManagementClass().getManagementClassById(id),
        setManagementClass
      );
    }
  };

  useEffect(() => {
    getManagementClass();
  }, [user, params]);

  return (
    <MainData data={managementClass}>
      <BackToPage
        url='/management-class'
        text='Back to management classes list'
        rightContent={
          <Actions
            managementClass={managementClass!}
            reload={getManagementClass}
          />
        }
      >
        <Content managementClass={managementClass!} />
      </BackToPage>
    </MainData>
  );
};

export { ManagementClassDetails };
