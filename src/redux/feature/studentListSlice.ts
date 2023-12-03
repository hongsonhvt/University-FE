import { GetStudentData, GetStudentParams } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StudentListState } from '../states';
import { RetrieveData } from '@types';

const initialState: StudentListState = {
  students: [],
  status: 'idle',
};

export const studentListSlice = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    StudentList_Reset: (state) => {
      state.students = [];
      state.status = 'idle';
    },
    StudentList_Get: (state, _: PayloadAction<GetStudentParams>) => {
      state.status = 'loading';
    },
    // Private
    StudentList_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetStudentData>>
    ) => {
      state.students = actions.payload;
      state.status = 'succeed';
    },
  },
});

export const { StudentList_Reset, StudentList_Get, StudentList_Set } =
  studentListSlice.actions;

export default studentListSlice.reducer;
