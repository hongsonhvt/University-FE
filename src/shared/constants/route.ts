const validRoutes = [
  '/home',
  '/calendar',
  '/course',
  '/program',
  '/course-class',
  '/management-class',
  '/score',
  '/student',
  '/teacher',
] as const;

export type ValidRoutes = (typeof validRoutes)[number];
