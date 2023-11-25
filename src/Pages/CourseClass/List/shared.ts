import { UMDomainDtosCourseClassICourseClass } from '@api';

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
