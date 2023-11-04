import React,{useState} from 'react'
import AdminLayout from './Component/AdminLayout'
import { Inertia } from '@inertiajs/inertia';

function AdminAds() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link_url: '',
        image: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value, files } = e.target;
    
        setFormData({
          ...formData,
          [name]: name === 'image' ? files[0] : value,
        });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        form.append('title', formData.title);
        form.append('description', formData.description);
        form.append('link', formData.link_url);
        form.append('image', formData.image);
    
        try {
          await Inertia.post('/admin/ads', form, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div>
       <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="link_url" className="block text-gray-700 text-sm font-bold mb-2">
          Link URL
        </label>
        <input
          type="text"
          id="link_url"
          name="link_url"
          value={formData.link_url}
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </div>
    </form>
    </div>
  )
}
AdminAds.layout = page => <AdminLayout children={page} />
export default AdminAds