import { Link } from "@inertiajs/inertia-react";

export const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container p-3 md:p-6 mx-auto">
                <div className="lg:flex mx-auto">
                    <div className="w-full md:-mx-6 lg:w-2/5">
                        <div className="md:px-6">
                            <div className="flex space-x-5 items-center">
                                <Link href="/" className="bg-white p-3 rounded">
                                    {/* <img className="w-40" src='/images/logo.png' alt="SSG logo" /> */}
                                </Link>
                                <div className="text-start mg:pr-5">
                                    <h1 className="text-2xl text-gray-50 font-bold tracking-tight">
                                        Spillnation
                                    </h1>
                                    <p className="lg:max-w-sm mt-2 mr-2 text-white">Spillnation we offer all the latest info thats happening</p>
                                </div>
                            </div>

                            <div className="flex mt-6 -mx-2">
                                <a href="https://www.facebook.com/spillnation" title='Visit our Facebook' className="mx-2 text-white transition-colors duration-300  hover:text-primary-hover" aria-label="Facebook">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                        </path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/spillnation" title='Visit our Twitter' className="mx-2 text-white transition-colors duration-300  hover:text-primary-hover ">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a href="https://youtube.com/spillnation" title='Visit our Youtube' className="mx-2 text-white transition-colors duration-300  hover:text-primary-hover">
                                    <svg viewBox="0 0 30 30" fill="currentColor" className="w-5 h-5 fill-current">
                                        <circle cx="15" cy="15" r="4" />
                                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h2 className="text-gray-300 uppercase dark:text-white">About</h2>
                                {/* <Link href="/about-us" className="block mt-2 text-sm white text-white hover:underline">About us</Link> */}
                                <Link href="/contact-us" className="block mt-2 text-sm white text-white hover:underline">Contact us</Link>
                                <Link href="/advertise" className="block mt-2 text-sm white text-white hover:underline">Advertise</Link>
                            </div>

                            <div>
                                <h2 className="text-gray-300 uppercase dark:text-white">News</h2>
                                <Link href="/category/lifestyle" className="block mt-2 text-sm white text-white hover:underline">LifeStyle</Link>
                                <Link href="/category/entertainment" className="block mt-2 text-sm white text-white hover:underline">Entertainment</Link>
                                <Link href="/category/sports" className="block mt-2 text-sm white text-white hover:underline">Sports</Link>
                            </div>

                            <div>
                                <h2 className="text-gray-300 uppercase dark:text-white">Categories</h2>
                                <Link href="/category/entertainment" className="block mt-2 text-sm white text-white hover:underline">Fashion</Link>
                                <Link href="/category/education" className="block mt-2 text-sm white text-white hover:underline">Education</Link>
                                {/* <Link href="/education" className="block mt-2 text-sm white text-white hover:underline">Education</Link> */}
                            </div>

                            <div>
                                <h2 className="text-gray-300 uppercase dark:text-white"></h2>
                                <Link href="/politics" className="block mt-2 text-sm white text-white hover:underline">Politics</Link>
                                <Link href="/agriculture" className="block mt-2 text-sm white text-white hover:underline">Agriculture</Link>
                                <Link href="/technology" className="block mt-2 text-sm white text-white hover:underline">Technology</Link>
                                <Link href="/sports" className="block mt-2 text-sm white text-white hover:underline">Sports</Link>
                            </div>

                            {/* <div>
                                <h2 className="text-gray-300 uppercase dark:text-white">Contact</h2>
                                <a href="tel:+15266548965" className="block mt-2 text-sm white text-white hover:underline">+1 526 654 8965</a>
                                <a href="mailto:southsudanglobal@gmail.com" className="block mt-2 text-xs md:text-sm white text-white hover:underline">southsudanglobal@gmail.com</a>
                            </div> */}
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-white text-sm">
                        © 2023 Spillnation. All rights reserved •
                        <Link href="/terms-of-use" className="hover:underline"> Terms of Use</Link> •
                        <Link href="/privacy-policy" className="hover:underline"> Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};