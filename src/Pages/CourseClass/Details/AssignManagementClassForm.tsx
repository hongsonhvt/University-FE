import { CourseClass } from '@api';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { ValidationMessage } from '@constants';
import { SelectItemType } from '@models';
import { RootState } from '@redux';
import { Select } from 'chakra-react-select';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { DetailsButtonProps } from './shared';

type AssignFormData = {
  managementClasses: readonly SelectItemType[];
};

const assignFormDataDefaultValues = (): AssignFormData => {
  return { managementClasses: [] };
};

const DetailsAssignManagementClassForm = ({
  close,
  reload,
  courseClass,
}: DetailsButtonProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AssignFormData>({
    defaultValues: assignFormDataDefaultValues(),
  });
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const managementClassOptions = useSelector(
    (store: RootState) => store.courseClassDetails.managementClassOptions
  );

  useEffect(() => {
    reset(assignFormDataDefaultValues());
  }, [courseClass]);

  const onSubmit: SubmitHandler<AssignFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new CourseClass().assignToManagementClasses(courseClass.id!, {
        managementClassesId: data.managementClasses.map((s) => s.value),
      });

      toast({
        title: 'Modified successfully',
        status: 'success',
        isClosable: true,
      });

      close();
      reload?.();
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Flex direction='column' rowGap='3'>
        <FormControl isInvalid={!!errors.managementClasses}>
          <FormLabel>Management classes</FormLabel>
          <Select
            isMulti
            {...register('managementClasses', {
              required: ValidationMessage.required,
            })}
            options={managementClassOptions}
            onChange={(option) => setValue('managementClasses', option)}
          />
          <FormErrorMessage>
            {errors.managementClasses && errors.managementClasses.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex justify='end' mt='5' columnGap='3'>
        <Button onClick={close}>Cancel</Button>
        <Button
          colorScheme='green'
          isLoading={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          Confirm
        </Button>
      </Flex>
    </>
  );
};

export { DetailsAssignManagementClassForm };
