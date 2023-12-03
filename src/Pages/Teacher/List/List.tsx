import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData } from '@layout';
import { RootState, TeacherList_Get, TeacherList_Reset } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './Actions';
import { ListTable } from './Table';

function TeacherList() {
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state: RootState) => state.teacherList.teachers
  );
  const status = useSelector((state: RootState) => state.teacherList.status);

  useWaitUserInfo(() => {
    dispatch(TeacherList_Get({}));
  });

  useEffect(() => {
    return () => {
      dispatch(TeacherList_Reset());
    };
  }, []);

  return (
    <Grid rowGap={3}>
      <GridItem>
        <Actions />
      </GridItem>
      <GridItem>
        <MainData data={teachers} showSpinner={status === 'loading'}>
          {teachers && <ListTable teachers={teachers} />}
        </MainData>
      </GridItem>
    </Grid>
  );
}

export { TeacherList };
