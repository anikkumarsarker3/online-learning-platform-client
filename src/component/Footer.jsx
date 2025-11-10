import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-gray-300 mt-20">
            {/* Full-width background */}
            <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-3">AnikLearn</h2>
                    <p className="text-gray-400 text-sm">
                        Learn modern skills, build real-world projects, and grow your career
                        with expert instructors and practical courses.
                    </p>
                </motion.div>

                {/* Middle Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="/courses" className="hover:text-blue-400 transition">Courses</a></li>
                        <li><a href="/dashboard" className="hover:text-blue-400 transition">Dashboard</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 transition">Contact Us</a></li>
                    </ul>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Connect With Us
                    </h3>
                    <div className="flex gap-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"
                            className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://X.com" target="_blank" rel="noreferrer"
                            className="bg-sky-500 hover:bg-sky-400 text-white p-3 rounded-full transition">
                            <BsTwitterX />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                            className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"
                            className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition">
                            <FaGithub />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        📧 support@aniklearn.com <br />
                        📞 +880 1777-000000
                    </p>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
                className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">AnikLearn</span>.
                All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
