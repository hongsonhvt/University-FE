import { GetProgramData, GetProgramParams } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProgramListState } from '../states';
import { RetrieveData } from '@types';

const initialState: ProgramListState = {
  programs: [],
  status: 'idle',
};

export const programListSlice = createSlice({
  name: 'programList',
  initialState,
  reducers: {
    ProgramList_Reset: (state) => {
      state.programs = [];
      state.status = 'idle';
    },
    ProgramList_Get: (state, _: PayloadAction<GetProgramParams>) => {
      state.status = 'loading';
    },
    // Private
    ProgramList_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetProgramData>>
    ) => {
      state.programs = actions.payload;
      state.status = 'succeed';
    },
  },
});

export const { ProgramList_Reset, ProgramList_Get, ProgramList_Set } =
  programListSlice.actions;

export default programListSlice.reducer;
