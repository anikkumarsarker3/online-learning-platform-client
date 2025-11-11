import React, { Suspense, use, useEffect, useState } from 'react';
import Cards from '../component/Cards';
import { AuthContext } from '../Context/AuthContext';
import CourseNo from '../assets/CourseNotFound.png'
import { Link } from 'react-router';


const Courses = () => {
    const { user, loading } = use(AuthContext)
    const [allCourses, setAllCourses] = useState(null);
    const [courses, setCourses] = useState(null);
    const [category, setCategory] = useState("");
    useEffect(() => {
        if (!loading && user?.accessToken) {
            fetch(`https://learning-platform-server-theta.vercel.app/courses`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            })
                .then(res => res.json())
                .then(data => setAllCourses(data))
                .catch(err => console.error("Fetch error:", err));
        }
    }, [user, loading]);

    useEffect(() => {
        if (category === "") {
            setCourses(allCourses);
        } else if (Array.isArray(allCourses)) {
            const filtered = allCourses.filter(
                (course) => course.category === category
            );
            setCourses([...filtered]);
        }
    }, [allCourses, category]);


    if (!allCourses || loading || !courses) {
        return <div className='mt-22 max-w-7xl '>
            {/* <p>Loading...ppp</p> */}
            <div>
                <img src={CourseNo} alt="" className='mx-auto w-72 sm:w-1/2' />
                <Link to='/login'>
                    <h1 className='text-center text-3xl font-semibold underline text-blue-600'>Please Login</h1>
                </Link>
            </div>
        </div>
    }

    console.log(courses)
    return (
        <div className='mt-22 max-w-7xl '>
            <h1 className='text-center text-4xl font-bold my-5'>All Courses</h1>
            <div class="sm:w-1/3 text-center mx-auto p-2">
                <select
                    id="category"
                    name="category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    class="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-blue-500"
                >
                    <option value="">Search by category...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="AI/ML">AI / ML</option>
                    <option value="Design">Design</option>
                    <option value="Programming">Programming</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Security">Security</option>
                </select>


            </div>
            {
                !courses.length ?
                    <div className='max-w-7xl '>
                        <div><img src={CourseNo} alt="" className='mx-auto w-72 sm:w-1/2' /></div>
                    </div> : <div className='mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2'>
                        <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
                            {
                                courses.map(course => <Cards key={course._id} course={course}></Cards>)
                            }
                        </Suspense>

                    </div >

            }

        </div>
    );
};

export default Courses;