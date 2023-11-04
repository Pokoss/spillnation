import React, { useEffect } from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'
import AdminLayout from './Component/AdminLayout'
import AdminBlogListCard from './Component/AdminBlogListCard';

function AdminBlog({ posts, categories }) {
  const { data, setData, get, processing } = useForm();

  const handleSearch = e => {
    e.preventDefault();

    get('/admin/blog', {
      preserveState: true, preserveScroll: true
    });
  }


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setData('search_text', params.get('search_text'))
  }, []);

  return (
    <div className='flex flex-col-reverse md:flex-row max-w-screen-lg md:space-x-10 mx-auto p-5'>
      <div className='md:w-3/4 mt-10 md:mt-0'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-semibold'>All Articles</h1>
          <Link href='/admin/blog/create' className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
            New
          </Link>
        </div>
        <form onSubmit={handleSearch}>
          <div className='flex rounded-md py-5 border-t-2'>
            <input
              className="shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="articleTitle"
              type="text"
              placeholder="Search for an article"
              value={data.search_text ?? ''}
              onChange={(event) => setData('search_text', event.target.value)}
            />
            <button type='submit' disabled={processing} className='bg-primary px-4 rounded-r-md shadow text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </form>
        {posts && posts.length == 0 ?
          <div className='flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10'>
            <span className='mx-auto'>
              No posts found matching that query
            </span>
          </div>
          :
          posts.map((latest, index) =>
            <Link key={index} href={"/admin/blog/" + latest.slug}>
              <AdminBlogListCard title={latest.title} description={latest.description} time={latest.updated_at} image={latest.imageurl} />
            </Link>
          )}

      </div>
      <div className='md:w-1/4'>
        <h1 className='text-2xl font-semibold'>Catgeories</h1>
        <div className='py-5 border-t-2'>
          {categories && categories.map((category, index) =>
            <p key={index} className='shadow p-2'>{category.name} ({category.blog_count ?? 0})</p>
          )}
        </div>
        <h1 className='text-2xl font-semibold'>Ads Section</h1>
        <div className='py-5 border-t-2'>
          <Link href='/admin/ads'>
            <p className='shadow p-2'>Create Ad</p>
          </Link>
        
        </div>
      </div>
    </div>
  )
}

AdminBlog.layout = page => <AdminLayout children={page} />
export default AdminBlog