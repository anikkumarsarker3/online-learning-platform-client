import { motion } from "framer-motion";
import Cards from "./Cards";
import { use } from "react";
import CourseNo from '../assets/CourseNotFound.png'
const PopularCourses = ({ corusePromise }) => {
    const courses = use(corusePromise);
    return (
        <section className="bg-white py-20 px-6">
            <motion.h2
                className="text-3xl font-bold text-center text-gray-800 mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Popular Courses
            </motion.h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* import CourseNo from '../assets/CourseNotFound.png' */}
                {
                    !courses.length && <div><img src={CourseNo} alt="" /></div>
                }
                {courses.map((course, index) => (
                    <Cards key={index} course={course}></Cards>
                ))}
            </div>
        </section>
    );
};
export default PopularCourses;