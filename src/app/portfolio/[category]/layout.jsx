import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-7xl font-bold my-6 text-slate-600'>
                Our works
            </h1>
            {children}
        </div>
    )
}

export default layout