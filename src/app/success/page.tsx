'use client'
import React from 'react'
import check from '../../assets/checked.png'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const languageList: { [key: string]: { message: string } } = {
    English: {
        message: "Your participation number is - "
    },
    Hindi: {
        message: "आपकी भागीदारी संख्या है - "
    },
    Bangla: {
        message: "আপনার অংশগ্রহণ নম্বর হল - "
    },
    Telugu: {
        message: "మీ పాల్గొనే సంఖ్య - "
    }
}

export default function Success() {
    let language = "English";

    const searchParams = useSearchParams();

    const number = searchParams.get('number');
    const lang = searchParams.get('language');
    if (lang && lang in languageList) {
        language = lang;
    }

    return (
        <div className='flex flex-col justify-center items-center h-full bg-white p-5'>
            <Image src={check} alt='success' className='w-20 -mt-20' />
            <h1 className='text-4xl font-semibold text-green-600 pt-2 pb-6'>Success</h1>
            <div className='text-2xl text-center'>{languageList[language]?.message} <div className='font-bold text-3xl'>{number}</div></div>
        </div>
    )
}
