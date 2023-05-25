import React from 'react'
import Layout from './Component/Layout'

function TermsOfUse() {
    return (
        <div className='container max-w-screen-md mx-auto flex flex-col md:flex-row py-16'>
            <div className='px-5 mx-auto'>
                <h1 className='text-2xl font-semibold'>TERMS OF SERVICE</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <p>This section governs the use of the services and products we offer.  Herein, “we”refers to South Sudan Global. The access or use of our services and our products mean you have consented or you have agreed to be legally bound by all our terms of use. For better experience and performance, we may make changes to the services or products at any time.</p>
                </div>
            </div>
        </div>
    )
}

TermsOfUse.layout = page => <Layout children={page} />
export default TermsOfUse