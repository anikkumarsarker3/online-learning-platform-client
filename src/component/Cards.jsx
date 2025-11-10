import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router';
const Cards = ({ course }) => {
    const navigate = useNavigate()
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
                    <button onClick={() => navigate(`/course-details/${course._id}`)} className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                        View
                    </button>
                </div>
            </motion.div>

        </div>
    );
};

export default Cards;