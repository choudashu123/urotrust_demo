import Image from 'next/image'
import React from 'react'
import { UserCheck, Cross, Venus, BedDouble, Check, ShieldCheck } from 'lucide-react'

function DoctorIntroHome() {
  return (
    <div className='w-full flex flex-col md:flex-row px-[10%] md:pr-20 py-[5%]'>
      <div className='w-full md:w-3/10 flex flex-col justify-center'>
        <div className='relative rounded-[50px] overflow-hidden md:pb-[170%] pb-[100%]' >
          <div className='absolute z-10 md:bottom-0 left-0 right-0 top-0 px-4 pr-6'>

            <Image src='/c2bbbd14aa551541484f8f74298dee147bcd86ed.png'
              alt='doctor_image' width={1000} height={1000} className=' bottom-0 object-cover w-full h-full'></Image>
          </div>
          <div className='absolute right-[2%] top-1/3 z-12 p-2 flex flex-col items-center bg-white rounded-3xl'>
            {/* Outer light green circle */}
            <div className="w-10 h-10 rounded-full bg-[#E9F4DB] flex items-center justify-center">
              {/* Inner gray circle with white check */}
              <div className="w-6 h-6 rounded-full bg-[#A8A8A8] flex items-center justify-center">
                <Check size={16} className="text-white" strokeWidth={3} />
              </div>
            </div>
            <div>
              <p className='text-sm'><strong>Experience</strong></p>
              <p className='text-xs text-center'>25+ Years</p>
            </div>

          </div>
          <div className='z-12 flex absolute justify-center gap-1 bg-white p-2 top-1/2 left-0 rounded-2xl'>
            <div className='p-1'>
              <Image src='/54c741c2da1d7efb3c6766344249c217d76f941b (1).png' className='bg-[#E6F2D5] rounded-full' alt='doctor helps' height={24} width={24} />
            </div>

            <div className=''>
              <p className='text-sm font-semibold'>HoLEP Surgeries</p>
              <p className='text-xs'>200+</p>
            </div>
          </div>
          <div className='z-12 flex absolute justify-center gap-1 bg-white p-2 bottom-1/5 right-0 rounded-2xl'>
            <div className='p-1 m-1 rounded-full bg-[#E6F2D5] flex items-center'>
              <ShieldCheck className='text-gray-600 bg-[#E6F2D5]' />
            </div>

            <div className=''>
              <p className='text-sm font-semibold'><strong>Trusted</strong><br />
                by 5000+ <br />patients worldwide</p>
            </div>
          </div>
          <div className='absolute top-[15%] rounded-4xl w-full h-full bg-[#DBE4F5]'></div>
        </div>
      </div>
      <div className='w-full md:w-7/10 flex flex-col justify-center mt-[4%]'>
        <section className="px-4 py-8 max-w-3xl mx-auto text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Dr. James Wilson</h1>

          <div className="text-gray-500 text-sm space-y-3">
            <p>
              With 25+ years’ experience and 3000+ successful procedures (including 200+ HoLEP surgeries), Dr. Ucaner offers trusted expertise in prostate health, men’s and women’s urology, fertility solutions, and family care. Access private online consultations and fast-tracked surgical options in Cyprus.
            </p>
            <p>
              Dr. Ucaner provides world-className, personalized care across all aspects of urological health, serving men, women, and children.
            </p>
          </div>

          <ul className="mt-6 space-y-4 text-sm sm:text-base">
            <li className="flex items-center gap-2 ">
              <span className="text-blue-500 mt-1"><UserCheck className='bg-[#DBE4F5] text-gray-500 h-8 w-8 p-1 rounded-full' /></span>
              <span><strong>Leading HoLEP Specialist:</strong> Advanced, minimally invasive prostate treatment.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 mt-1"><Cross className='bg-[#DBE4F5] text-gray-500 h-8 w-8 p-1 rounded-full' /></span>
              <span><strong>Comprehensive Men’s Health:</strong> Expertise in BPH, ED, prostate cancer & male infertility.</span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-blue-500 mt-1"><Venus className='bg-[#DBE4F5] text-gray-500 h-8 w-8 p-1 rounded-full' /></span>
              <span><strong>Dedicated Women’s Urology:</strong> Compassionate solutions for female-specific conditions.</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-blue-500 mt-1"><BedDouble className='bg-[#DBE4F5] text-gray-500 h-8 w-8 p-1 rounded-full' /></span>
              <p><strong>Family Urological Support:</strong> Trusted care for all ages and general concerns.</p>
            </li>
          </ul>

          <div className="mt-6">
            <a href="#"
              className="inline-flex items-center px-6 py-3 bg-[#E6F2D5] text-black font-medium rounded-full hover:bg-green-200 transition">
              Learn more about Dr Erol Ucaner
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

      </div>

    </div>
  )
}

export default DoctorIntroHome