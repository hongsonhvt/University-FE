import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/authSlice';
import courseClassDetailsReducer from './feature/courseClassDetailsSlice';
import courseClassListReducer from './feature/courseClassListSlice';
import courseDetailsReducer from './feature/courseDetailsSlice';
import courseListReducer from './feature/courseListSlice';
import managementClassListReducer from './feature/managementClassListSlice';
import programDetailsReducer from './feature/programDetailsSlice';
import programListReducer from './feature/programListSlice';
import studentListReducer from './feature/studentListSlice';
import {
  authMiddleware,
  courseClassDetailsMiddleware,
  courseClassListMiddleware,
  courseDetailsMiddleware,
  courseListMiddleware,
  managementClassListMiddleware,
  programDetailsMiddleware,
  programListMiddleware,
  teacherListMiddleware,
} from './middlewares';
import {
  AuthState,
  CourseClassDetailsState,
  CourseClassListState,
  CourseDetailsState,
  CourseListState,
  ManagementClassListState,
  ProgramDetailsState,
  ProgramListState,
  StudentListState,
} from './states';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courseClassDetails: courseClassDetailsReducer,
    courseClassList: courseClassListReducer,
    courseDetails: courseDetailsReducer,
    courseList: courseListReducer,
    managementClassList: managementClassListReducer,
    programDetails: programDetailsReducer,
    programList: programListReducer,
    studentList: studentListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      authMiddleware.middleware,
      courseClassDetailsMiddleware.middleware,
      courseClassListMiddleware.middleware,
      courseDetailsMiddleware.middleware,
      courseListMiddleware.middleware,
      managementClassListMiddleware.middleware,
      programDetailsMiddleware.middleware,
      programListMiddleware.middleware,
      studentListMiddleware.middleware,
    ),
});

export type RootState = ReturnType<
  () => {
    auth: AuthState;
    courseClassDetails: CourseClassDetailsState;
    courseClassList: CourseClassListState;
    courseDetails: CourseDetailsState;
    courseList: CourseListState;
    managementClassList: ManagementClassListState;
    programDetails: ProgramDetailsState;
    programList: ProgramListState;
    studentList: StudentListState;
  }
>;
