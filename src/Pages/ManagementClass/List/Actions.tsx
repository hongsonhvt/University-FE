import {
  ManagementClass,
  UMApplicationManagementClassCommandsBulkCreateBulkCreateCommand,
} from '@api';
import {
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
import { ValidationMessage } from '@constants';
import { ManagementClassList_Reload, RootState } from '@redux';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type CreateFormData = {
  programId: string;
  numberOfClasses: number;
};

const AddButton = () => {
  const programs = useSelector(
    (s: RootState) => s.managementClassList.programs
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateFormData>();

  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      dispatch(ManagementClassList_Reload());
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

const Actions = () => {
  return (
    <Flex justify='end'>
      <AddButton />
    </Flex>
  );
};

export { Actions };
