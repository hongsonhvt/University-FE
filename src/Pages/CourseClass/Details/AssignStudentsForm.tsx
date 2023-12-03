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
  students: readonly SelectItemType[];
};

const assignFormDataDefaultValues = (): AssignFormData => {
  return { students: [] };
};

const DetailsAssignStudentsForm = ({
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
  const studentOptions = useSelector(
    (store: RootState) => store.courseClassDetails.studentOptions
  );

  useEffect(() => {
    reset(assignFormDataDefaultValues());
  }, [courseClass]);

  const onSubmit: SubmitHandler<AssignFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new CourseClass().assignToStudents(courseClass.id!, {
        studentsId: data.students.map((s) => s.value),
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
        <FormControl isInvalid={!!errors.students}>
          <FormLabel>Students</FormLabel>
          <Select
            isMulti
            {...register('students', { required: ValidationMessage.required })}
            options={studentOptions}
            onChange={(option) => setValue('students', option)}
          />
          <FormErrorMessage>
            {errors.students && errors.students.message}
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

export { DetailsAssignStudentsForm };
