import { GetProgramData } from '@api';
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

const ListTable = ({
  programs,
}: {
  programs: RetrieveData<GetProgramData>;
}) => {
  return (
    <TableContainer>
      <Table variant={'striped'} size={'sm'} className='teacher-table'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>ID</Th>
            <Th>Program Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {programs.map((program, idx) => (
            <Tr key={program.id}>
              <Td>{idx + 1}</Td>
              <Td>
                <Link as={ReactRouterLink} to={program.id}>
                  {program?.programId}
                </Link>
              </Td>
              <Td>
                <Link as={ReactRouterLink} to={program.id}>
                  {program.name}
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
