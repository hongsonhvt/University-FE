import { GetProgramByIdData } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RetrieveData } from '@types';
import { ProgramDetailsState } from '../states';

const initialState: ProgramDetailsState = {
  program: null,
  status: 'idle',
};

export const programDetailsSlice = createSlice({
  name: 'programDetails',
  initialState,
  reducers: {
    ProgramDetails_Reset: (state) => {
      state.program = null;
      state.status = 'idle';
    },
    ProgramDetails_Get: (state, _: PayloadAction<string>) => {
      state.status = 'loading';
    },
    ProgramDetails_Reload: (state) => {
      state.status = 'loading';
    },
    // Private
    ProgramDetails_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetProgramByIdData> | null>
    ) => {
      state.program = actions.payload ?? null;
      state.status = 'succeed';
    },
  },
});

export const {
  ProgramDetails_Reset,
  ProgramDetails_Get,
  ProgramDetails_Reload,
  ProgramDetails_Set,
} = programDetailsSlice.actions;

export default programDetailsSlice.reducer;
