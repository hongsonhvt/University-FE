import { Course } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  CourseDetails_Get,
  CourseDetails_Reload,
  CourseDetails_Set,
} from '../feature/courseDetailsSlice';
import { RootState } from '../store';

export const courseDetailsMiddleware = createListenerMiddleware<RootState>();

courseDetailsMiddleware.startListening({
  actionCreator: CourseDetails_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Course()
      .getCourseById(action.payload)
      .then((res) => {
        listenerApi.dispatch(CourseDetails_Set(res.data.data ?? null));
      })
      .catch(() => {
        listenerApi.dispatch(CourseDetails_Set(null));
      });
  },
});

courseDetailsMiddleware.startListening({
  actionCreator: CourseDetails_Reload,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    const courseId = listenerApi.getState().courseDetails.course?.id;

    if (!courseId) return;

    new Course()
      .getCourseById(courseId)
      .then((res) => {
        listenerApi.dispatch(CourseDetails_Set(res.data.data ?? null));
      })
      .catch(() => {
        listenerApi.dispatch(CourseDetails_Set(null));
      });
  },
});
