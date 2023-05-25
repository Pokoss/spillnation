import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function AdminVideoCard({ video }) {
  return (
    <div>
      <div className="w-full rounded-lg lg:max-w-sm" >
        <img
          className="object-cover w-full h-36"
          src={'/'+video.image_url}
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-lg font-bold mb-1 line-clamp-2 hover:underline">
              {video.title}
            </h4>
          <p className="mb-2 leading-normal text-gray-500 line-clamp-2">
            {video.category_id}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminVideoCard