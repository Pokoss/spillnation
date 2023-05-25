import React from 'react';


function AdminBlogListCard({ image, title, description, time }) {
  return (
    <div className="w-full flex mb-4">
      <div className="w-2/4 md:w-1/4 px-3 md:mb-0">
        <img src={'/' + image} className="w-full h-20 object-cover" alt={title} />
      </div>

      <div className="w-full md:w-3/4 md:px-3 mb-1 md:mb-0 mr-auto">
        <h5 className="text-lg font-bold mb-1 line-clamp-1 hover:underline">{title}</h5>
        <p className="text-gray-500 line-clamp-1">
          {description}
        </p>
        <p className="text-gray-500 mb-2">
          <small>
            {new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </small>
        </p>
      </div>
    </div>
  )
}

export default AdminBlogListCard