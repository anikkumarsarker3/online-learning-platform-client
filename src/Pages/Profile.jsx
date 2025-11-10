import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className='mt-20'>
            <div className=" bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    {
                        console.log(user.photoURL)
                    }
                    <img
                        src={user?.photoURL}
                        className=" rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
                        <h1 className="text-2xl font-bold">Email: {user.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;