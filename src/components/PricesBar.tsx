import { useRouter } from 'next/navigation'
import React from 'react'

export default function PricesBar() {
    const router = useRouter();
    return (
        <div className='absolute top-0 flex gap-10 text-xl text-white font-semibold mt-5'>
            <div onClick={()=>router.push('/spin')} className='bg-white/20 px-4 rounded-lg cursor-pointer'>Prize 1</div>
            <div onClick={()=>router.push('/spin2')} className='bg-white/20 px-4 rounded-lg cursor-pointer'>Prize 2</div>
            <div onClick={()=>router.push('/spin3')} className='bg-white/20 px-4 rounded-lg cursor-pointer'>Prize 3</div>
        </div>
    )
}
