import Link from 'next/link'

const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio"
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog"
        },
        {
            id: 4,
            title: "About",
            url: "/about"
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact"
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard"
        }
    ];


    return (
        <div className='mt-6 flex justify-between w-3/4 mx-auto'>
            <div className='text-xl font-bold text-slate-500'>
                <Link href="/" >iamsujon</Link>
            </div>

            <div className='space-x-4'>
                {
                    links.map((link) => (
                        <Link key={link.id} href={link.url} >{link.title}</Link>
                    ))
                }
                <button className='py-1 px-4 rounded bg-blue-500 text-white active:bg-blue-600'>Logout</button>
            </div>
        </div >
    )
}

export default Navbar