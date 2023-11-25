import { Auth } from '@api';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { User } from 'src/redux/states';
import { getUser, updateUser } from '../feature/authSlice';
import { RootState } from '../store';

export const authMiddleware = createListenerMiddleware<RootState>();

authMiddleware.startListening({
  actionCreator: getUser,
  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners();

    new Auth()
      .getMySummaryInfo()
      .then((res) => listenerApi.dispatch(updateUser(res.data.data as User)))
      .catch(() => {
        listenerApi.dispatch(updateUser(null));
      });
  },
});
