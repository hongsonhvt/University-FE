import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData, ProtectedComponent } from '@layout';
import {
  CourseList_Get,
  CourseList_GetPrograms,
  CourseList_Reset,
  RootState,
} from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './Actions';
import { ListTable } from './Table';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courseList.courses);

  useWaitUserInfo(() => {
    dispatch(CourseList_Get({}));
    dispatch(CourseList_GetPrograms());
  });

  useEffect(() => {
    return () => {
      dispatch(CourseList_Reset());
    };
  }, []);

  return (
    <Grid rowGap={3}>
      <GridItem>
        <ProtectedComponent role='Admin' hideFallback>
          <Actions />
        </ProtectedComponent>
      </GridItem>
      <GridItem>
        <MainData data={courses}>
          {courses && <ListTable courses={courses} />}
        </MainData>
      </GridItem>
    </Grid>
  );
}

export { CourseList };
