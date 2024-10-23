
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMarked,markAsread}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-2/3 mt-2 px-3">
      
      {blogs.map((blog) => {
       return <Blog 
      
       handleBookMarked={handleBookMarked}
       markAsread={markAsread}
       key={blog.id}
        blog={blog}>
          
        </Blog>
      })}
    </div>
  );
};


Blogs.propTypes ={
  handleBookMarked:PropTypes.func.isRequired,
  markAsread:PropTypes.func.isRequired,
}
export default Blogs;
