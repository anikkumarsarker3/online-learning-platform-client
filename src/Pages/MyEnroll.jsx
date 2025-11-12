import React, { use, useEffect, useState } from 'react';
import TableRow from './TableRow';
import { AuthContext } from '../Context/AuthContext';
import EmptyEnRoll from '../assets/emptyEnroll.jpg'
const MyEnroll = () => {
    const { user, loading } = use(AuthContext)

    const [enCourse, setEnCourse] = useState(null)
    useEffect(() => {
        fetch(`https://learning-platform-server-theta.vercel.app/enroll/?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => setEnCourse(data))
    }, [user])
    if (!enCourse || loading) {
        return <p className='mt-24 text-center'><span className="loading loading-spinner text-info"></span></p>
    }
    return (
        <div className='mt-24'>
            <title>My Enroll</title>
            <div>
                {
                    !enCourse.length ? <div>
                        <h1 className='text-3xl text-red-500 font-semibold text-center my-5'>Please Enroll course</h1>
                        <img src={EmptyEnRoll} alt="" className='mx-auto w-72 sm:w-1/2 rounded-t-4xl' /></div> : <div>
                        <h2 className='text-4xl text-center font-semibold my-3'>My Enroll Course</h2>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Cover Photo</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>En-Roll_by</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        enCourse.map((course, index) => <TableRow index={index} course={course}></TableRow>)
                                    }

                                </tbody>
                                {/* foot */}
                                {/* <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot> */}
                            </table>
                        </div>
                    </div>
                }


            </div>
        </div>
    );
};

export default MyEnroll;