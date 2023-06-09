import React from 'react'

function BlogCard1() {
  return (
    <div className='delay-[300ms] duration-[600ms] taos:[transform:translate3d(0,-200px,0)_scale(0.6)] taos:opacity-0' data-taos-offset="500">
        
        <div className="md:flex shadow-lg mx-6 md:mx-auto my-10 max-w-lg md:max-w-2xl h-64" >
   <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
   <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div className="items-center">
         <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
         
      </div>
      <p className="text-sm text-gray-700 mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p>
      <div className="flex items-center justify-end mt-4 top-auto">
         <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
         <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Publish</button>
      </div>
   </div>
</div>
    </div>
  )
}

export default BlogCard1