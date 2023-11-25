import {
  Auth,
  UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand,
} from '@api';
import {
  Box,
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
  Spinner,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { DataCard, DataCardProps } from '@components';
import { ValidationMessage } from '@constants';
import { getGender } from '@functions';
import { StringHelper } from '@helpers';
import { RootState, User, getUser } from '@redux';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const EditButton = ({ user }: { user: User }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand>();
  const toast = useToast();

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    reset({
      address: user.address ?? undefined,
      phoneNumber: user.phoneNumber ?? undefined,
    });
  }, [user]);

  const onSubmit: SubmitHandler<
    UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand
  > = async (data) => {
    setIsSubmitting(true);

    const body: UMApplicationAuthCommandsUpdateMyInfoUpdateMyInfoCommand = {
      ...data,
    };

    try {
      await new Auth().updateInformation(body);

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });

      onClickClose();

      dispatch(getUser());
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

              <FormControl isInvalid={!!errors.phoneNumber}>
                <FormLabel>Phone number</FormLabel>
                <Input
                  {...register('phoneNumber', {
                    required: ValidationMessage.required,
                  })}
                ></Input>
                <FormErrorMessage>
                  {errors.phoneNumber && errors.phoneNumber.message}
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

const PersonalInformation = () => {
  const user = useSelector((store: RootState) => store.auth.user);

  if (!user) {
    return <Spinner />;
  }

  const data: DataCardProps['data'] = [
    {
      header: 'Name',
      label: StringHelper.fullName(user),
    },
    {
      header: 'Gender',
      label: getGender(user),
    },
    {
      header: 'Address',
      label: user.address,
    },
    {
      header: 'Phone number',
      label: user.phoneNumber,
    },
    {
      header: 'Role',
      label: user.role,
    },
  ];

  return (
    <Box>
      <Flex justify='end'>
        <EditButton user={user} />
      </Flex>
      <DataCard heading='My information' data={data} />
    </Box>
  );
};

export { PersonalInformation };
