import React from 'react'

const MarkRead = ({readTime}) => {
  return (
    <div className='text-purple-500 text-xl md:text-3xl text-center rounded-lg p-5 mb-4 bg-purple-100 border border-purple-700'>Spend time on read : {readTime} min</div>
  )
}

export default MarkRead