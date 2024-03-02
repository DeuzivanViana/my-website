import { Menu } from 'lucide-react'
import Link from 'next/link'

export const NavigationBar = () => {
    return (
        <>
            <nav className='bg-neutral-950 p-4 shadow-md flex justify-between'>
                <h1 className='text-white'>Home</h1>
                <Menu className='text-white'/>
            </nav>
        </>
    )
}