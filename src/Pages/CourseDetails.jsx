import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import ErrorPage from '../assets/ErrorPage.png'

const CourseDetails = () => {
    const navigate = useNavigate()
    const { user, loading } = use(AuthContext);
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`https://learning-platform-server-theta.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])
    if (!course || loading) {
        return <p className='mt-22'><img src={ErrorPage} alt="" className='mx-auto max-h-[500px] p-3 rounded-2xl' /></p>
    }
    const { title, image, price, duration, category, description, created_by } = course;
    const handleEnrollCourse = () => {
        fetch(`https://learning-platform-server-theta.vercel.app/course/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                field: "enroll_count",
                value: 1
            }),
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Enroll successful,check Dashoard and Continue the course",
                        icon: "success",
                        draggable: true
                    });
                    navigate("/dashboard");
                }

            })


        const newEnroll = {
            course_id: course._id,
            title,
            image,
            price,
            duration,
            category,
            description,
            created_by,
            enroll_by: user.email
        }

        fetch('https://learning-platform-server-theta.vercel.app/enroll', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEnroll),
        })
    }


    return (
        <div className='mt-20'>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-7">
                    <img
                        src={image}

                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="mt-3 text-blue-700 font-bold"> Catagory:  <span className='bg-blue-200 p-1 px-2 rounded-xl text-sm text-black border border-amber-300 ml-1'> {category}</span>
                        </p>
                        <p className="mt-3 text-blue-700 font-bold"> Price:  <span className='text-black'>{price} $</span>
                        </p>
                        <p className="mt-3 text-blue-700 font-bold"> Duration: <span className='text-black'>{duration}</span>
                        </p>

                        <p className="my-3">
                            <p className='font-bold '>Description:</p>
                            {description}
                        </p>
                        <button onClick={handleEnrollCourse} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;