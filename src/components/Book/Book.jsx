import React from 'react'


const Book = ({book}) => {
  // console.log(book)
  const {title} = book;
  return (
    <div className='border p-4 m-4 text-xl md:text-2xl font-semibold opacity-80 rounded-xl bg-white'>Book title: {title}</div>
  )
}



export default Book