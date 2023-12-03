import { GetCourseByIdData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type CourseDetailsState = {
  course: RetrieveData<GetCourseByIdData> | null;
  status: StatusConstantValue;
};
