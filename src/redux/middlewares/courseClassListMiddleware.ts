import { Course, CourseClass } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  CourseClassList_Get,
  CourseClassList_GetCourses,
  CourseClassList_Set,
  CourseClassList_SetCourses,
} from '../feature/courseClassListSlice';
import { CourseClassType } from '../states';
import { RootState } from '../store';

export const courseClassListMiddleware = createListenerMiddleware<RootState>();

courseClassListMiddleware.startListening({
  actionCreator: CourseClassList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new CourseClass()
      .getCourseClass(action.payload)
      .then((res) => {
        listenerApi.dispatch(
          CourseClassList_Set((res.data.data as CourseClassType[]) ?? [])
        );
      })
      .catch(() => {
        listenerApi.dispatch(CourseClassList_Set([]));
      });
  },
});

courseClassListMiddleware.startListening({
  actionCreator: CourseClassList_GetCourses,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Course()
      .getCourse()
      .then((res) => {
        listenerApi.dispatch(CourseClassList_SetCourses(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(CourseClassList_SetCourses([]));
      });
  },
});
