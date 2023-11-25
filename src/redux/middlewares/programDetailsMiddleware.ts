import { Program } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  ProgramDetails_Get,
  ProgramDetails_Reload,
  ProgramDetails_Set,
} from '../feature/programDetailsSlice';
import { RootState } from '../store';

export const programDetailsMiddleware = createListenerMiddleware<RootState>();

programDetailsMiddleware.startListening({
  actionCreator: ProgramDetails_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Program()
      .getProgramById(action.payload)
      .then((res) => {
        listenerApi.dispatch(ProgramDetails_Set(res.data.data ?? null));
      })
      .catch(() => {
        listenerApi.dispatch(ProgramDetails_Set(null));
      });
  },
});

programDetailsMiddleware.startListening({
  actionCreator: ProgramDetails_Reload,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    const programId = listenerApi.getState().programDetails.program?.id;

    if (!programId) return;

    new Program()
      .getProgramById(programId)
      .then((res) => {
        listenerApi.dispatch(ProgramDetails_Set(res.data.data ?? null));
      })
      .catch(() => {
        listenerApi.dispatch(ProgramDetails_Set(null));
      });
  },
});
