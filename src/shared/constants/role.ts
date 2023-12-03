export const RoleConstant = {
  admin: 'Admin',
  teacher: 'Teacher',
  student: 'Student',
} as const;

export type RoleConstantValue =
  (typeof RoleConstant)[keyof typeof RoleConstant];
