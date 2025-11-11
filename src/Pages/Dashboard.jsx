import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Dashboard = () => {
    const { user, loading } = use(AuthContext)
    const [enCourse, setEnCourse] = useState(null)
    useEffect(() => {
        fetch(`https://learning-platform-server-theta.vercel.app/enroll/?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => setEnCourse(data))
    }, [user])
    if (!enCourse || loading) {
        return <p>Loading..</p>
    }
    if (!user) {
        return <p>Loading...</p>
    }
    return (
        <div className='mt-22 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-center my-3 '>Welcome to <span className='text-blue-600'>Technic Academy</span></h1>
            <h3 className=' text-4xl font-bold text-center mb-5 underline' >{user?.displayName}</h3>
            <h3 className='text-3xl font-bold  mb-5' >My Running course:</h3>

        </div>
    );
};

export default Dashboard;