import React from 'react'
import '../../assets/css/tailwind.css'
import '../../index.css'
import GridCard from './GridCard'

function Paket() {
    return (
        <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col justify-center items-center bg-blue-900 rounded-lg p-2 h-20 mt-10 cursor-pointer shadow duration-150 hover:scale-105 hover:shadow-md'>
            <p className='text-2xl font-bold text-white'>Pilihan Paket</p>
        </div>
        <div className='w-full bg-blue-400 rounded-lg p-2 my-5 justify-center cursor-pointer shadow duration-150 hover:scale-105 hover:shadow-md'>
            <div className='flex flex-col items-start'>
            <p className='px-2 pt-2 text-2xl font-bold'>Paket Bulanan</p>
            <p className='px-2 text-xl font-semibold'>Rp. 100.000</p>
            <ul className='list-disc flex flex-col px-10 pt-20 pb-5 items-start'>
            <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, provident.</li>
            <li >Lorem ipsum dolor,.</li>
            <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, provident.</li>
            <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, provident.</li>
            </ul>
        </div>
        </div>
        <div>
            <GridCard  />
        </div>
        </div>
    )
}

export default Paket
