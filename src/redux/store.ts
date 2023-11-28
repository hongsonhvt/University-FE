import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/authSlice';
import courseClassDetailsReducer from './feature/courseClassDetailsSlice';
import courseClassListReducer from './feature/courseClassListSlice';
import courseDetailsReducer from './feature/courseDetailsSlice';
import courseListReducer from './feature/courseListSlice';
import managementClassListReducer from './feature/managementClassListSlice';
import programDetailsReducer from './feature/programDetailsSlice';
import programListReducer from './feature/programListSlice';
import {
  authMiddleware,
  courseClassDetailsMiddleware,
  courseClassListMiddleware,
  courseDetailsMiddleware,
  courseListMiddleware,
  managementClassListMiddleware,
  programDetailsMiddleware,
  programListMiddleware,
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      authMiddleware.middleware,
      courseClassDetailsMiddleware.middleware,
      courseClassListMiddleware.middleware,
      courseListMiddleware.middleware,
      courseDetailsMiddleware.middleware,
      managementClassListMiddleware.middleware,
      programListMiddleware.middleware,
      programDetailsMiddleware.middleware
    ),
});

export type RootState = ReturnType<
  () => {
    auth: AuthState;
    courseClassDetails: CourseClassDetailsState;
    courseClassList: CourseClassListState;
    courseList: CourseListState;
    courseDetails: CourseDetailsState;
    managementClassList: ManagementClassListState;
    programList: ProgramListState;
    programDetails: ProgramDetailsState;
  }
>;
