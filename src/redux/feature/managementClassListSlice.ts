import {
  GetManagementClassData,
  GetManagementClassParams,
  GetProgramData,
} from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RetrieveData } from '@types';
import { ManagementClassListState } from '../states';

const initialState: ManagementClassListState = {
  managementClasses: [],
  programs: [],
  status: 'idle',
};

export const managementClassListSlice = createSlice({
  name: 'managementClassList',
  initialState,
  reducers: {
    ManagementClassList_Reset: (state) => {
      state.managementClasses = [];
      state.status = 'idle';
    },
    ManagementClassList_Get: (
      state,
      _: PayloadAction<GetManagementClassParams>
    ) => {
      state.status = 'loading';
    },
    ManagementClassList_Reload: (state) => {
      state.status = 'loading';
    },
    ManagementClassList_GetPrograms: () => {},
    // Private
    ManagementClassList_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetManagementClassData>>
    ) => {
      state.managementClasses = actions.payload;
      state.status = 'succeed';
    },
    ManagementClassList_SetPrograms: (
      state,
      actions: PayloadAction<RetrieveData<GetProgramData>>
    ) => {
      state.programs = actions.payload;
    },
  },
});

export const {
  ManagementClassList_Reset,
  ManagementClassList_Get,
  ManagementClassList_Reload,
  ManagementClassList_GetPrograms,
  ManagementClassList_Set,
  ManagementClassList_SetPrograms,
} = managementClassListSlice.actions;

export default managementClassListSlice.reducer;
