import { GetStudentData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type StudentListState = {
  students: RetrieveData<GetStudentData>;
  status: StatusConstantValue;
};
