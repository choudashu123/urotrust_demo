import React from 'react'
import ProcessCard from './ProcessCard'
import ProcessCardInfo from './ProcessCardInfo'
import Image from 'next/image'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';


function ProcessHome() {
  return (
    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 h-full w-full py-[5%] lg:px-24 bg-[#FBFAF9]'>
      <div className='col-span-1 row-span-1 md:row-span-2 p-3'>
        <div className='relative w-full min-h-[400px] md:h-[500px] lg:h-[500px]'>

          <div className="absolute z-10 bottom-[15%] left-[2%] bg-white p-6 rounded-2xl shadow max-w-sm">
            {/* Quote icon */}
            <FaQuoteLeft className="text-2xl text-black mb-3" />

            {/* Testimonial text */}
            <p className="text-sm text-gray-900 leading-relaxed">
              After a very good surgery, we left the hospital in less than 2 days, clean and healthy.
              Thank you for your hands and effort.
            </p>

            {/* User info */}
            <div className="flex items-center gap-3 mt-4">
              {/* User avatar initials */}
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm">
                AS
              </div>

              {/* Name and stars */}
              <div>
                <div className="flex items-center text-yellow-500 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-black font-medium">Aysen Sakalli</p>
              </div>
            </div>
          </div>

          <Image src='/21ee6f51f421625fb858da73523ad5b217e239ef_result.jpg' className='rounded-3xl' alt='yoga_girl' fill></Image>
        </div>
      </div>
      <div className='w-full h-full col-span-1 row-span-2 p-3'>
        <ProcessCardInfo />

      </div>

    </div>
  )
}

export default ProcessHome