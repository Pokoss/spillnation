import React from 'react'
import Navbar from './Navbar'
import CookieConsent from './CookieConsent';
import { Footer } from './Footer';


export default function Layout({ children }) {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Navbar />

            <main className='min-h-screen'>
                {children}
            </main>

            <Footer />

            {!cookiesAccepted && <div className='absolute sticky bottom-16 md:bottom-8 rounded-mb transform transition-all duration-5000 ease-out'>
                <CookieConsent />
            </div>}
        </div>
    )
}
