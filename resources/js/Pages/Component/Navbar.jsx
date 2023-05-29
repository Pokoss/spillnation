import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const { errors } = usePage().props;
  const [openSubDialog, setOpenSubDialog] = React.useState(false);
  const handleOpenSubDialog = () => setOpenSubDialog((cur) => !cur);

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { auth } = usePage().props
  const searchForm = useForm();
  const subscribeForm = useForm();

  const handleSubscribe = e => {
    e.preventDefault();
    subscribeForm.clearErrors();
    subscribeForm.post('/subscribe', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        subscribeForm.reset();
        setOpenSubDialog(false);
        toast.success('Thank you for subscribing!');
      }
    });
  }

  const handleSearch = e => {
    e.preventDefault();

    searchForm.get('/search', {
      preserveState: true, preserveScroll: true
    });
  }

  return (
    <>
      <ToastContainer />
      <div className='bg-blue-900 h-8 sticky top-0 z-50'>
        <div className='flex justify-between content-center pt-1'>
          <div className="flex items-center justify-center ml-4">
            <a href="https://www.facebook.com/spillnation" title='Visit our Facebook' className="mx-2 text-white transition-colors duration-300  hover:text-black" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </a>
            <a href="https://twitter.com/spillnation" title='Visit our Twitter' className="mx-2 text-white transition-colors duration-300  hover:text-gray-800 ">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            
            <Link href="/advertise" className="hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-gray-800">
              Advertise
            </Link>
            {/* <Link href="/about-us" className="hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-gray-800">
              About us
            </Link> */}
            <Link href="/contact-us" className="hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-gray-800">
              Contact us
            </Link>
          </div>

          <div className='flex md:mr-5'>
            {auth.user && <div className="block">
              <span className="ml-10 text-white text-md transition-colors duration-300  hover:text-gray-800">
                <Link href={auth.user.role == 1 ? '/admin' : '/'}>
                  {auth.user.name}
                </Link>
              </span>
              <Link
                href="/logout" method='post' as='button'
                className="mx-5 md:ml-10 text-white text-md transition-colors duration-300  hover:text-gray-800"
              >
                Logout
              </Link>
            </div>}

            {!auth.user && <>
              <Link
                href="/login"
                className="md:block ml-10 text-white text-md transition-colors duration-300  hover:text-gray-800">
                Login
              </Link>
              <React.Fragment>
                {/* <button onClick={handleOpenSubDialog} className=" ml-5 md:ml-10 text-white px-5 text-md transition-colors duration-300 bg-gray-800 rounded-xl  hover:bg-gray-800-hover">
                  Subscribe
                </button> */}
                <Dialog
                  size="xl"
                  open={openSubDialog}
                  handler={handleOpenSubDialog}
                  className="bg-transparent shadow-none"
                >
                  <form onSubmit={handleSubscribe}>
                    <Card className="mx-auto w-full">
                      <CardHeader
                        variant="gradient"
                        className="mb-4 grid h-20 place-items-center bg-gray-800"
                      >
                        <Typography variant="h5" color="white">
                          Subscribe to our news letter
                        </Typography>
                      </CardHeader>
                      <CardBody className="flex flex-col gap-4">
                        <Typography>
                          By subscribing to our newsletter, you'll gain access to exclusive content, stay updated with the latest news, receive special promotions, and be the first to know about our exciting events, product launches, and industry insights delivered straight to your inbox.
                        </Typography>
                        <Input label="Email" size="lg" value={subscribeForm.data.email ?? ''} onChange={e => subscribeForm.setData('email', e.target.value)} error={errors.email} />
                        {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
                      </CardBody>
                      <CardFooter className="pt-2">
                        <Button variant="gradient" type='submit' disabled={subscribeForm.processing} fullWidth className='bg-gray-800'>
                          Subscribe now
                        </Button>
                      </CardFooter>
                    </Card>
                  </form>
                </Dialog>
              </React.Fragment>
            </>}
          </div>
        </div>
      </div>

      <nav className="flex flex-wrap items-center justify-between shadow-lg bg-black p-3 sticky top-0 z-50">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className='flex lg:hidden items-center py-1 px-4 bg-black'>
              <Link href='/'>
                <img className='h-10 object-contain' src='/images/spill-logo.png' alt="Spillnation logo" />
              </Link>
            </div>

            <div className='flex items-center'>
              <span className='text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'>
                <Popover>
                  <PopoverHandler>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </PopoverHandler>
                  <PopoverContent className='w-full'>
                    <form onSubmit={handleSearch}>
                      <div className='flex rounded-md'>
                        <input
                          className="shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="articleTitle"
                          type="text"
                          placeholder="Search for an article"
                          value={searchForm.data.search_text ?? ''}
                          onChange={(event) => searchForm.setData('search_text', event.target.value)}
                        />
                        <button type='submit' disabled={searchForm.processing} className='bg-gray-800 px-4 rounded-r-md shadow text-white'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </PopoverContent>
                </Popover>
              </span>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>

          <div onClick={() => setNavbarOpen(false)} className={"lg:flex flex-grow flex-col md:flex-row" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <div className='hidden lg:flex items-center py-1 px-8'>
              <Link href='/'>
                <img className='h-14 object-contain' src='/images/spill-logo.png' alt="Spillnation logo" />
              </Link>
            </div>

            <div className="w-full flex justify-around py-4 mb-4 border-b border-white lg:hidden items-center">
              <Link href="/advertise" className="text-white transition-colors duration-300">
                Advertise
              </Link>
              {/* <Link href="/about-us" className="text-white transition-colors duration-300">
                About us
              </Link> */}
              <Link href="/contact-us" className="text-white transition-colors duration-300">
                Contact us
              </Link>
              {!auth.user && <Link href="/login" className="text-white transition-colors duration-300">
                Login
              </Link>}
            </div>

            <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/">
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/category/lifestyle" target='_blank'
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Lifestyle</span>
                </Link>
              </li>
              <li className="nav-item">
                
                  <Link
                    className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                    href="/category/entertainment"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Entertainment</span>
                  </Link>                
              </li>
              <li>

                  <Link
                    className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                    href="/category/sports"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sports</span>
                  </Link>
                </li>
                <li>

                  <Link
                    className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                    href="/category/fashion"
                  >
                    <i className="fab fa-pinterest leading-md text-white opacity-75"></i><span className="ml-2">Fashion</span>
                  </Link>
                </li>
                <li>

                  <Link
                    className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                    href="/category/education"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Education</span>
                  </Link>
                </li>
                <li>

                  <Link
                    className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                    href="/category/technology"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Technology</span>
                  </Link>
                </li>

              <li className="nav-item hidden md:block">
                <span
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="#pablo">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    <Popover>
                      <PopoverHandler>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </PopoverHandler>
                      <PopoverContent>
                        <form onSubmit={handleSearch}>
                          <div className='flex rounded-md'>
                            <input
                              className="shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="articleTitle"
                              type="text"
                              placeholder="Search for an article"
                              value={searchForm.data.search_text ?? ''}
                              onChange={(event) => searchForm.setData('search_text', event.target.value)}
                            />
                            <button type='submit' disabled={searchForm.processing} className='bg-gray-800 px-4 rounded-r-md shadow text-white'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                              </svg>
                            </button>
                          </div>
                        </form>
                      </PopoverContent>
                    </Popover>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar