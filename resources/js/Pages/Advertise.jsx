import React from 'react'
import Layout from './Component/Layout'
import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useForm } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';

function Advertise() {
    const { data, setData, processing, post, reset, errors } = useForm();

    const handleSubmit = e => {
        e.preventDefault();
        post('/advertise', {
            preserveScroll: true, preserveState: true,
            onSuccess: () => {
                toast.success('We have received you request, we shall contact you shortly')
                reset();
                setData({})
            }
        });
    }

    return (
        <div className='container max-w-screen-xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='md:w-1/2 px-5'>
                <h1 className='text-2xl font-semibold'>ADVERTISE WITH US</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <Card color="transparent" shadow={false} className=''>
                        <Typography color="gray" className="mt-1 font-normal">
                            Fill in your details and we will contact you soon.
                        </Typography>
                        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <div>
                                    <Input size="md" label="Name" value={data.name ?? ''} onChange={e => setData('name', e.target.value)} error={errors.name} />
                                    {errors.name && <span className='text-xs text-red-500'>{errors.name}</span>}
                                </div>
                                <div>
                                    <Input size="md" label="Email" value={data.email ?? ''} onChange={e => setData('email', e.target.value)} error={errors.email} />
                                    {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
                                </div>
                                <div>
                                    <Input size="md" label="Telephone" value={data.telephone ?? ''} onChange={e => setData('telephone', e.target.value)} error={errors.telephone} />
                                    {errors.telephone && <span className='text-xs text-red-500'>{errors.telephone}</span>}
                                </div>
                                <div>
                                    <Textarea size="md" label="Message" value={data.message ?? ''} onChange={e => setData('message', e.target.value)} error={errors.message} />
                                    {errors.message && <span className='text-xs text-red-500'>{errors.message}</span>}
                                </div>
                            </div>
                            <Button type='submit' disabled={processing} className="mt-6 bg-primary hover:bg-primary-hover" fullWidth>
                                SEND
                            </Button>
                            <Typography color="gray" className="mt-4 font-normal">
                                Spillnation is a website that updates people about the events and entertainmet related stuff happening around Uganda
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

Advertise.layout = page => <Layout children={page} />
export default Advertise