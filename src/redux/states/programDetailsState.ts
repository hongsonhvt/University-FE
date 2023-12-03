import { GetProgramByIdData } from '@api';
import { StatusConstantValue } from '@constants';
import { RetrieveData } from '@types';

export type ProgramDetailsState = {
  program: RetrieveData<GetProgramByIdData> | null;
  status: StatusConstantValue;
};
