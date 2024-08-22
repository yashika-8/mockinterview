"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path)

    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <Image  src={'/logo.svg'} width={80} height={100} alt='logo'/>
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard'&&'text-purple-700'}
                `}>Dashboard</li>
            <li className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/question'&&'text-purple-700'}
                `}>Question</li>
            <li className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/upgrade'&&'text-purple-700'}
                `}>Upgrade</li>
            <li className={`hover:text-purple-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/how'&&'text-purple-700'}
                `}>How it works</li>
        </ul>
        <UserButton/>
    </div>
  );
}

export default Header;
