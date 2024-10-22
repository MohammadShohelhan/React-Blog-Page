import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/BookMark/Bookmark";
import Header from "./components/header/Header";
import MarkRead from "./components/MarkRead/MarkRead";
import LogIn from "./components/LigIn/LogIn";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [arr, setArr] = useState([]);

  const handleBookMarked = (blog) => {
    if (bookMark.includes(blog)) {
      return;
    }
    const setblogItem = [...bookMark, blog];
    setBookMark(setblogItem);
  };

  const markAsread = (blog) => {
    const newArr = [...arr, blog.id];

    setArr(newArr);

    if (!arr.includes(blog.id)) {
      const newTime = Number(readTime + blog.readingtime);
      setReadTime(newTime);
    }
    const remaining = bookMark.filter((data) => data !== blog);
    setBookMark(remaining);
  };

  const handleLogin = (email, password) => {
    console.log(email, password);
    if (email == "admin@me.com" && password == "123") {
      setIsLogin(!isLogin);
    }
  };

  return (
    <>
      {!isLogin ? (
        <div className="flex justify-center items-center h-screen w-full">
          {" "}
          <LogIn handleLogin={handleLogin}></LogIn>
        </div>
      ) : (
        <div>
          <Header></Header>

          <div className="lg:flex gap-16 px-2 md:px-8 m:w-11/12  mx-auto xl:px-20">
            

            <div className="lg:w-1/3  rounded-xl mt-4 order-2 ">
              <MarkRead readTime={readTime}></MarkRead>
              <Bookmark bookMark={bookMark}></Bookmark>
            </div>

            <Blogs
           
              markAsread={markAsread}
              handleBookMarked={handleBookMarked}></Blogs>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
