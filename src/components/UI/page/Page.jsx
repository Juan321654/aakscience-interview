import React from 'react';
import './page.css'

function Page({ children }) {
    return (
        <div className='page-container'>
            {children}
        </div>
    )
}

export default Page