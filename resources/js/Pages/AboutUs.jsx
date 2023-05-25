import React from 'react'
import Layout from './Component/Layout'

function AboutUs() {
    return (
        <div className='container max-w-screen-xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='md:w-1/2 px-5'>
                <h1 className='text-2xl font-semibold'>ABOUT US</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <p>South Sudan Global (SSG) is an online news leader focusing on South Sudan, Africa & Beyond.</p>

                    <p>South Sudan is a member of the geopolitical Africa and the World. South Sudan Global(SSG) majorly seeks to cover South Sudan news and/or gives rigorous analysis of its social, political and economic affairs and dynamics for promoting and harnessing the rule of law, peace and order, free press, and in shaping and achieving modern democracy. The concept of modern democracy and the rule of law concept, is the driving force leading to the birth of SSG. We are committed to shine light on the African continent and beyond in relations to South Sudan.</p>

                    <p>We’re guided by the principle of integrity and impartiality. It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial, multi-dimensional news or in-depth analyses as possible.</p>

                    <p>In order to not miss our real time updates, Subscribe Us, Like/follow Us on Facebook, and Follow Us on Twitter.</p>
                </div>
            </div>
            <div className='p-20 hidden md:block'>
                <img src="/images/logo.png" alt="South Sudan Global" className='w-full' />
            </div>
        </div>
    )
}

AboutUs.layout = page => <Layout children={page} />
export default AboutUs