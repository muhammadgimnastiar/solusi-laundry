import React from 'react'
import { paketan } from './data'

const GridCard = () => {
    return (
        <div className='w-full grid grid-cols-4 gap-3  rounded-lg p-2'>
            {paketan.map((paket) =>{
                return (
                <div key={paket.id} className='bg-blue-500 h-40 text-center rounded-lg p-2 cursor-pointer   shadow duration-150 hover:scale-105 hover:shadow-md'>
                    <p>{paket.title}</p>
                    <p>{paket.price}</p>
                    <p>{paket.desc}</p>
                    <p className='pt-10'>{paket.const}</p>
                </div>
                )
                })}
        </div>
    )
}

export default GridCard