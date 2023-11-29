import { Teacher } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { TeacherList_Get, TeacherList_Set } from '../feature/teacherListSlice';
import { RootState } from '../store';

export const teacherListMiddleware = createListenerMiddleware<RootState>();

teacherListMiddleware.startListening({
  actionCreator: TeacherList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Teacher()
      .getTeacher(action.payload)
      .then((res) => {
        listenerApi.dispatch(TeacherList_Set(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(TeacherList_Set([]));
      });
  },
});
