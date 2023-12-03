import { GetProgramByIdData } from '@api';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Heading,
} from '@chakra-ui/react';
import { RetrieveData } from '@types';
import { Link as ReactRouterLink } from 'react-router-dom';

type CourseListProps = {
  courses: RetrieveData<GetProgramByIdData>['courses'];
};

const CourseList = ({ courses }: CourseListProps) => {
  if (!courses || courses.length === 0) {
    return <></>;
  }

  return (
    <>
      <Heading size='lg'>Course list</Heading>
      <TableContainer mt='3'>
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>ID</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>

          <Tbody>
            {courses.map((course, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>
                    <Link as={ReactRouterLink} to={'/course/' + course.id}>
                      {course.courseId}
                    </Link>
                  </Td>
                  <Td>
                    <Link as={ReactRouterLink} to={'/course/' + course.id}>
                      {course.name}
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export { CourseList };
