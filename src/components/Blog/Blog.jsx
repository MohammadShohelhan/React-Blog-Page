import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, markAsread, handleBookMarked }) => {
 
  const {
    author,
    authorimg,
    hashtag,
 
    posteddate,
    readingtime,
    title,
    coverpicture,
  } = blog;
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 p-4 space-y-4">
      <img
        className="w-full h-[50vh] object-cover rounded-lg"
        src={coverpicture}
        alt={title}
      />

      <div className="flex justify-between items-center mt-2 text-gray-600">
        <div className="flex items-center mt-4 space-x-3">
          <img
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 "
            src={authorimg}
            alt={author}
          />
          <div >
            <h3 className="  md:text-2xl font-bold">{author}</h3>
            <p className="text-sm text-gray-500 md:text-lg">{posteddate}</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
          {" "}
          <p className="md:text-lg font-bold">Reading Time: {readingtime}</p>{" "}
          <button  onClick={() => handleBookMarked(blog)} >
            <FaRegBookmark className="text-2xl" />
          </button>
        </div>
      </div>
      <h3
        onClick={() => markAsread(blog)}
        className="text-blue-600 text-lg font-bold cursor-pointer underline">
        Mark as read
      </h3>

      <h2 className="text-4xl font-bold mt-2 md:w-3/4 ">{title}</h2>
      <p className="text-lg text-gray-500 mt-1">{hashtag}</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  markAsread:PropTypes.func.isRequired,
  handleBookMarked:PropTypes.func.isRequired
 
};
export default Blog;
