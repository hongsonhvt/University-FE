import { GetTeacherData } from '@api';
import {
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

const ListTable = ({
  teachers,
}: {
  teachers: RetrieveData<GetTeacherData>;
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
          </Tr>
        </Thead>
        <Tbody>
          {teachers.map((teacher, idx) => (
            <Tr key={teacher.id}>
              <Td>{idx + 1}</Td>
              <Td>{teacher.teacherId}</Td>
              <Td>{teacher.firstName}</Td>
              <Td>{teacher.middleName}</Td>
              <Td>{teacher.lastName}</Td>
              <Td>{getGender(teacher)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { ListTable };
