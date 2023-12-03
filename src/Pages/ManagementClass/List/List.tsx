import { UMApplicationManagementClassQueriesGetAllGetAllDto } from '@api';
import {
  Grid,
  GridItem,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData } from '@layout';
import {
  ManagementClassList_Get,
  ManagementClassList_GetPrograms,
  ManagementClassList_Reset,
  RootState,
} from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Actions } from './Actions';

type ListProps = {
  managementClasses: UMApplicationManagementClassQueriesGetAllGetAllDto[];
};

const List = ({ managementClasses }: ListProps) => {
  return (
    <MainData data={managementClasses}>
      <TableContainer>
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Class name</Th>
              <Th>Students number</Th>
              <Th>Program</Th>
              <Th textAlign='center'>Academic Year</Th>
            </Tr>
          </Thead>

          <Tbody>
            {managementClasses?.map((managementClass, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>
                    <Link as={ReactRouterLink} to={managementClass.id}>
                      {managementClass?.name}
                    </Link>
                  </Td>
                  <Td>{managementClass.studentsCount}</Td>
                  <Td>
                    <Link
                      as={ReactRouterLink}
                      to={'/program/' + managementClass.program?.id}
                    >
                      {managementClass.program?.name}
                    </Link>
                  </Td>
                  <Td textAlign='center'>{managementClass.academicYear}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </MainData>
  );
};

const ManagementClassList = () => {
  const managementClasses = useSelector(
    (s: RootState) => s.managementClassList.managementClasses
  );
  const status = useSelector((s: RootState) => s.managementClassList.status);

  const dispatch = useDispatch();

  useWaitUserInfo(() => {
    dispatch(ManagementClassList_Get({}));
    dispatch(ManagementClassList_GetPrograms());
  });

  useEffect(() => {
    return () => {
      dispatch(ManagementClassList_Reset());
    };
  }, []);

  return (
    <Grid rowGap='3'>
      <GridItem>
        <Actions />
      </GridItem>
      <GridItem>
        <MainData data={managementClasses} showSpinner={status === 'loading'}>
          {managementClasses && <List managementClasses={managementClasses} />}
        </MainData>
      </GridItem>
    </Grid>
  );
};

export { ManagementClassList };
