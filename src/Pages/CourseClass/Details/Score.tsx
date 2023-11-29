import { CourseClass, UpdateScorePayload } from '@api';
import {
  Box,
  Button,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Link,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { ValidationMessage } from '@constants';
import { getGender } from '@functions';
import { ProtectedComponent } from '@layout';
import { RootState, courseClassDetailsGetScores } from '@redux';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom';

const Score = () => {
  const courseClassId = useSelector(
    (store: RootState) => store.courseClassDetails.courseClass?.id
  );
  const scores = useSelector(
    (store: RootState) => store.courseClassDetails.scores
  );

  const toast = useToast();
  const dispatch = useDispatch();
  const [status, setStatus] = useState<'read' | 'edit' | 'submit'>('read');
  const { register, handleSubmit, reset } = useForm<UpdateScorePayload>({});

  const formDefaultValues =
    scores?.reduce<Record<string, number | undefined>>((acc, curr) => {
      acc[curr.student?.id!] = curr.score ?? undefined;
      return acc;
    }, {}) ?? {};

  const onSubmit: SubmitHandler<UpdateScorePayload> = async (data) => {
    setStatus('submit');

    try {
      if (!courseClassId) return;
      await new CourseClass().updateScore(courseClassId, data);

      toast({
        title: 'Updated successfully',
        status: 'success',
        isClosable: true,
      });

      dispatch(courseClassDetailsGetScores());
    } catch {
    } finally {
      setStatus('read');
    }
  };

  useEffect(() => {
    if (scores?.length) {
      reset(formDefaultValues);
    }
  }, [scores]);

  if (!scores) {
    return <Spinner />;
  }

  if (!scores.length) {
    return <></>;
  }

  return (
    <Box>
      <Flex justify='space-between'>
        <Heading size='lg'>Score table</Heading>
        <ProtectedComponent role='Teacher' hideFallback>
          <Flex columnGap='2'>
            {status === 'read' && (
              <Button onClick={() => setStatus('edit')} colorScheme='blue'>
                Input scores
              </Button>
            )}
            {status === 'edit' && (
              <Button onClick={() => setStatus('read')}>Cancel</Button>
            )}
            {status !== 'read' && (
              <Button
                onClick={handleSubmit(onSubmit)}
                isLoading={status === 'submit'}
                colorScheme='green'
              >
                Save
              </Button>
            )}
          </Flex>
        </ProtectedComponent>
      </Flex>
      <TableContainer mt='3'>
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>First name</Th>
              <Th>Middle name</Th>
              <Th>Last name</Th>
              <Th>Gender</Th>
              <Th>Management class</Th>
              <Th>Number score</Th>
              <Th>Letter score</Th>
            </Tr>
          </Thead>

          <Tbody>
            {scores.map((score, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>{score.student?.firstName}</Td>
                  <Td>{score.student?.middleName}</Td>
                  <Td>{score.student?.lastName}</Td>
                  <Td>{getGender(score.student!)}</Td>
                  <Td>
                    <Link
                      as={ReactRouterLink}
                      to={
                        '/management-class/' +
                        score.student?.managementClass?.id
                      }
                    >
                      {score.student?.managementClass?.name}
                    </Link>
                  </Td>
                  <Td>
                    {status === 'read' ? (
                      score.score
                    ) : (
                      <NumberInput min={0} max={10} size='xs'>
                        <NumberInputField
                          readOnly={status === 'submit'}
                          {...register(score.student?.id!, {
                            required: ValidationMessage.required,
                          })}
                        />
                      </NumberInput>
                    )}
                  </Td>
                  <Td>{score.letterScore}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { Score };
