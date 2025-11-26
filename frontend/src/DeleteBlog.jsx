import React, { useState } from 'react'
import axios from 'axios';

function DeleteBlog() {
    const [id, setId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.delete(`http://localhost:6969/blogs/blog/delete/${id}`)
            alert("Blog deleted successfully!");
            setId("");
        } catch (err) {
            console.log(err.message);
            alert("Failed to delete blog. Please check the ID and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">
                    Delete Blog Post
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <label htmlFor="blogId" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Blog ID to Delete
                    </label>
                    <input
                        id="blogId"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Type the blog ID..."
                        required
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black transition duration-150 outline-none"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || !id}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                        {isSubmitting ? "Deleting..." : "Delete Blog"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DeleteBlog
