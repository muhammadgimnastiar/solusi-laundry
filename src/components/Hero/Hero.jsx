import React from 'react'
import { Button } from '@material-tailwind/react';

function Hero() {
    return ( 
        <div className="bg-bg">
            <div className="container mx-auto p-4 lg:pt-20 lg:px-20">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 ">
                    <div >
                        <h1 className='font-inter font-bold text-3xl lg:text-6xl tracking-tight'>Hadir untuk memberikan <span className='text-primary-orange'>Solusi Laundry</span> anda</h1>
                        <h5 className='font-inter text-base mt-4 mb-8 lg:mt-12 lg-mb-20'>Solusi Laundry  hadir sebagai laundry service yang memahami dan siap membantu segala kebutuhan anda tentang laundry dengan selalu mengutamakan kualitas dengan pelayanan  yang ramah serta profesional bekerja sesuai SOP (Standard Operating Procedures)</h5>
                    </div>
                    <div className='bg-red-300'>
                        <Button color='yellow'>Pesan Sekarang</Button>
                        <Button variant='text'>Lihat Pesanan</Button>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 order-1">
                    <div><img src="./images/hero.png"  alt="" /></div>
                </div>

            </div>
        </div>
        </div>
        
     );
}

export default Hero;