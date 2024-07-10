'use client'
import { Menu, MessageSquareText, BadgeHelp, User, MessageSquare, Home, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const NavigationBar = ({title = "Home"}) => {
    const [is_open_menu, setIsOpenMenu] = useState(false)

    return (
        <>
            <nav className='bg-neutral-950 p-6 shadow-md flex justify-between'>
                <h1 className='text-white'>{title}</h1>
                <Menu className='text-white z-50' onClick={() => setIsOpenMenu(!is_open_menu)}/>
            </nav>

            <div className={'duration-500 bg-black w-[75%] max-w-[400px] h-[100%] fixed top-0 text-white pt-[5rem] z-10 ' +  (is_open_menu ? 'right-0' : 'right-[-100%]')}>
                <ul>
                    <li>
                        <Link href={'/'} className='flex gap-4 p-4 bg-neutral-900 hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <Home/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/login'} className='flex gap-4 p-4 mt-1 bg-neutral-900 hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <LogIn/>
                            <span>Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profile'} className='flex gap-4 p-4 mt-1 bg-neutral-900 hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <User/>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/global'} className='flex gap-4 p-4 mt-1 bg-neutral-900 hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <MessageSquare/>
                            <span>Chat</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='flex gap-4 p-4 mt-1 bg-neutral-900 hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <BadgeHelp/>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>

                <footer className='absolute bottom-6 text-center w-full text-neutral-800'>Version: 0.1.0</footer>
            </div>
        </>
    )
}