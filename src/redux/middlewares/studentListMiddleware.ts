import { Student } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { StudentList_Get, StudentList_Set } from '../feature/studentListSlice';
import { RootState } from '../store';

export const studentListMiddleware = createListenerMiddleware<RootState>();

studentListMiddleware.startListening({
  actionCreator: StudentList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Student()
      .getStudent(action.payload)
      .then((res) => {
        listenerApi.dispatch(StudentList_Set(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(StudentList_Set([]));
      });
  },
});
