import {
  Account,
  UMApplicationStudentQueriesGetScoresGetScoresDto,
  UMDomainEnumsCourseClassECourseClassStatus,
} from '@api';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { useState } from 'react';

const Score = () => {
  const [scores, setScores] = useState<
    UMApplicationStudentQueriesGetScoresGetScoresDto[]
  >([]);

  const getScores = async () => {
    const res = await new Account().getMyScores();
    if (res.data.data) {
      setScores(res.data.data);
    }
  };

  useWaitUserInfo(() => getScores());

  return (
    <TableContainer>
      <Table variant='striped' size='sm'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Class name</Th>
            <Th>Course code</Th>
            <Th>Course name</Th>
            <Th textAlign='center'>Sessions</Th>
            <Th textAlign='center'>Status</Th>
            <Th>Teacher</Th>
            <Th textAlign='center'>Number score</Th>
            <Th textAlign='center'>Letter score</Th>
          </Tr>
        </Thead>

        <Tbody>
          {scores.map((score, idx) => {
            const courseClass = score.courseClass;
            const course = score.courseClass?.course;
            const status = courseClass?.status
              ? UMDomainEnumsCourseClassECourseClassStatus[courseClass.status]
              : null;

            return (
              <Tr key={idx}>
                <Td>{idx + 1}</Td>
                <Td>{courseClass?.name}</Td>
                <Td>{course?.courseId}</Td>
                <Td>{course?.name}</Td>
                <Td textAlign='center'>{courseClass?.sessionsCount}</Td>
                <Td textAlign='center'>{status}</Td>
                <Td>
                  {courseClass?.teacher?.firstName}{' '}
                  {courseClass?.teacher?.lastName}
                </Td>
                <Td textAlign='center'>{score.score}</Td>
                <Td textAlign='center'>{score.letterScore}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { Score };
