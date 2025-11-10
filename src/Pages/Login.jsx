import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { createuserByGoogle, logIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMsg("Password must have at least one uppercase, one lowercase letter, and be 6+ characters long.")
            return;
        }
        logIn(email, password)
            .then(() => {
                setSuccessMsg('Successfully Login');
                Swal.fire({
                    title: "Login successful",
                    icon: "success",
                    draggable: true
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(err => {
                setErrorMsg(err.code);
                console.log(errorMsg)
                Swal.fire({
                    icon: "error",
                    title: "Invalid Login",
                    text: errorMsg,

                });
            })
    }
    const handleGoogleLogin = () => {
        createuserByGoogle()
            .then(() => {
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(err => {
                setErrorMsg(err.message);
            })
    }

    return (

        <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-300 p-6 mt-10">

            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                    Welcome Back 👋
                    Login
                </h2>
                <form onSubmit={handleLogin} className="space-y-5">
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
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <p className="text-gray-500 underline cursor-pointer">Forget password?</p>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                {
                    successMsg ? <p className="text-green-600 mt-5">{successMsg}</p> : ''
                }
                {
                    errorMsg ? <p className="text-red-600 mt-5">{errorMsg}</p> : ''
                }

                <p className="text-center text-gray-600 mt-5">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
                <button onClick={handleGoogleLogin} className="btn mt-5 w-full bg-blue-500 hover:bg-blue-600   border-[#e5e5e5] rounded-lg">
                    <svg className="rounded-full" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    <span className="text-white">Login with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
