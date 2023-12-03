import { Program, ManagementClass } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  ManagementClassList_Get,
  ManagementClassList_GetPrograms,
  ManagementClassList_Reload,
  ManagementClassList_Set,
  ManagementClassList_SetPrograms,
} from '../feature/managementClassListSlice';
import { RootState } from '../store';

export const managementClassListMiddleware =
  createListenerMiddleware<RootState>();

managementClassListMiddleware.startListening({
  actionCreator: ManagementClassList_Get,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new ManagementClass()
      .getManagementClass(action.payload)
      .then((res) => {
        listenerApi.dispatch(ManagementClassList_Set(res.data.data ?? []));
      })
      .catch(() => {
        listenerApi.dispatch(ManagementClassList_Set([]));
      });
  },
});

managementClassListMiddleware.startListening({
  actionCreator: ManagementClassList_Reload,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    listenerApi.dispatch(ManagementClassList_Get({}));
  },
});

managementClassListMiddleware.startListening({
  actionCreator: ManagementClassList_GetPrograms,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Program()
      .getProgram({})
      .then((res) => {
        listenerApi.dispatch(
          ManagementClassList_SetPrograms(res.data.data ?? [])
        );
      })
      .catch(() => {
        listenerApi.dispatch(ManagementClassList_SetPrograms([]));
      });
  },
});
