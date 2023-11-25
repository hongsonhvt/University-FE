import { RoleConstantValue } from '@constants';

export type User = {
  extraData: Record<string, string> | null;
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  isMale: boolean;
  address: string | null;
  role: RoleConstantValue;
  phoneNumber: string | null;
};

export type AuthState = {
  token: string | null;
  user: User | null;
};
