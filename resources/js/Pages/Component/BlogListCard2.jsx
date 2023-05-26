import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function BlogListCard2({ title, content, time, image }) {
  return (
    <div>
      <div className="w-full rounded-lg shadow hover:bg-blue-gray-50 lg:max-w-sm" >
        <img
          className="object-cover w-full h-48"
          src={'/' + image}
          alt="image"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 line-clamp-2 hover:underline">
            {title}
          </h3>
          <p className="mb-2 leading-normal text-gray-500 line-clamp-2">
            {content}
          </p>
          <p className="text-gray-500 mb-1">
            <small><u>{new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</u></small>
          </p>

        </div>
      </div>
    </div>
  )
}

export default BlogListCard2