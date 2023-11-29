import { GetTeacherData, GetTeacherParams } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TeacherListState } from '../states';
import { RetrieveData } from '@types';

const initialState: TeacherListState = {
  teachers: [],
  status: 'idle',
};

export const teacherListSlice = createSlice({
  name: 'teacherList',
  initialState,
  reducers: {
    TeacherList_Reset: (state) => {
      state.teachers = [];
      state.status = 'idle';
    },
    TeacherList_Get: (state, _: PayloadAction<GetTeacherParams>) => {
      state.status = 'loading';
    },
    // Private
    TeacherList_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetTeacherData>>
    ) => {
      state.teachers = actions.payload;
      state.status = 'succeed';
    },
  },
});

export const { TeacherList_Reset, TeacherList_Get, TeacherList_Set } =
  teacherListSlice.actions;

export default teacherListSlice.reducer;
