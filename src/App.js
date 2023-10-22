import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Pages/Login/Login";
import Layout from "./Layout/Layout";
import Education from "./Pages/Education/Education";
import Event from "./Pages/Event/Event";
import Student from "./Pages/Student/Student";
import Professor from "./Pages/Professor/Professor";
import StudentManage from "./Pages/StudentManage/StudentManage";
import TeacherManage from "./Pages/TeacherManage/TeacherManage";
import CourseManage from "./Pages/CourseManage/CourseManage";
import Course from "./Pages/Course/Course";
import EventTeacher from "./Pages/EventTeacher/EventTeacher";
import Teacher from "./Pages/Teacher/Teacher";
import CourseTeacher from "./Pages/CourseTeacher/CourseTeacher";
import { useEffect } from "react";
import axios from "axios";
import { updateToken } from "./redux/feature/tokenSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "./redux/feature/useSlice";

// import PermissionPage from "./Pages/PermissionPage/PermissionPage";
// import Course from "./Pages/Course/Course";
import EventManage from "./Pages/EventManage/EventManage";
import ProgramManage from "./Pages/ProgramManage/ProgramManage";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((store) => store.user.role);
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
          element: <Event />,
          element:
            role === "Student" ? <Event /> : <Navigate to={"/event"} />,
        },
        {
          path: "student",
          element: <Student />,
          element:
            role === "Student" ? <Student /> : <Navigate to={"/student"} />,
        },
        {
          path: "professor",
          element: <Professor />,
          element:
            role === "Student" ? (
              <Professor />
            ) : (
              <Navigate to={"/professor"} />
            ),
        },
        {
          path: "course",
          element: <Course />,
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
          element: <EventManage />,
          element:
            role === "Admin" ? (
              <EventManage />
            ) : (
              <Navigate to={"/event-manage"} />
            ),
        },
        {
          path: "course-manage",
          element: <CourseManage />,
          element:
            role === "Admin" ? (
              <CourseManage />
            ) : (
              <Navigate to={"/course-manage"} />
            ),
        },
        {
          path: "program-manage",
          element: <ProgramManage />,
          element:
            role === "Admin" ? (
              <ProgramManage />
            ) : (
              <Navigate to={"/program-manage"} />
            ),
        },

        // roll teacher

        {
          path: "event-teacher",
          element: <EventTeacher />,
          element:
            role === "Teacher" ? (
              <EventTeacher />
            ) : (
              <Navigate to={"/EventTeacher"} />
            ),
        },
        {
          path: "teacher",
          element: <Teacher />,
          element:
            role === "Teacher" ? <Teacher /> : <Navigate to={"/teacher"} />,
        },

        {
          path: "course-teacher",
          element: <CourseTeacher />,
          element:
            role === "Teacher" ? (
              <CourseTeacher />
            ) : (
              <Navigate to={"/course-teacher"} />
            ),
        },
      ],
    },
    // {
    //     path:"/login",
    //     element: <loginPage/>
    // }
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
