import React from 'react'

export default function VideoListCard({ title, time, image }) {

    return (
        <div>
            <div className="py-2 border-t border-gray-400">
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                    <div className="w-full lg:w-auto mr-2 mb-8 lg:mb-0">
                        <img className="block w-40 h-16 object-cover" src={'/' + image} alt="" />
                    </div>
                    <div className="w-full lg:w-9/12 mr-2 mb-10 lg:mb-0">
                        <div className="max-w-2xl">
                            <h3 className="text-sm font-semibold line-clamp-3 hover:underline">{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
