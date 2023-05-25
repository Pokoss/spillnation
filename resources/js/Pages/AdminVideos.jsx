import React, { useState, useEffect, Fragment } from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'
import AdminLayout from './Component/AdminLayout'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import AdminVideoCard from './Component/AdminVideoCard';

function AdminVideos({ videos, categories }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const videoForm = useForm();

  const { data, setData, get, processing } = useForm();

  const handleSearch = e => {
    e.preventDefault();

    get('/admin/blog', {
      preserveState: true, preserveScroll: true
    });
  }


  const handleSubmit = e => {
    e.preventDefault();
    videoForm.post('/admin/ssgtv', {
      preserveState: true, preserveScroll: true,
      onSuccess: () => {
        toast.success('Video added');
        setOpen(false);
      }
    })
  }



  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setData('search_text', params.get('search_text'))
  }, []);

  return (
    <div className='flex flex-col-reverse md:flex-row max-w-screen-xl md:space-x-10 mx-auto p-5'>
      <div className='md:w-3/4 mt-10 md:mt-0'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-semibold'>All Videos</h1>
          {/* <Link href='/admin/blog/create' className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
            New
          </Link> */}
          <Fragment>
            <Button onClick={handleOpen} variant="gradient">
              New
            </Button>
            <Dialog open={open} handler={handleOpen}>
              <form onSubmit={handleSubmit}>
                <DialogHeader>Add new video</DialogHeader>
                <DialogBody divider>
                  <div className='flex flex-col space-y-5'>
                    <div>
                      <Input label="Image" type='file' size="lg" onChange={e => videoForm.setData('image', e.target.files[0])} error={videoForm.errors.image} />
                      {videoForm.errors.image && <span className='text-xs text-red-500'>{videoForm.errors.image}</span>}
                    </div>
                    <div>
                      <Input label="Title" size="lg" value={videoForm.data.title ?? ''} onChange={e => videoForm.setData('title', e.target.value)} error={videoForm.errors.title} />
                      {videoForm.errors.title && <span className='text-xs text-red-500'>{videoForm.errors.title}</span>}
                    </div>
                    <div>
                      <Input label="Video url" size="lg" value={videoForm.data.video_url ?? ''} onChange={e => videoForm.setData('video_url', e.target.value)} error={videoForm.errors.video_url} />
                      {videoForm.errors.video_url && <span className='text-xs text-red-500'>{videoForm.errors.video_url}</span>}
                    </div>
                    <div>
                      <Select label="Category" value={videoForm.data.category_id ?? ''} onChange={e => videoForm.setData('category_id', e)} >
                        {categories.map((category, index) =>
                          <Option key={index} value={category.id.toString()}>{category.name}</Option>
                        )}
                      </Select>
                      {videoForm.errors.category_id && <span className='text-xs text-red-500'>{videoForm.errors.category_id}</span>}
                    </div>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" type='submit' disabled={videoForm.processing}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </form>
            </Dialog>
          </Fragment>
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
        {videos && videos.length == 0 &&
          <div className='flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10'>
            <span className='mx-auto'>
              No videos found matching that query
            </span>
          </div>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {videos.map((video, index) =>
            <AdminVideoCard key={index} video={video} />
          )}
        </div>

      </div>
      <div className='md:w-1/4'>
        <h1 className='text-2xl font-semibold'>Catgeories</h1>
        <div className='py-5 border-t-2'>
          {categories && categories.map((category, index) =>
            <p key={index} className='shadow p-2'>{category.name} ({category.blog_count ?? 0})</p>
          )}
        </div>
      </div>
    </div>
  )
}

AdminVideos.layout = page => <AdminLayout children={page} />
export default AdminVideos