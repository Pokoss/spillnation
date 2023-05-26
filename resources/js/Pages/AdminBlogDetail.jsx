import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AdminLayout from './Component/AdminLayout';
import { toast } from 'react-toastify';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Compressor from 'compressorjs';


const AdminBlogDetail = ({ postData, comments, categories }) => {
  const { data, setData, post, put, errors, delete: deleteBlog } = useForm(postData);
  const [imageSrc, setImageSrc] = useState(null);

  const setValue = e => setData(e.target.id, e.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.slug) {
      put('', {
        preserveScroll: true, preserveState: true,
        onSuccess: () => {
          toast.success('Changes saved')
        }
      })
    }
    else {
      post('/admin/blog', {
        preserveScroll: true, preserveState: true,
        onSuccess: () => {
          toast.success('Changes saved')
        }
      });
    }
  }

  const handleDelete = e => {
    deleteBlog('');
  }


  function handleImageChange(event) {
    const image = event.target.files[0];
    new Compressor(image, {
      quality: 0.2,
      success(result) {
        const fileReader = new FileReader();

        if (postData) {
          Inertia.post(`/admin/blog/${postData.slug}/image`, { result }, {
            preserveScroll: true, preserveState: true,
            onSuccess: () => {
              fileReader.readAsDataURL(result);
              fileReader.onload = () => setImageSrc(fileReader.result);
              toast.success('Image saved')
            }
          })
        }
        else {
          fileReader.readAsDataURL(result);
          fileReader.onload = () => setImageSrc(fileReader.result);
          setData('image', result);
        }
      },
      error(err) {
        console.log(err.message);
      },
    });


    
  }


  return (
    <div className='my-5'>
      <form onSubmit={handleSubmit} className="flex flex-col-reverse lg:flex-row lg:space-x-10 bg-white px-5">
        <div className="lg:w-2/3 mt-10 lg:mt-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleContent">
            Article Content
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={data.content}
            onChange={(event, editor) => setData('content', editor.getData())}
          />
          {errors.content && <span className='text-xs text-red-500'>{errors.content}</span>}
        </div>

        <div className='w-full lg:w-1/3'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleTitle">
              Article Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Article Title"
              value={data.title ?? ''}
              onChange={setValue}
            />
            {errors.title && <span className='text-xs text-red-500'>{errors.title}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleTitle">
              Article Description or Summary
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              rows={5}
              placeholder="Article Description(Make very it Short about 50 words)"
              value={data.description}
              onChange={setValue}
            />
            {errors.description && <span className='text-xs text-red-500'>{errors.description}</span>}
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleCategory">
              Article Category
            </label>
            <select placeholder="Article Category" id='category' value={data.category} onChange={setValue} className="w-full p-2.5 text-gray-700 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option value={0}>Select a category....</option>
              {categories.map((category) =>
                <option key={category.id} value={category.id}>{category.name}</option>
              )}
            </select>
            {errors.category && <span className='text-xs text-red-500'>{errors.category}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleImage">
              Article Image
            </label>
            {(imageSrc || data.imageurl) &&
              <img src={imageSrc ?? `/${data.imageurl}`} alt="Selected image" />
            }
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {errors.image && <span className='text-xs text-red-500'>{errors.image}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_description">
              Image description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image_description"
              type="text"
              placeholder="Image description"
              value={data.image_description ?? ''}
              onChange={setValue}
            />
            {errors.image_description && <span className='text-xs text-red-500'>{errors.image_description}</span>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Save Article
            </button>
            {data.slug && <button onClick={handleDelete} className="bg-red-500 hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Delete
            </button>}
          </div>
        </div>
      </form>
    </div>
  );
};


AdminBlogDetail.layout = page => <AdminLayout children={page} />
export default AdminBlogDetail