import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
const MyCourseCard = ({ course }) => {
    const navigate = useNavigate()
    const handleDeleteCourse = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://learning-platform-server-theta.vercel.app/courses/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "No deleted",
                                text: "Your file has been deleted.",
                                icon: "error"
                            });
                        }
                    })

                window.location.reload()
            }


        });

    }
    return (
        <div>
            <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl "
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-52 object-cover"
                />
                <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">{course.category}</p>
                    <p className="text-blue-600 font-bold text-lg mb-3">
                        ${course.price}
                    </p>
                    <div className='flex justify-between items-center gap-5'>

                        <button onClick={() => navigate(`/course-details/${course._id}`)} className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                            View
                        </button>
                        <button onClick={() => navigate(`/dashboard/update-course/${course._id}`)} className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                            Update
                        </button>
                        <button onClick={() => handleDeleteCourse(course._id)} className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                            Delete
                        </button>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default MyCourseCard;