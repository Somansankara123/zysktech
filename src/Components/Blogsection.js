
import arrow from "../Assets/blogsection/Icon wrap.svg";

import { blogs } from "../utildata.js/Blogdata";


const BlogCard = ({ image, category, title, description, authorImage, authorName, date }) => (
  <div className="w-full md:w-1/3 p-4">
    <img src={image} alt={title} className="w-full rounded-lg" />
    <p className="text-violet-600 mt-2">{category}</p>
    <div className="flex items-center justify-between mt-1">
      <p className="font-bold text-xl">{title}</p>
      <img src={arrow} alt="Read more arrow" className="w-5 h-5" />
    </div>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
    <div className="flex items-center mt-4">
      <img src={authorImage} alt={`${authorName}'s profile`} className="w-10 h-10 rounded-full" />
      <div className="ml-2">
        <p className="font-semibold">{authorName}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  </div>
);

const Blogsection = () => {
  

  return (
    <div className=" mt-10 p-8 lg:ml-12 lg:w-4/5">
      <div className="flex">
  <div>
    <p className="text-violet-800">Our blog</p>
    <p className="font-semibold text-xl sm:text-2xl lg:text-3xl pt-2">Latest Blog Posts</p>
    <p className="text-xs sm:text-sm pt-3">Tools and strategies modern teams need to help their companies grow.</p>
  </div>

  <div className="sm:block hidden ml-auto">
    <button className="bg-violet-800 text-white rounded-xl px-3 py-2 hover:bg-violet-700 focus:ring focus:ring-violet-300 transition">
      View all posts
    </button>
  </div>
</div>


  
  <div className="flex flex-col">
    
    <div className="flex flex-wrap w-full -mx-4">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} className="w-full sm:w-1/2 lg:w-1/3 p-4" />
      ))}
    </div>

    
    <div className="mt-4 md:mt-0 lg:hidden">
      <button className="bg-violet-800 text-white rounded-xl px-3 py-2 hover:bg-violet-700 focus:ring focus:ring-violet-300 transition">
        View all posts
      </button>
    </div>
  </div>
</div>

  );
};

export default Blogsection;
