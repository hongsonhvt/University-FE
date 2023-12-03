import {
  UMApplicationCourseClassQueriesGetByIdGetByIdDto,
  UMApplicationCourseClassQueriesGetScoresGetScoresDto,
} from '@api';
import { SelectItemType } from '@models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseClassDetailsState } from '../states/courseClassDetailsState';

const initialState: CourseClassDetailsState = {
  courseClass: null,
  managementClassOptions: [],
  studentOptions: [],
  teacherOptions: [],
  scores: null,
};

export const courseClassDetailsSlice = createSlice({
  name: 'courseClassDetails',
  initialState,
  reducers: {
    courseClassDetailsReset: (state) => {
      state.courseClass = null;
      state.managementClassOptions = [];
      state.studentOptions = [];
      state.teacherOptions = [];
      state.scores = null;
    },
    courseClassDetailsUpdateCourseClass: (
      state,
      actions: PayloadAction<UMApplicationCourseClassQueriesGetByIdGetByIdDto>
    ) => {
      state.courseClass = actions.payload;
    },
    courseClassDetailsUpdateManagementClassOptions: (
      state,
      actions: PayloadAction<SelectItemType[]>
    ) => {
      state.managementClassOptions = actions.payload;
    },
    courseClassDetailsUpdateStudentOptions: (
      state,
      actions: PayloadAction<SelectItemType[]>
    ) => {
      state.studentOptions = actions.payload;
    },
    courseClassDetailsUpdateTeacherOptions: (
      state,
      actions: PayloadAction<SelectItemType[]>
    ) => {
      state.teacherOptions = actions.payload;
    },
    courseClassDetailsUpdateScores: (
      state,
      actions: PayloadAction<
        UMApplicationCourseClassQueriesGetScoresGetScoresDto[]
      >
    ) => {
      state.scores = actions.payload;
    },
    courseClassDetailsGetScores: (state) => {
      state.scores = null;
    },
  },
});

export const {
  courseClassDetailsReset,
  courseClassDetailsUpdateCourseClass,
  courseClassDetailsUpdateManagementClassOptions,
  courseClassDetailsUpdateStudentOptions,
  courseClassDetailsUpdateTeacherOptions,
  courseClassDetailsUpdateScores,
  courseClassDetailsGetScores,
} = courseClassDetailsSlice.actions;

export default courseClassDetailsSlice.reducer;
