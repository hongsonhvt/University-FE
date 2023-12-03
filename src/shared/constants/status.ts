export const StatusConstant = {
  idle: 'idle',
  loading: 'loading',
  succeed: 'succeed',
  error: 'error',
} as const;

export type StatusConstantValue =
  (typeof StatusConstant)[keyof typeof StatusConstant];
