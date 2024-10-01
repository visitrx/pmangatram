'use client';

import Success from '@/components/Success';
import check from '../../assets/checked.png'
import Image from 'next/image'
import { Suspense } from 'react';


function SuccessFallback() {
    return <>
        <Image src={check} alt='success' className='w-20 -mt-20' />
        <h1 className='text-4xl font-semibold text-green-600 pt-2 pb-6'>Success</h1></>
}

export default function page() {

    return (
        <div className='flex flex-col justify-center items-center h-full bg-white p-5'>
            <Suspense fallback={<SuccessFallback />}>
                <Success/>
            </Suspense>
        </div>
    )
}
