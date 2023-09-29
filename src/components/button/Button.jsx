import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className='bg-green-500 rounded px-4 py-1 text-slate-100 font-medium active:bg-green-600'>{text}</button>
        </Link>
    )
}

export default Button