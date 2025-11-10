import { motion } from "framer-motion";
const TopInstructors = () => {
    const instructors = [
        {
            name: "John Smith",
            image: "https://i.ibb.co/2S8pj5m/instructor1.jpg",
            role: "Full Stack Developer",
        },
        {
            name: "Sara Johnson",
            image: "https://i.ibb.co/41Wwh4p/instructor2.jpg",
            role: "Data Scientist",
        },
        {
            name: "Michael Lee",
            image: "https://i.ibb.co/Yt4wM6W/instructor3.jpg",
            role: "UI/UX Designer",
        },
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Top Instructors
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {instructors.map((inst, i) => (
                        <motion.div
                            key={i}
                            className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <img
                                src="https://i.ibb.co.com/wFVLngdz/rkwts2-B46tk-H.jpg"
                                alt={inst.name}
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                {inst.name}
                            </h3>
                            <p className="text-gray-500">{inst.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TopInstructors;