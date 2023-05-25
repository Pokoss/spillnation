import React, { useState } from 'react';

const CookieConsent = () => {
    const [show, setShow] = useState(true);
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    const handleAccept = () => {
        // Store user's acceptance of cookies in local storage
        localStorage.setItem('cookiesAccepted', true);
        setShow(false);
    };

    const handleClose = () => {
        setShow(false);
    };


    return (
        <>
            {show && (
                <div className="bg-gray-100 flex items-center justify-center px-5 py-5 relative">
                    <section className="w-full p-5 lg:px-24 absolute top-0 bg-gray-200">
                        <div className="md:flex items-center -mx-3">
                            <div className="md:flex-1 px-3 mb-5 md:mb-0">
                                <p className="text-center md:text-left text-gray-600 text-xs leading-tight md:pr-12">
                                    We use cookies to improve your online experience. At any time, you can go to settings in your browser and manage your cookies settings.
                                    </p>
                            </div>
                            <div className="px-3 text-center">
                                <button onClick={handleAccept} className="py-2 px-8 bg-primary hover:bg-primary text-white rounded font-bold text-sm shadow-xl">
                                    GOT IT!
                                </button>
                            </div>
                        </div >
                    </section >
                    <dialog id="cookiesModal" className="h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0">
                        <div className="flex flex-col w-full h-auto">
                            <div className="flex w-full h-auto items-center px-5 py-3">
                                <div className="w-10/12 h-auto text-lg font-bold">
                                    Cookie settings
                                </div>
                                <div className="flex w-2/12 h-auto justify-end">
                                    <button className="cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800">
                                        <i className="mdi mdi-close-circle-outline text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                                <div className="flex-1">
                                    <p>Strictly necessary cookies</p>
                                </div>
                                <div className="w-10 text-right">
                                    <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                                </div>
                            </div>
                            <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                                <div className="flex-1">
                                    <p>Cookies that remember your settings</p>
                                </div>
                                <div className="w-10 text-right">
                                    <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                                </div>
                            </div>
                            <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                                <div className="flex-1">
                                    <p>Cookies that measure website use</p>
                                </div>
                                <div className="w-10 text-right">
                                    <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                                </div>
                            </div>
                            <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                                <div className="flex-1">
                                    <p>Cookies that help with our communications and marketing</p>
                                </div>
                                <div className="w-10 text-right">
                                    <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                                </div>
                            </div>
                            <div className="flex w-full px-5 py-3 justify-end">
                                <button className="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl">Save settings</button>
                            </div>
                        </div >
                    </dialog >
                </div >
            )}
        </>
    );
};

export default CookieConsent;
