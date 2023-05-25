import React from 'react'
import Layout from './Component/Layout'

function PrivacyPolicy() {
    return (
        <div className='container max-w-screen-md mx-auto flex flex-col md:flex-row py-16'>
            <div className='px-5 mx-auto'>
                <h1 className='text-2xl font-semibold'>PRIVACY POLICY</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <p>The information you provide to us in our platform is for the purpose of improving the services, your information is legally protected, and cannot be used for any other purpose.</p>
                </div>
            </div>
        </div>
    )
}

PrivacyPolicy.layout = page => <Layout children={page} />
export default PrivacyPolicy