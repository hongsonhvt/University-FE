import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/authSlice';
import courseClassDetailsReducer from './feature/courseClassDetailsSlice';
import courseClassListReducer from './feature/courseClassListSlice';
import programDetailsReducer from './feature/programDetailsSlice';
import programListReducer from './feature/programListSlice';
import courseDetailsReducer from './feature/courseDetailsSlice';
import courseListReducer from './feature/courseListSlice';
import {
  authMiddleware,
  courseClassDetailsMiddleware,
  courseClassListMiddleware,
  courseDetailsMiddleware,
  courseListMiddleware,
  programDetailsMiddleware,
  programListMiddleware,
} from './middlewares';
import {
  AuthState,
  CourseClassDetailsState,
  CourseClassListState,
  CourseDetailsState,
  CourseListState,
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
    programList: ProgramListState;
    programDetails: ProgramDetailsState;
  }
>;
