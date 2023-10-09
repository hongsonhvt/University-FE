import {createBrowserRouter} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Education from '../Pages/Education/Education';
import Event from '../Pages/Event/Event';
import Student from '../Pages/Student/Student';
import Professor from '../Pages/Professor/Professor';
import Course from '../Pages/Course/Course';
import Login from '../Pages/Login/Login';
import { ChakraProvider } from '@chakra-ui/react'
import StudentManage from '../Pages/StudentManage/StudentManage';
import TeacherManage from '../Pages/TeacherManage/TeacherManage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Education/>
            },
            {
                path: "event",
                element: <Event/>
            },
            {
                path: "student",
                element: <Student/>
            },
            {
                path: "professor",
                element: <Professor/>
            },
            {
                path: "course",
                element: <Course/>
            },
            
        ]
    },
    {
        path: "login",
        element:<ChakraProvider><Login/></ChakraProvider>  
    },
    {
        path: "/",
        element:<Layout/> ,
        children: [
            {
                path: "student-manage",
                element:<StudentManage/>
            },
            {
                path: "teacher-manage",
                element:<TeacherManage/>
            },

        ]
    },
])