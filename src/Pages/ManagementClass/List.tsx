import {
  ManagementClass,
  Program,
  UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
  UMApplicationManagementClassQueriesGetAllGetAllDto,
  UMApplicationProgramQueriesGetAllGetAllDto,
} from '@api';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Link,
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
import { ValidationMessage } from '@constants';
import { setStateWithApiFallback } from '@functions';
import { useWaitUserInfo } from '@hooks';
import { MainData } from '@layout';
import { User } from '@redux';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as ReactRouterLink } from 'react-router-dom';

type CreateFormData = {
  programId: string;
  numberOfClasses: number;
};

type AddButtonProps = {
  reload: () => void;
};

const AddButton = ({ reload }: AddButtonProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateFormData>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useWaitUserInfo();
  const [programs, setPrograms] = useState<
    UMApplicationProgramQueriesGetAllGetAllDto[] | undefined
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setStateWithApiFallback(new Program().getProgram(), setPrograms, []);
    }
  }, [user]);

  const onSubmit: SubmitHandler<CreateFormData> = async (data) => {
    setIsSubmitting(true);

    const body: UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand =
      {
        ...data,
      };

    try {
      await new ManagementClass().postManagementClass(body);

      toast({
        title: `Created ${data.numberOfClasses} classes`,
        status: 'success',
        isClosable: true,
      });
      onClickClose();
      reload();
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
              <FormControl isInvalid={!!errors.programId}>
                <FormLabel>Course</FormLabel>
                <Select
                  placeholder='Select course'
                  {...register('programId', {
                    required: ValidationMessage.required,
                  })}
                >
                  {programs?.map((course) => (
                    <option value={course.id} key={course.id}>
                      {course.name} ({course.programId})
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.programId && errors.programId.message}
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

type ActionsProps = {
  reload: () => void;
};

const Actions = ({ reload }: ActionsProps) => {
  return (
    <Flex justify='end'>
      <AddButton reload={reload}></AddButton>
    </Flex>
  );
};

type ListProps = {
  managementClasses: UMApplicationManagementClassQueriesGetAllGetAllDto[];
  user: User;
};

const List = ({ managementClasses, user }: ListProps) => {
  return (
    <MainData data={managementClasses}>
      <TableContainer>
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Class name</Th>
              <Th>Students number</Th>
              <Th>Program</Th>
              <Th textAlign='center'>Academic Year</Th>
            </Tr>
          </Thead>

          <Tbody>
            {managementClasses?.map((managementClass, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>
                    <Link as={ReactRouterLink} to={managementClass.id}>
                      {managementClass?.name}
                    </Link>
                  </Td>
                  <Td>{managementClass.studentsCount}</Td>
                  <Td>{managementClass.program?.name}</Td>
                  <Td textAlign='center'>{managementClass.academicYear}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </MainData>
  );
};

const ManagementClassList = () => {
  const user = useWaitUserInfo();
  const [managementClasses, setManagementClasses] = useState<
    UMApplicationManagementClassQueriesGetAllGetAllDto[] | undefined
  >();

  const getManagementClasses = () => {
    setStateWithApiFallback(
      new ManagementClass().getManagementClass({}) as Promise<
        AxiosResponse<any>
      >,
      setManagementClasses,
      []
    );
  };

  useEffect(() => {
    if (user) {
      getManagementClasses();
    }
  }, [user]);

  return (
    <Grid rowGap='3'>
      <GridItem>
        <Actions reload={getManagementClasses}></Actions>
      </GridItem>
      <GridItem>
        {user && managementClasses && (
          <List user={user} managementClasses={managementClasses}></List>
        )}
      </GridItem>
    </Grid>
  );
};

export { ManagementClassList };
