import { ChakraProvider } from '@chakra-ui/react';
import { RoleConstant, RoleConstantValue, ValidRoutes } from '@constants';
import { Layout, ProtectedComponent } from '@layout';
import { SideBarItem } from '@models';
import { IconType } from 'react-icons';
import {
  AiFillBook,
  AiFillCalendar,
  AiFillGold,
  AiFillHome,
} from 'react-icons/ai';
import { PiExamFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { Navigate, RouteObject } from 'react-router-dom';
import { Calendar } from 'src/Pages/Calendar/Calendar';
import { CourseDetails } from 'src/Pages/Course/Details';
import { CourseList } from 'src/Pages/Course/List';
import { CourseClassDetails } from 'src/Pages/CourseClass/Details';
import { CourseClassList } from 'src/Pages/CourseClass/List';
import { Home } from 'src/Pages/Home/Home';
import { Login } from 'src/Pages/Login/Login';
import { ManagementClassDetails } from 'src/Pages/ManagementClass/Details';
import { ManagementClassList } from 'src/Pages/ManagementClass/List';
import { PersonalInformation } from 'src/Pages/PersonalInformation/PersonalInformation';
import { ProgramDetails } from 'src/Pages/Program/Details';
import { ProgramList } from 'src/Pages/Program/List';
import { Score } from 'src/Pages/Score/Score';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to='login' />,
  },
  {
    path: 'login',
    element: (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'course',
        children: [
          {
            path: '',
            element: (
              <ProtectedComponent role='Admin'>
                <CourseList />
              </ProtectedComponent>
            ),
          },
          {
            path: ':courseId',
            element: <CourseDetails />,
          },
        ],
      },
      {
        path: 'program',
        children: [
          {
            path: '',
            element: (
              <ProtectedComponent role='Admin'>
                <ProgramList />
              </ProtectedComponent>
            ),
          },
          {
            path: ':programId',
            element: <ProgramDetails />,
          },
        ],
      },
      {
        path: 'management-class',
        element: <ProtectedComponent role='Admin' />,
        children: [
          {
            path: '',
            element: <ManagementClassList />,
          },
          {
            path: ':managementClassId',
            element: <ManagementClassDetails />,
          },
        ],
      },
      {
        path: 'course-class',
        children: [
          {
            path: '',
            element: <CourseClassList />,
          },
          {
            path: ':courseClassId',
            element: <CourseClassDetails />,
          },
        ],
      },
      {
        path: 'me',
        element: <PersonalInformation />,
      },
      {
        path: 'score',
        element: (
          <ProtectedComponent role='Student'>
            <Score />
          </ProtectedComponent>
        ),
      },
    ],
  },
];

export const routesByRole: Record<RoleConstantValue, SideBarItem[]> = {
  [RoleConstant.admin]: [
    { name: 'Home', url: '/home' },
    { name: 'Calendar', url: '/calendar' },
    { name: 'Program', url: '/program' },
    { name: 'Course', url: '/course' },
    { name: 'Course class', url: '/course-class' },
    { name: 'Management class', url: '/management-class' },
  ],
  [RoleConstant.student]: [
    { name: 'Home', url: '/home' },
    { name: 'Calendar', url: '/calendar' },
    { name: 'Course class', url: '/course-class' },
    { name: 'Score', url: '/score' },
  ],
  [RoleConstant.teacher]: [
    { name: 'Home', url: '/home' },
    { name: 'Calendar', url: '/calendar' },
    { name: 'Course class', url: '/course-class' },
  ],
};

export const routeIcon: Record<ValidRoutes, IconType> = {
  '/home': AiFillHome,
  '/calendar': AiFillCalendar,
  '/course': AiFillGold,
  '/program': AiFillBook,
  '/management-class': SiGoogleclassroom,
  '/course-class': SiGoogleclassroom,
  '/score': PiExamFill,
};
