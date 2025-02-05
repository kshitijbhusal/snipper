import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center py-4 px-8  bg-zinc-400 text-black'>
        <div className='text-2xl font-bold '>
        <Link href={"/"}> <b><h1>Snipper</h1></b> </Link>
        </div>
        <div >
            <ul className='flex gap-4 items-center'>
                <Link href={"/about"} className='text-lg font-semibold'>About</Link>
                <Link href={"/create"}><Button>Create New</Button></Link>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Header