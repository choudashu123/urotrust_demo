import React from 'react'

function PrivateConsultCard() {
  return (
    <div className='overflow-y-auto h-2/3 w-2/3 lg:h-auto lg:w-1/2 absolute right-6 bottom-6 lg:right-12 lg:bottom-12 p-[2%] rounded-3xl bg-white'>
      <div className='break-words max-w-full flex flex-col lg:justify-center md:gap-4 justify-between px-3 py-[3%]'>
        <p className='text-xl md:text-2xl lg:text-3xl font-bold'>Just One Private Consult Today</p>
        <p className='text-md font-semibold md:text-xl'>Could Save Your 6+ Months of Delay</p>
        <p className='text-sm md:text-md'>Fast answers. Direct access. Personal clarity — all in just days, not months. <br />
          Whether you’re concerned, confused, or just tired of waiting, a single consultation
          could give you the reassurance and direction you’ve been missing.</p>
        <button className="w-fit bg-black text-white px-6 py-2 mb-2 md:px-12 md:py-3 rounded-full font-medium hover:bg-gray-800 transition">
          Book Your Consultation Now
        </button>
      </div>
    </div>

  )
}

export default PrivateConsultCard