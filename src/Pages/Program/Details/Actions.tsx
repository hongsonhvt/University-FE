import { GetProgramByIdData, Program } from '@api';
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
import { ProgramDetails_Reload } from '@redux';
import { RetrieveData } from '@types';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  program: RetrieveData<GetProgramByIdData>;
};

type EditFormData = {
  name: string;
  programId: string;
};

const editFormDataDefaultValues = (
  program: RetrieveData<GetProgramByIdData>
): EditFormData => {
  return { name: program.name!, programId: program.programId! };
};

const EditButton = ({ program }: ButtonProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: editFormDataDefaultValues(program),
  });

  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset(editFormDataDefaultValues(program));
  }, [program]);

  const onSubmit: SubmitHandler<EditFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new Program().putProgram(program.id!, data);

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });
      onClickClose();

      dispatch(ProgramDetails_Reload());
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
          <ModalHeader>Program Details</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex direction='column' rowGap='3'>
              <FormControl isInvalid={!!errors.programId}>
                <FormLabel>Program ID:</FormLabel>
                <Input
                  {...register('programId', {
                    required: ValidationMessage.required,
                  })}
                />
                <FormErrorMessage>
                  {errors.programId && errors.programId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Program Name:</FormLabel>
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

const DeleteButton = ({ program }: ButtonProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickDelete = async () => {
    setIsSubmitting(true);

    try {
      await new Program().deleteProgram(program.id!);

      toast({
        title: 'Deleted program successfully!',
        status: 'success',
        isClosable: true,
      });
      onClose();
      navigate('/program');
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
              Delete program
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
  program: RetrieveData<GetProgramByIdData>;
};

const Actions = ({ program }: ActionsProps) => {
  return (
    <Flex justify='end' columnGap={2}>
      <EditButton program={program} />
      <DeleteButton program={program} />
    </Flex>
  );
};

export { Actions };
