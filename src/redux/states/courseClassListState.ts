import {
  UMApplicationCourseQueriesGetAllGetAllDto,
  UMDomainDtosCourseClassICourseClass,
} from '@api';
import { StatusConstantValue } from '@constants';

export type CourseClassType = UMDomainDtosCourseClassICourseClass & {
  teacher: {
    id: string;
    teacherId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    isMale: boolean;
  };
  course: {
    id: string;
    name: string;
    courseId: string;
  };
};

export type CourseClassListState = {
  courseClasses: CourseClassType[];
  courses: UMApplicationCourseQueriesGetAllGetAllDto[];
  status: StatusConstantValue;
};
