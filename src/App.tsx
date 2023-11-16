import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ClassManage from "./Pages/ClassManage/ClassManage";
import Course from "./Pages/Course/Course";
import CourseManage from "./Pages/CourseManage/CourseManage";
import CourseTeacher from "./Pages/CourseTeacher/CourseTeacher";
import Education from "./Pages/Education/Education";
import Event from "./Pages/Event/Event";
import EventManage from "./Pages/EventManage/EventManage";
import EventTeacher from "./Pages/EventTeacher/EventTeacher";
import Login from "./Pages/Login/Login";
import Professor from "./Pages/Professor/Professor";
import ProgramManage from "./Pages/ProgramManage/ProgramManage";
import Student from "./Pages/Student/Student";
import StudentManage from "./Pages/StudentManage/StudentManage";
import Teacher from "./Pages/Teacher/Teacher";
import TeacherManage from "./Pages/TeacherManage/TeacherManage";
import { updateToken } from "./redux/feature/tokenSlice";
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const role = useSelector((store: RootState) => store.user.role);
  dispatch(updateToken(localStorage.getItem("token") ?? ""));

  console.log("role", role);
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to={"login"} />,
    },
    {
      path: "login",
      element: (
        <ChakraProvider>
          <Login />
        </ChakraProvider>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "event",
          element:
            role === "Student" ? <Event /> : <Navigate to={"/event"} />,
        },
        {
          path: "student",
          element:
            role === "Student" ? <Student /> : <Navigate to={"/student"} />,
        },
        {
          path: "professor",
          element:
            role === "Student" ? (
              <Professor />
            ) : (
              <Navigate to={"/professor"} />
            ),
        },
        {
          path: "course",
          element:
            role === "Student" ? <Course /> : <Navigate to={"/course"} />,
        },
        // {
        //     path: "course",
        //     element: <Course/>
        // },
        {
          path: "student-manage",
          element:
            role === "Admin" ? (
              <StudentManage />
            ) : (
              <Navigate to={"/student-manage"} />
            ),
        },
        {
          path: "teacher-manage",

          element:
            role === "Admin" ? (
              <TeacherManage />
            ) : (
              <Navigate to={"/teacher-manage"} />
            ),
        },
        {
          path: "event-manage",
          element:
            role === "Admin" ? (
              <EventManage />
            ) : (
              <Navigate to={"/event-manage"} />
            ),
        },
        {
          path: "course-manage",
          element:
            role === "Admin" ? (
              <CourseManage />
            ) : (
              <Navigate to={"/course-manage"} />
            ),
        },
        {
          path: "program-manage",
          element:
            role === "Admin" ? (
              <ProgramManage />
            ) : (
              <Navigate to={"/program-manage"} />
            ),
        },
        {
          path: "class-manage",
          element:
            role === "Admin" ? (
              <ClassManage />
            ) : (
              <Navigate to={"/class-manage"} />
            ),
        },

        // roll teacher

        {
          path: "event-teacher",
          element:
            role === "Teacher" ? (
              <EventTeacher />
            ) : (
              <Navigate to={"/EventTeacher"} />
            ),
        },
        {
          path: "teacher",
          element:
            role === "Teacher" ? <Teacher /> : <Navigate to={"/teacher"} />,
        },

        {
          path: "course-teacher",
          element:
            role === "Teacher" ? (
              <CourseTeacher />
            ) : (
              <Navigate to={"/course-teacher"} />
            ),
        },
      ],
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
