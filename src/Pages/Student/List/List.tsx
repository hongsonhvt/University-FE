import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData } from '@layout';
import { RootState, StudentList_Get, StudentList_Reset } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './Actions';
import { ListTable } from './Table';

function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector(
    (state: RootState) => state.studentList.students
  );
  const status = useSelector((state: RootState) => state.studentList.status);

  useWaitUserInfo(() => {
    dispatch(StudentList_Get({}));
  });

  useEffect(() => {
    return () => {
      dispatch(StudentList_Reset());
    };
  }, []);

  return (
    <Grid rowGap={3}>
      <GridItem>
        <Actions />
      </GridItem>
      <GridItem>
        <MainData data={students} showSpinner={status === 'loading'}>
          {students && <ListTable students={students} />}
        </MainData>
      </GridItem>
    </Grid>
  );
}

export { StudentList };
