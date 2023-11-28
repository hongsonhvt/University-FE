import { GetManagementClassData, GetProgramData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type ManagementClassListState = {
  managementClasses: RetrieveData<GetManagementClassData>;
  programs: RetrieveData<GetProgramData>;
  status: StatusConstantValue;
};
