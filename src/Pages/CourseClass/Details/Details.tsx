import {
  CourseClass,
  UMApplicationCourseClassQueriesGetByIdGetByIdDto,
} from '@api';
import { Grid, GridItem } from '@chakra-ui/react';
import { setStateWithApiFallback } from '@functions';
import { useWaitUserInfo } from '@hooks';
import { BackToPage, MainData, ProtectedComponent } from '@layout';
import {
  courseClassDetailsReset,
  courseClassDetailsUpdateCourseClass,
} from '@redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Actions } from './Actions';
import { InfoCard } from './InfoCard';
import { Score } from './Score';

const CourseClassDetails = () => {
  const params = useParams();
  const user = useWaitUserInfo();
  const dispatch = useDispatch();
  const [courseClass, setCourseClass] = useState<
    UMApplicationCourseClassQueriesGetByIdGetByIdDto | null | undefined
  >();

  const getCourseClass = () => {
    const id = params.courseClassId;

    if (user && id) {
      setStateWithApiFallback(
        new CourseClass().getCourseClassById(id),
        setCourseClass
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(courseClassDetailsReset());
    };
  }, []);

  useEffect(() => {
    if (courseClass) {
      dispatch(courseClassDetailsUpdateCourseClass(courseClass));
    }
  }, [courseClass]);

  useEffect(() => {
    getCourseClass();
  }, [user, params]);

  return (
    <MainData data={courseClass}>
      <BackToPage
        url='/course-class'
        text='Back to course classes list'
        rightContent={
          <ProtectedComponent role='Admin' hideFallback>
            <Actions reload={getCourseClass} />
          </ProtectedComponent>
        }
      >
        <Grid rowGap='3'>
          <GridItem>
            <InfoCard />
          </GridItem>
          <GridItem>
            <ProtectedComponent roles={['Admin', 'Teacher']} hideFallback>
              <Score />
            </ProtectedComponent>
          </GridItem>
        </Grid>
      </BackToPage>
    </MainData>
  );
};

export { CourseClassDetails };
