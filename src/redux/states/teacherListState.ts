import { GetTeacherData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type TeacherListState = {
  teachers: RetrieveData<GetTeacherData>;
  status: StatusConstantValue;
};
