import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import MyCourseCard from '../component/MyCourseCard';
import CourseNo from '../assets/CourseNotFound.png'

const MyCourse = () => {
    const { user, loading } = use(AuthContext)
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        if (!loading && user?.accessToken) {
            fetch(`https://learning-platform-server-theta.vercel.app/courses/?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            })
                .then(res => res.json())
                .then(data => setCourses(data))
                .catch(err => console.error("Fetch error:", err));
        }
    }, [user, loading]);
    if (courses == null || loading) {
        return <p>Loading...</p>
    }
    return (
        <div className='mt-22'>
            {
                !courses.length && <div><img src={CourseNo} alt="" className='mx-auto w-72 sm:w-1/2' /></div>
            }
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    courses.map(course => <MyCourseCard course={course}></MyCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyCourse;