import { RootState } from '@redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function useWaitUserInfo(callback?: () => void | Promise<void>) {
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    if (user) {
      callback?.();
    }
  }, [user?.id]);

  return user;
}
