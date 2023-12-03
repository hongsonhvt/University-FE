import { UMApplicationCourseClassQueriesGetByIdGetByIdDto } from '@api';

export type DetailsButtonProps = {
  close: () => void;
  reload?: () => void;
  courseClass: UMApplicationCourseClassQueriesGetByIdGetByIdDto;
};
