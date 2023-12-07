import React from 'react'
import { paketan } from './data'

const GridCard = () => {
    return (
        <div className='w-full grid grid-rows-2 grid-cols-4 gap-3  rounded-xl p-2'>
            {paketan.map((paket) =>{
                return (
                <div key={paket.id} className='bg-blue-400 h-50 text-center rounded-xl  p-2 cursor-pointer shadow duration-150 hover:scale-105 hover:shadow-md'>
                    <p className='text-white'>{paket.title}</p>
                    <p className='text-white'>{paket.price}</p>
                    <p className='text-white text-left'>&nbsp;&nbsp;&nbsp;{paket.desc}</p>
                    <p className='text-white text-left'>&nbsp;&nbsp;&nbsp;{paket.desc2}</p>
                    <p className='text-white text-left'>&nbsp;&nbsp;&nbsp;{paket.desc3}</p>
                    <p className='text-white text-left'>&nbsp;&nbsp;&nbsp;{paket.desc4}</p>
                    <p className='text-white pt-10'>{paket.const}</p>
                </div>
                )
                })}
        </div>
    )
}

export default GridCard