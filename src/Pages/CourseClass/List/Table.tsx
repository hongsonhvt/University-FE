import { UMDomainEnumsCourseClassECourseClassStatus } from '@api';
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
import { User } from '@redux';
import { Link as ReactRouterLink } from 'react-router-dom';
import { CourseClassType } from './shared';

type ListProps = {
  courseClasses: CourseClassType[];
  user: User;
};

const ListTable = ({ courseClasses, user }: ListProps) => {
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
            {user?.role !== 'Teacher' && <Th>Teacher</Th>}
          </Tr>
        </Thead>

        <Tbody>
          {courseClasses?.map((courseClass, idx) => {
            const status = courseClass.status
              ? UMDomainEnumsCourseClassECourseClassStatus[courseClass.status]
              : null;

            return (
              <Tr key={idx}>
                <Td>{idx + 1}</Td>
                <Td>
                  <Link as={ReactRouterLink} to={courseClass.id}>
                    {courseClass?.name}
                  </Link>
                </Td>
                <Td>{courseClass.course?.courseId}</Td>
                <Td>{courseClass.course?.name}</Td>
                <Td textAlign='center'>{courseClass?.sessionsCount}</Td>
                <Td textAlign='center'>{status}</Td>
                {user?.role !== 'Teacher' && (
                  <Td>
                    {courseClass?.teacher?.firstName}{' '}
                    {courseClass?.teacher?.lastName}
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { ListTable };
