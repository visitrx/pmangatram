'use client'
import { usePathname, useRouter,  } from 'next/navigation'
import React from 'react'

export default function PricesBar() {
    const router = useRouter();

    const path = usePathname();


    return (
        <div className='absolute top-0 flex gap-10 text-xl font-semibold mt-5'>
            <div onClick={() => router.push('/spin')} className={` ${path == "/spin" ? "bg-white":"bg-white/50"} hover:bg-white/60 px-4 rounded-lg cursor-pointer `}>Prize 1</div>
            <div onClick={() => router.push('/spin2')} className={` ${path == "/spin2" ? "bg-white":"bg-white/50"} hover:bg-white/60 px-4 rounded-lg cursor-pointer`}>Prize 2</div>
            <div onClick={() => router.push('/spin3')} className={` ${path == "/spin3" ? "bg-white":"bg-white/50"} hover:bg-white/60 px-4 rounded-lg cursor-pointer`}>Prize 3</div>
        </div>
    )
}
