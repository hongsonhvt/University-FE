const validRoutes = [
  '/home',
  '/calendar',
  '/course',
  '/program',
  '/course-class',
  '/management-class',
  '/score',
] as const;

export type ValidRoutes = (typeof validRoutes)[number];
