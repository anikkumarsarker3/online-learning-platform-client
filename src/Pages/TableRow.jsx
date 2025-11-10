import React from 'react';

const TableRow = ({ index, course }) => {
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={course.image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {course.title}
            </td>
            <td>{course.price}</td>
            <td>{course.enroll_by}</td>
        </tr>


    );
};

export default TableRow;