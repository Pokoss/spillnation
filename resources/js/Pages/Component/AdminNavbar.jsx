import React from 'react'
import { Link, useForm, usePage } from '@inertiajs/inertia-react';

function AdminNavbar() {
  const { auth } = usePage().props
  const searchForm = useForm();

  const handleSearch = e => {
    e.preventDefault();

    searchForm.get('/search', {
      preserveState: true, preserveScroll: true
    });
  }

  return (
    <>
      <div className='bg-gray-900 h-8 sticky top-0 z-50'>
        <div className='flex justify-between content-center pt-1'>
          <div className="flex items-center justify-center ml-4">
            <Link href="#" className="hidden md:block mx-2 text-white transition-colors duration-300  hover:text-primary" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </Link>
            <Link href="/" className="hidden md:block mx-2 text-white transition-colors duration-300  hover:text-primary ">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link href="/" className="hidden md:block mx-2 text-white transition-colors duration-300  hover:text-primary">
              <svg viewBox="0 0 30 30" fill="currentColor" className="w-5 h-5 fill-current">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link href="/admin" className="md:ml-10 text-sm text-white transition-colors duration-300  hover:text-primary">
              Dashboard
            </Link>
            <Link href="/admin/blog" className="hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-primary">
              Blog
            </Link>
            {/* <Link href="/admin/ssgtv" className="ml-10 text-sm text-white transition-colors duration-300  hover:text-primary">
              SSGTV
            </Link> */}
          </div>

          <div className='md:flex md:mr-10'>
            {auth.user && <>
              <Link href='/' as='button' className="ml-10 text-white text-md transition-colors duration-300  hover:text-primary">
                {auth.user.name}
              </Link>
              <Link
                href="/logout" method='post' as='button'
                className="mx-5 md:ml-10 text-white text-md transition-colors duration-300  hover:text-primary"
              >
                Logout
              </Link>
            </>}

            {!auth.user && <>
              <Link
                href="/login"
                className="ml-10 text-white text-md transition-colors duration-300  hover:text-primary">
                Login
              </Link>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminNavbar