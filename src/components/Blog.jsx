import React from "react";
import img1 from "../assets/Blog/img1.png";
import img2 from "../assets/Blog/img2.png";
import img3 from "../assets/Blog/img3.png";
import img4 from "../assets/Blog/img4.png";

const blogs = [
  {
    title: "The Game-Changer: Agentic AI in Modern Security and Surveillance",
    image: img1,
  },
  {
    title:
      "AI-Driven Predictive Maintenance: Enhancing Safety and Efficiency in the Automotive Industry",
    image: img2,
  },
  {
    title: "Real-Time Vehicle Tracking & Analytics using Traffic Videos",
    image: img3,
  },
  {
    title: "Detecting Small Objects from Images/Videos using AI",
    image: img4,
  },
];

const Blog = () => {
  return (
    <div className="bg-[#eef5fd] py-12 mb-20 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-center mb-10">
          Our blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-sm overflow-hidden h-40"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[200px] max-h-40 object-cover"
              />
              <div className="p-4 flex items-center">
                <p className="text-sm md:text-base text-gray-800">
                  {blog.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
