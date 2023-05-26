import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Layout from './Component/Layout'
import BlogListCard from './Component/BlogListCard'
import BlogAsideCard from './Component/BlogAsideCard'

function CategoryScreen({ blogs, category, trending_posts }) {
    return (
        <div>
            <div className='container mx-auto flex flex-wrap py-6'>

                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <div className='w-full justify-start mb-5' >
                        <h1 className="ml-6 mb-4 w-full mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl capitalize">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900">
                                {category}
                            </span>
                        </h1>
                        {blogs && blogs.map((blog, index) =>
                            <Link key={index} href={"/" + blog.slug}>
                                <BlogListCard title={blog.title} description={blog.description} time={blog.updated_at} image={blog.imageurl} />
                            </Link>
                        )}

                        {blogs && blogs.length == 0 &&
                            <div className='flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10'>
                                <span className='mx-auto'>
                                    No posts found in this category
                                </span>
                            </div>
                        }
                    </div>
                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    <div className='sticky top-20'>
                        <h1 className="ml-6 w-full mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900">Trending</span></h1>
                        {trending_posts && trending_posts.map((post, index) =>
                            <Link key={index} href={'/' + post.slug}>
                                <BlogAsideCard key={index}
                                    image={post.imageurl}
                                    title={post.title}
                                    time={post.created_at} />
                            </Link>
                        )}
                    </div>

                    {/* <div className="text-sm py-6 sticky top-20">
                        <div className="w-full text-center">
                            <Adsense
                                client='ca-pub-2005682797531342'
                                slot='7046626912'
                                adTest='on'
                                style={{ display: 'block' }}
                                format='auto'
                                responsive='true'
                                layoutKey='-gw-1+2a-9x+5c'
                            />
                            <a className="uppercase mt-5" href="#">Advertisement</a>
                            <a href="#">
                                <img className="mx-auto" src="/images/ads/250.jpg" alt="advertisement area" />
                            </a>
                        </div>
                    </div> */}
                </aside>
            </div>
        </div>
    )
}

CategoryScreen.layout = page => <Layout children={page} />
export default CategoryScreen