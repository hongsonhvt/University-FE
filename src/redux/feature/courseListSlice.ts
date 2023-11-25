import { GetCourseData, GetCourseParams } from '@api';
import { SelectItemType } from '@models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RetrieveData } from '@types';
import { CourseListState } from '../states';

const initialState: CourseListState = {
  courses: [],
  programOptions: [],
  status: 'idle',
};

export const courseListSlice = createSlice({
  name: 'courseList',
  initialState,
  reducers: {
    CourseList_Reset: (state) => {
      state.courses = [];
      state.status = 'idle';
    },
    CourseList_Get: (state, _: PayloadAction<GetCourseParams>) => {
      state.status = 'loading';
    },
    CourseList_GetPrograms: () => {},
    // Private
    CourseList_Set: (
      state,
      actions: PayloadAction<RetrieveData<GetCourseData>>
    ) => {
      state.courses = actions.payload;
      state.status = 'succeed';
    },
    CourseList_SetPrograms: (
      state,
      actions: PayloadAction<SelectItemType[]>
    ) => {
      state.programOptions = actions.payload;
    },
  },
});

export const {
  CourseList_Reset,
  CourseList_Get,
  CourseList_GetPrograms,
  CourseList_Set,
  CourseList_SetPrograms,
} = courseListSlice.actions;

export default courseListSlice.reducer;
