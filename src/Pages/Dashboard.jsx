import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import DashCard from '../component/DashCard';
const Dashboard = () => {
    const { user, loading } = use(AuthContext)
    const [courses, setCourses] = useState(null)
    useEffect(() => {
        fetch(`https://learning-platform-server-theta.vercel.app/enroll/?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [user])
    if (!courses || loading || !user) {
        return <p className='mt-22'>Loading..</p>
    }
    return (
        <div className='mt-22 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-center my-3 '>Welcome to <span className='text-blue-600'>Technic Academy</span></h1>
            <h3 className=' text-4xl font-bold text-center mb-5 underline' >{user?.displayName}</h3>
            <h3 className='text-3xl font-bold  mb-5' >My Running course:</h3>
            {
                !courses.length && <h2 className='text-center text-6xl text-gray-400 my-10'>No available Course</h2>
            }
            {
                courses.map(course => <DashCard key={course._id} course={course}></DashCard>)
            }

        </div>
    );
};

export default Dashboard;