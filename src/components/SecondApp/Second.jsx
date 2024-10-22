import { useState } from "react";


import Bookmark from "./components/BookMark/Bookmark";
import Header from "./components/header/Header";
import MarkRead from "./components/MarkRead/MarkRead";
import Blogs from "../Blogs/Blogs";


function Second() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);
 

  const handleBookMarked = (blog) => {
    if (bookMark.includes(blog)) {
      return;
    }
    const setblogItem = [...bookMark, blog];
    setBookMark(setblogItem);
  };

  const [arr, setArr] = useState([]);
  const markAsread = (blog) => {
    const newArr = [...arr, blog.id];
    setArr(newArr);

    if (!arr.includes(blog.id)) {
      const newTime = Number(readTime + blog.readingtime);
      setReadTime(newTime);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="flex gap-16 px-8 w-11/12 mx-auto">
      
        <Blogs
          markAsread={markAsread}
          handleBookMarked={handleBookMarked}></Blogs>
        <div className="w-1/3  rounded-xl mt-4">
          <MarkRead readTime={readTime}></MarkRead>
          <Bookmark bookMark={bookMark}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default Second;
