import { GetCourseByIdData } from '@api';
import {
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { StatusBadge } from '@components';
import { RetrieveData } from '@types';
import { Link as ReactRouterLink } from 'react-router-dom';

type CourseClassListProps = {
  courseClasses: RetrieveData<GetCourseByIdData>['courseClasses'];
};

const CourseClassList = ({ courseClasses }: CourseClassListProps) => {
  if (!courseClasses || courseClasses.length === 0) {
    return <></>;
  }

  return (
    <>
      <Heading size='lg'>Class list</Heading>
      <TableContainer mt='3'>
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Academic Year</Th>
            </Tr>
          </Thead>

          <Tbody>
            {courseClasses.map((courseClass, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>
                    <Link
                      as={ReactRouterLink}
                      to={'/course-class/' + courseClass.id}
                    >
                      {courseClass.name}
                    </Link>
                  </Td>
                  <Td>
                    <StatusBadge status={courseClass.status!} />
                  </Td>
                  <Td>{courseClass.academicYear}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export { CourseClassList };
