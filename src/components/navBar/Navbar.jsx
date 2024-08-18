"use client"

import { links } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
// import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 text-slate-700'>
            <div className='flex justify-between items-center w-full md:w-auto'>
                <div className='text-xl md:text-2xl font-bold text-slate-500 font-mono'>
                    <Link href="/" className="text-slate-500">Digital A.</Link>
                </div>

                {/* Hamburger Menu Icon */}
                <button 
                    className='md:hidden flex items-center p-2 text-slate-500'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoMdMenu className='w-12 h-12' />
                </button>
            </div>

            {/* Menu Items */}
            <div className={`md:flex md:flex-row flex-col ${isOpen ? 'flex' : 'hidden'} mt-4 items-center justify-center md:justify-start`}>
                {/* <DarkModeToggle /> */}
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className={`text-lg py-2 px-4 ${path === link.url ? "text-blue-500 font-semibold" : "text-slate-400"}`}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
