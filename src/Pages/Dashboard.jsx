import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Dashboard = () => {
    const { user } = use(AuthContext)
    if (!user) {
        return <p>Loading...</p>
    }
    return (
        <div className='mt-22 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-center my-3 '>Welcome to <span className='text-blue-600'>Technic Academy</span></h1>
            <h3 className=' text-4xl font-bold text-center mb-5 underline' >{user?.displayName}</h3>
            <h3 className='text-3xl font-bold  mb-5' >My Enroll course:</h3>
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">Start Course and Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;