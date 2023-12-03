import { GetCourseClassParams, GetCourseData, UMApplicationCourseQueriesGetAllGetAllDto } from '@api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseClassListState, CourseClassType } from '../states';

const initialState: CourseClassListState = {
  courseClasses: [],
  courses: [],
  status: 'idle',
};

export const courseClassListSlice = createSlice({
  name: 'courseClassList',
  initialState,
  reducers: {
    CourseClassList_Reset: (state) => {
      state.courseClasses = [];
      state.status = 'idle';
    },
    CourseClassList_Get: (state, _: PayloadAction<GetCourseClassParams>) => {
      state.status = 'loading';
    },
    CourseClassList_GetCourses: () => {},
    // Private
    CourseClassList_Set: (state, actions: PayloadAction<CourseClassType[]>) => {
      state.courseClasses = actions.payload;
      state.status = 'succeed';
    },
    CourseClassList_SetCourses: (
      state,
      actions: PayloadAction<UMApplicationCourseQueriesGetAllGetAllDto[]>
    ) => {
      state.courses = actions.payload;
    },
  },
});

export const {
  CourseClassList_Reset,
  CourseClassList_Get,
  CourseClassList_GetCourses,
  CourseClassList_Set,
  CourseClassList_SetCourses,
} = courseClassListSlice.actions;

export default courseClassListSlice.reducer;
