import { UMApplicationCommonModelsError } from '@api';
import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';

export async function setStateWithApiFallback<
  S,
  R extends {
    data?: S;
    errors?: UMApplicationCommonModelsError[] | null;
    success?: boolean;
  },
  D,
>(
  apiCall: Promise<AxiosResponse<R>>,
  setter: Dispatch<SetStateAction<S | null | undefined>>
): Promise<void>;

export async function setStateWithApiFallback<
  S,
  R extends {
    data?: S[];
    errors?: UMApplicationCommonModelsError[] | null;
    success?: boolean;
  },
>(
  apiCall: Promise<AxiosResponse<R>>,
  setter: Dispatch<SetStateAction<S[] | undefined>>,
  defaultValue: S[]
): Promise<void>;

export async function setStateWithApiFallback<
  S,
  R extends {
    data?: S;
    errors?: UMApplicationCommonModelsError[] | null;
    success?: boolean;
  },
>(
  apiCall: Promise<AxiosResponse<R>>,
  setter: Dispatch<SetStateAction<S | null | undefined>>,
  defaultValue: any = null
): Promise<void> {
  try {
    const res = await apiCall;
    setter(res.data.data);
  } catch {
    if (true) {
      setter(defaultValue);
    }
  }
}
