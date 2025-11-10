import { motion } from "framer-motion";
import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const [errorMsg, setErrorMsg] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();
    const { createuser, updateElement } = use(AuthContext)
    const handleRegitration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);
        const profile = {
            displayName: name,
            photoURL: photo,
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMsg("Password must have at least one uppercase, one lowercase letter, and be 6+ characters long.")
            return;
        }
        createuser(email, password)
            .then(() => {
                updateElement(profile)
                    .then(() => {
                    })
                    .catch(err => {
                        setErrorMsg(err.message);
                    })
                Swal.fire({
                    title: "Regitration and Login Successful",
                    icon: "success",
                    draggable: true
                });
                navigate('/');
            })
            .catch(err => {
                setErrorMsg(err.message);
            })


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-300  p-6 mt-18">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                    Create Account 🚀
                </h2>
                <form onSubmit={handleRegitration} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                            Photo-URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="http://photo.png"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>
                {
                    errorMsg && <p className="text-red-500 font-medium mt-5">{errorMsg}</p>
                }

                <p className="text-center text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
                <button className="btn mt-5 w-full bg-blue-500 hover:bg-blue-600  text-black border-[#e5e5e5] rounded-lg">
                    <svg className="rounded-full" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    <span className="text-white">Login with Google</span>
                </button>
            </motion.div>
        </div>
    );
};

export default Register;
