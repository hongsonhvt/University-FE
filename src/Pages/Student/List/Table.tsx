import { GetStudentData } from '@api';
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
import { getGender } from '@functions';
import { RetrieveData } from '@types';
import { Link as ReactRouterLink } from 'react-router-dom';

const ListTable = ({
  students,
}: {
  students: RetrieveData<GetStudentData>;
}) => {
  return (
    <TableContainer>
      <Table variant={'striped'} size={'sm'} className='teacher-table'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>ID</Th>
            <Th>First name</Th>
            <Th>Middle name</Th>
            <Th>Last name</Th>
            <Th>Gender</Th>
            <Th>Management class</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student, idx) => (
            <Tr key={student.id}>
              <Td>{idx + 1}</Td>
              <Td>{student.studentId}</Td>
              <Td>{student.firstName}</Td>
              <Td>{student.middleName}</Td>
              <Td>{student.lastName}</Td>
              <Td>{getGender(student)}</Td>
              <Td>
                <Link
                  as={ReactRouterLink}
                  to={'/management-class/' + student.managementClass?.id}
                >
                  {student.managementClass?.name}
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
