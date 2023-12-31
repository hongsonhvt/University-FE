import { Grid, GridItem } from '@chakra-ui/react';
import { useWaitUserInfo } from '@hooks';
import { BackToPage, MainData } from '@layout';
import { CourseDetails_Get, CourseDetails_Reset, RootState } from '@redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Actions } from './Actions';
import { InfoCard } from './InfoCard';
import { CourseClassList } from './CourseClassList';

const CourseDetails = () => {
  const course = useSelector((s: RootState) => s.courseDetails.course);

  const params = useParams();
  const user = useWaitUserInfo();
  const dispatch = useDispatch();

  const courseId = params.courseId;

  useEffect(() => {
    return () => {
      dispatch(CourseDetails_Reset());
    };
  }, []);

  useEffect(() => {
    if (user && courseId) {
      dispatch(CourseDetails_Get(courseId));
    }
  }, [user, courseId]);

  return (
    <MainData data={course}>
      <BackToPage
        url='/course'
        text='Back to course list'
        rightContent={<Actions course={course!} />}
      >
        <Grid rowGap={3}>
          <GridItem>
            <InfoCard course={course!} />
          </GridItem>
          <GridItem>
            <CourseClassList courseClasses={course?.courseClasses} />
          </GridItem>
        </Grid>
      </BackToPage>
    </MainData>
  );
};

export { CourseDetails };
