import { GetProgramData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type ProgramListState = {
  programs: RetrieveData<GetProgramData>;
  status: StatusConstantValue;
};
