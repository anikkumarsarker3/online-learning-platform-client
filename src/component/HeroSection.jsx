import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerCover from '../assets/BannerCover.jpg'

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 mt-22 rounded-lg">
            <div className=" flex flex-col md:flex-row items-center justify-between px-6 py-20">
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug mb-6">
                        Learn <span className="text-blue-600">Modern Skills</span> <br /> and
                        Build Your Future
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg">
                        Explore our curated courses taught by top instructors and start your
                        learning journey today.
                    </p>
                    <Link
                        to="/courses"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
                    >
                        Explore Courses
                    </Link>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex justify-center mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={bannerCover}
                        alt="Learning"
                        className="w-96 rounded-2xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;