import {
  CourseClass,
  UMApplicationCourseClassQueriesGetByIdGetByIdDto,
} from '@api';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { ValidationMessage } from '@constants';
import { StringHelper } from '@helpers';
import { SelectItemType } from '@models';
import { RootState } from '@redux';
import { Select } from 'chakra-react-select';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { DetailsButtonProps } from './shared';

type AssignFormData = {
  teacher: SelectItemType | null;
};

const assignFormDataDefaultValues = (
  courseClass: UMApplicationCourseClassQueriesGetByIdGetByIdDto
): AssignFormData => {
  return {
    teacher: courseClass.teacher
      ? {
          value: courseClass.teacher.id!,
          label: StringHelper.shortName(courseClass.teacher),
        }
      : null,
  };
};

const DetailsAssignTeacherForm = ({
  close,
  reload,
  courseClass,
}: DetailsButtonProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AssignFormData>({
    defaultValues: assignFormDataDefaultValues(courseClass),
  });
  const toast = useToast();
  const watchTeacher = watch('teacher');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const teacherOptions = useSelector(
    (store: RootState) => store.courseClassDetails.teacherOptions
  );

  useEffect(() => {
    reset(assignFormDataDefaultValues(courseClass));
  }, [courseClass]);

  const onSubmit: SubmitHandler<AssignFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      await new CourseClass().assignToTeacher(
        courseClass.id!,
        data.teacher!.value
      );

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
        <FormControl isInvalid={!!errors.teacher}>
          <FormLabel>Teacher</FormLabel>
          <Select
            {...register('teacher', {
              required: ValidationMessage.required,
            })}
            options={teacherOptions}
            value={watchTeacher}
            onChange={(option) => setValue('teacher', option)}
          />
          <FormErrorMessage>
            {errors.teacher && errors.teacher.message}
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

export { DetailsAssignTeacherForm };
