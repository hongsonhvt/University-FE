import { GetCourseData } from '@api';
import {
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RetrieveData } from '@types';
import { Link as ReactRouterLink } from 'react-router-dom';

const ListTable = ({ courses }: { courses: RetrieveData<GetCourseData> }) => {
  return (
    <TableContainer>
      <Table variant={'striped'} size={'sm'} className='teacher-table'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>ID</Th>
            <Th>Course Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.map((course, idx) => (
            <Tr key={course.id}>
              <Td>{idx + 1}</Td>
              <Td>
                <Link as={ReactRouterLink} to={course.id}>
                  {course?.courseId}
                </Link>
              </Td>
              <Td>
                <Link as={ReactRouterLink} to={course.id}>
                  {course.name}
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { ListTable };
