import { motion } from "framer-motion";
const WhyChooseUs = () => {
    const reasons = [
        { title: "Expert Instructors", text: "Learn from industry professionals." },
        { title: "Flexible Learning", text: "Study anytime, anywhere at your pace." },
        { title: "Career Support", text: "Get guidance to land your dream job." },
    ];

    return (
        <section className="max-w-7xl mx-auto bg-blue-50 py-20 px-6">
            <div className="text-center">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Why Choose Us
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUs;