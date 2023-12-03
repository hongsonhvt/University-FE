import { GetCourseData } from '@api';
import { StatusConstantValue } from '@constants';
import { SelectItemType } from '@models';
import { RetrieveData } from '@types';

export type CourseListState = {
  courses: RetrieveData<GetCourseData>;
  programOptions: readonly SelectItemType[];
  status: StatusConstantValue;
};
