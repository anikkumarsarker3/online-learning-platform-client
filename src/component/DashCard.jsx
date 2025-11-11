import React from 'react';

const DashCard = ({ course }) => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row mb-5">
                <img
                    src={course.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{course.title}</h1>
                    <h4 className='mt-3'>Category: <span className='bg-red-200 p-1 px-2 rounded-3xl'>{course.category}</span></h4>
                    <p className="py-6">
                        {course.description}
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">Start Course and Continue</button>
                </div>
            </div>
        </div>
    );
};

export default DashCard;