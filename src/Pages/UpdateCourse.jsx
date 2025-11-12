import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';

const UpdateCourse = () => {
    const { user, loading } = use(AuthContext);
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if (!loading && user) {
            fetch(`https://learning-platform-server-theta.vercel.app/courses/${id}`)
                .then(res => res.json())
                .then(data => setCourse(data))
        }
    }, [id, loading, user])

    if (loading || !course) {
        return <p>Loading...</p>
    }
    // console.log(course)
    const { title, image, price, duration, category, description } = course;
    const handleUpdateCourse = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const image = e.target.imageURL.value;
        const price = e.target.price.value;
        const duration = e.target.duration.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const created_by = e.target.created_by.value;
        console.log(title, image, price, duration, category, description, created_by);
        const newCourse = {
            title,
            image,
            price,
            duration,
            category,
            description,
            created_by,
        }
        fetch(`https://learning-platform-server-theta.vercel.app/courses/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCourse)

        }).then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    Swal.fire({
                        title: "Update Successful!",
                        icon: "success",
                        // draggable: true,
                    });
                    // window.location.reload();
                    // navigate('/courses')
                } else {
                    Swal.fire({
                        title: "No changes made!",
                        icon: "info",
                        // draggable: true,
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Update Failed",
                    text: "Something went wrong!",
                    icon: "error",
                });
            });
    }



    return (
        <div className='mt-24'>
            <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl mx-auto">
                <h2 class="text-3xl font-bold text-center text-blue-900 mb-8">Update Course</h2>

                <form class="space-y-6" onSubmit={handleUpdateCourse}>

                    {/* <!-- Title --> */}
                    <div class="relative">
                        <input type="text" id="title" name="title" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
                            placeholder="Title" defaultValue={title} />
                        <label for="title"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Title
                        </label>
                    </div>

                    {/* <!-- Image URL --> */}
                    <div class="relative">
                        <input type="text" id="imageURL" name="imageURL" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
                            placeholder="Image URL" defaultValue={image} />
                        <label for="imageURL"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Image URL
                        </label>
                    </div>

                    {/* <!-- Price --> */}
                    <div class="relative">
                        <input type="number" id="price" name="price" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
                            placeholder="Price" defaultValue={price} />
                        <label for="price"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Price
                        </label>
                    </div>

                    {/* <!-- Duration --> */}
                    <div class="relative">
                        <input type="text" id="duration" name="duration" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
                            placeholder="Duration" defaultValue={duration} />
                        <label for="duration"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Duration
                        </label>
                    </div>

                    {/* <!-- Category --> */}
                    <div class="relative">
                        <label for="category" class="absolute left-3 top-2 text-gray-500 text-sm">Category</label>
                        <select id="category" name="category" required
                            class="w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 focus:outline-none focus:border-blue-500" defaultValue={category}>
                            <option value="">Select Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="AI/ML">AI / ML</option>
                            <option value="Design">Design</option>
                            <option value="Programming">Programming</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Security">Security</option>
                        </select>

                    </div>

                    {/* <!-- Description --> */}
                    <div class="relative">
                        <textarea id="description" name="description" rows="4" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500 resize-none"
                            placeholder="Description" defaultValue={description}></textarea>
                        <label for="description"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Description
                        </label>
                    </div>

                    {/* <!-- Created By --> */}
                    <div class="relative">
                        <input type="text" id="created_by" name="created_by" required
                            class="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
                            placeholder="Created By" value={user.email} />
                        <label for="created_by"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                            Created By
                        </label>
                    </div>

                    <button type="submit"
                        class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all">
                        Submit Course
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateCourse;