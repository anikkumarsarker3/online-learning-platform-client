import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
import Courses from '../Pages/Courses';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import DashLayout from '../Layout/DashLayout';
import PrivateRouter from './PrivateRouter';
import Profile from '../Pages/Profile';
import CourseDetails from '../Pages/CourseDetails';
import AddCourse from '../Pages/AddCourse';
import MyEnroll from '../Pages/MyEnroll';
import MyCourse from '../Pages/MyCourse';
import UpdateCourse from '../Pages/UpdateCourse';
import ErrorPage from '../assets/ErrorPage.png'
import Loader from '../Pages/Loader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <img src={ErrorPage} alt="" className='mx-auto max-h-[500px] p-3 rounded-2xl' />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course-details/:id',
                element: <PrivateRouter>
                    <CourseDetails></CourseDetails>
                </PrivateRouter>,
            },
        ]

    },
    {
        path: '/dashboard',
        element: (
            <PrivateRouter>
                <DashLayout />
            </PrivateRouter>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'add-course',
                element: <AddCourse></AddCourse>
            },
            {
                path: 'my-enroll',
                element: <MyEnroll></MyEnroll>
            },
            {
                path: 'my-course',
                element: <MyCourse></MyCourse>
            },
            {
                path: 'update-course/:id',
                element: <UpdateCourse></UpdateCourse>
            },
        ],
    }

])