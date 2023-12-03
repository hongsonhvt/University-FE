import { Course, Program } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  CourseList_Get,
  CourseList_GetPrograms,
  CourseList_Set,
  CourseList_SetPrograms,
} from '../feature/courseListSlice';
import { RootState } from '../store';

export const courseListMiddleware = createListenerMiddleware<RootState>();

courseListMiddleware.startListening({
  actionCreator: CourseList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Course()
      .getCourse(action.payload)
      .then((res) => {
        listenerApi.dispatch(CourseList_Set(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(CourseList_Set([]));
      });
  },
});

courseListMiddleware.startListening({
  actionCreator: CourseList_GetPrograms,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Program()
      .getProgram({})
      .then((res) => {
        listenerApi.dispatch(
          CourseList_SetPrograms(
            (res.data.data ?? []).map((t) => ({
              value: t.id!,
              label: t.name!,
            }))
          )
        );
      })
      .catch(() => {
        listenerApi.dispatch(CourseList_SetPrograms([]));
      });
  },
});
