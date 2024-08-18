import Link from 'next/link'

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className='bg-green-500 rounded px-4 py-2 text-slate-100 font-medium active:bg-green-600 shadow'>{text}</button>
        </Link>
    )
}

export default Button