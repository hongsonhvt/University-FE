import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { MainData, ProtectedComponent } from '@layout';
import {
  CourseClassList_Get,
  CourseClassList_GetCourses,
  CourseClassList_Reset,
  RootState,
} from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './Actions';
import { ListTable } from './Table';

const CourseClassList = () => {
  const dispatch = useDispatch();
  const courseClasses = useSelector(
    (state: RootState) => state.courseClassList.courseClasses
  );
  const status = useSelector(
    (state: RootState) => state.courseClassList.status
  );
  const user = useWaitUserInfo(() => {
    dispatch(CourseClassList_Get({}));
    dispatch(CourseClassList_GetCourses());
  });

  useEffect(() => {
    return () => {
      dispatch(CourseClassList_Reset());
    };
  }, []);

  return (
    <Grid rowGap='3'>
      <GridItem>
        <ProtectedComponent role='Admin' hideFallback>
          <Actions />
        </ProtectedComponent>
      </GridItem>

      <GridItem>
        <MainData data={courseClasses} showSpinner={status === 'loading'}>
          {user && courseClasses && (
            <ListTable user={user} courseClasses={courseClasses}></ListTable>
          )}
        </MainData>
      </GridItem>
    </Grid>
  );
};

export { CourseClassList };
