import React, { useState, useEffect } from "react";
import axios from "axios";
import NewBlog from "./newBlog";
import { useNavigate }  from "react-router-dom"
function Landing(){

      const navigate = useNavigate();
      const [blogs, setBlogs] = useState([]);
    
      useEffect(() => {
        async function fetchBlogs() {
          try {
            const response = await axios.get("http://localhost:6969/blogs/all");
            setBlogs(response.data);
          } catch (err) {
            console.log("Error fetching blogs", err);
          }
        }
        fetchBlogs();
      }, []);
    
      return (
        // 1. min-h-screen ensures the background covers the whole page even if content grows
        <div className="bg-gray-900 min-h-screen font-sans text-gray-100">
          
          {/* --- Navbar --- */}
          <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* Gradient Text for Logo */}
              <div className="font-extrabold text-2xl tracking-tight text-white  bg-clip-text">
                Blogs.
              </div>
              
              <div className="flex gap-4">
                <button onClick={() => { 
                  navigate("/delete-blog");
                }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium bg-red-600 text-white rounded-sm px-2 py-0.5">
                  delete blog
                </button>
                <button onClick={()=>{navigate("/new-blog")}} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
                  + New Blog
                </button>
              </div>
            </div>
          </nav>
    
          {/* --- Main Content --- */}
          <main className="max-w-7xl mx-auto px-6 py-12">
            
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Latest Blogs</h1>
              <p className="text-gray-400">I blog when im bored </p>
            </div>
    
            {/* --- Grid Layout for Blog Cards --- */}
            {/* grid-cols-1 for mobile, 2 for tablet, 3 for desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {blogs.map((b) => (
                <div 
                  key={b._id} 
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-600 transition-all duration-300 group"
                >
                  {/* Category Tag (Optional UI element) */}
                  <div className="mb-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded bg-blue-500/10 text-blue-400 uppercase tracking-wider`}>
                      {b.status || "Article"}
                    </span>
                  </div>
    
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {b.title}
                  </h2>
    
                  {/* Content Preview (Truncated) */}
                  {/* line-clamp-3 cuts off text after 3 lines */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {b.content}
                  </p>
    
                  {/* Footer: Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      {/* Avatar Placeholder */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                        {b.author[0]?.toUpperCase()}
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{b.author}</span>
                    </div>
                    
                    {/* Formatted Date */}
                    <span className="text-xs text-gray-500">
                      {new Date(b.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
    
            </div>
          </main>
          <NewBlog />
        </div>
      );
    }


export default Landing
