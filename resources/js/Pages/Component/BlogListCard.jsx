import React from 'react';


function BlogListCard({ image, title, description, time }) {
  return (
    <div className=''>
        <div className="flex flex-wrap rounded shadow-sm mb-2">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-4/12 px-3 md:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover -z-50 ripple rounded-lg mb-3"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={'/'+image}
                className="w-full h-48 md:h-36 object-cover" alt="Louvre" />
              {/* <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              ></div>
          </a> */}
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-1 md:mb-0 mr-auto">
            <h3 className="text-lg font-bold mb-1 line-clamp-2 hover:underline">{title}</h3>

            <p className="text-gray-500 line-clamp-2">
              {description}
            </p>
            <p className="text-gray-500 mb-2">
              <small><u>
                {new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</u></small>
            </p>
          </div>
        </div>
    </div>
  )
}

export default BlogListCard