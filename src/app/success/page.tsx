import React from 'react'
import check from '../../assets/checked.png'
import Image from 'next/image'

export default function page() {
  return (
      <div className='flex flex-col justify-center items-center h-full bg-white p-5'>
          <Image src={check} alt='success' className='w-20'/>
        <h1 className='text-4xl font-semibold text-green-600 pt-2'>Success</h1>
        <p className='text-2xl text-center'>Your form has been submitted successfully !!</p>
    </div>
  )
}
