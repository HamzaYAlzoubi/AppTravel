'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import LogoutButton from '../auth/LogoutButton';
import { RiHomeLine, RiMapPinLine, RiUserLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';

type SidebarProps = {
    name?: string;
    email?: string;
    img?: string;
};


export default function Sidebar({ name, email, img }: SidebarProps) {

    const pathname = usePathname();

    const linkClass = (path: string) =>
        `hover:text-gray-300 rounded-sm p-2 flex items-center space-x-2 ${pathname === path ? 'bg-blue-500 text-white' : ''
        }`;
        
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 text-2xl bg-white rounded-md shadow"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FiMenu />
            </button>


            <aside
                className={`
                fixed top-0 left-0 h-screen w-64 text-gray-800 bg-white p-4 z-50 transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:block
            `}
            >
                <div className="flex justify-center items-center gap-1.5 mb-3 text-[20px] font-bold p-2">
                    <img src="/assets/icons/logo.svg" alt="Tourvisto Logo" />
                    Tourvisto
                </div>
                <hr className='p-2' />

                <div className='flex flex-col justify-between h-150'>
                    <nav className="flex flex-col space-y-4">
                        <Link href="/dashboard" className={linkClass('/dashboard')}>
                            <RiHomeLine className="mr-1.5" />
                            <span>Dashboard</span>
                        </Link>

                        <Link href="/dashboard/allusers" className={linkClass('/dashboard/allusers')}>
                            <RiUserLine className="mr-1.5" />
                            <span>All Users</span>
                        </Link>

                        <Link href="/dashboard/alltrips" className={linkClass('/dashboard/alltrips')}>
                            <RiMapPinLine className="mr-1.5" />
                            <span>All Trips</span>
                        </Link>

                    </nav>
                    <div className='flex justify-around items-center'>
                        <img src={img} alt="profile_img"
                        className="rounded-full w-10"
                        />
                        <div className='flex flex-col justify-center '>
                            <div className='font-bold'>{name}</div>
                            <div className='text-gray-400 w-30 overflow-x-hidden'>{email}</div>
                        </div>
                    <LogoutButton url="/loginadmin" />
                    </div>
                </div>

            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.1)] z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

        </>
    );
}
