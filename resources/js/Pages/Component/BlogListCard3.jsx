import React from 'react'
import { Button } from "@material-tailwind/react";



function BlogListCard3() {
    const products = [
        {
          id: 1,
          name: '',
          href: '#',
          imageSrc: 'https://mdbootstrap.com/img/new/standard/city/018.jpg',
          imageAlt: "Front of men's Basic Tee in black. ",
          price: 'Mar 25th 2022 at 10:00:00 pm',
          color: 'Black',
        },
        // More products...
      ]
  return (
    <div>
        {products.map((product, index) => (
            <div key={index} className="group relative">
              
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 justify-between">
                <div>
                <h4 className="text-lg font-bold mb-1 line-clamp-2">
                              Something serious happened today get to find out what oi dsg sege esaf edsfg vfesef cfe vgev eg cgve cvsge eg vbwev
                          </h4>
                          <p className="mb-2 leading-normal text-gray-500 line-clamp-2">
                          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum.
                          </p>
                 
                </div>
                <p className="text-xs text-gray-400 font-light font-s overflow-hidden truncate w-200">On {product.price}</p>
              </div>
              
            </div>
          ))}
          
    </div>
  )
}

export default BlogListCard3