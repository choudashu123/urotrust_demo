import Image from 'next/image'
import React from 'react'
import PrivateConsultCard from './PrivateConsultCard'

function PrivateConsult() {
  return (
    <div className='py-[5%]'>
      <div className='w-full h-auto lg:w-full lg:h-[550px] md:w-full md:h-[450px]'>
        <div className='relative w-full h-full min-h-[350px]'><Image src='/5cc794162a2367fb9b730bc6de6d0751f5b330df.png'
        alt='doctor_image' fill objectFit='cover'></Image>

        <PrivateConsultCard />

        </div>
      </div>
    </div>
  )
}

export default PrivateConsult