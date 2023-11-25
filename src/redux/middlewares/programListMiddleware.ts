import { Program } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { ProgramList_Get, ProgramList_Set } from '../feature/programListSlice';
import { RootState } from '../store';

export const programListMiddleware = createListenerMiddleware<RootState>();

programListMiddleware.startListening({
  actionCreator: ProgramList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Program()
      .getProgram(action.payload)
      .then((res) => {
        listenerApi.dispatch(ProgramList_Set(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(ProgramList_Set([]));
      });
  },
});
