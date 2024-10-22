
import Book from "../Book/Book";

const Bookmark = ({bookMark}) => {
  console.log(bookMark)
  return (
    <div className="bg-[#f3f3f3] h-full rounded-xl">
      <div className="text-2xl p-4">Bookmark:{bookMark.length}</div>

      <div className="">
        {
          bookMark.map((book)=>{
           return   <Book  key={book.id} book={book} ></Book>
          } )
        }
      </div>
    </div>
  );
};

export default Bookmark;
