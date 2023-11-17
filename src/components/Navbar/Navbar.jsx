import React from 'react'
import {Link} from 'react-router-dom'

// import styling dari tailwind
import '../../assets/css/tailwind.css'

function Navbar() {
    return ( 
        <nav className='py-3 px-4'>
            <div className="container mx-auto" >
                <div className="flex justify-between">
                    <img src="/logo.png" className='w-24' alt="" />
                    <img src="/icons/toggle.svg" alt="" />
                </div>
                

            </div>
        </nav>
     );
}

export default Navbar;