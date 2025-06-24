import React from 'react'
import { Check } from 'lucide-react';
import Image from 'next/image';

function YourTerms() {
  const items = [
    'Consulted, Tested, and Treated within days - not months',
    'Direct Access to Dr. Erol, No Referrals',
    'Streamlined Diagnostics & Blood Tests',
    'Advanced Surgery Arranged Promptly with Full Support.',
  ];
  return (
    <div className='w-full py-[5%]'>
      <div className='relative w-full md:pb-[40%] pb-[60%] bg-red-700'>
        <Image src='/a76af26cbed28fcd6b3428e14b86755c3d66d8be_result.png' alt="Urology" fill className='absolute top-0 left-0 object-cover w-full h-full'/>
        <div className="absolute left-[10%] top-[10%] bg-white p-6 md:p-8 md:h-fit h-[300px] rounded-3xl w-2/5 md:w-auto shadow-lg mx-auto space-y-6 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Your Urology Care. On Your Terms
          </h2>

          <ul className="space-y-2 md:space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#DBE4F5] text-gray-800 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-gray-800 truncate">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition inline-flex items-center gap-2">
            Book Your Consultation Now
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default YourTerms