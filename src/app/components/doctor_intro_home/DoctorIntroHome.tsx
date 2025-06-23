import Image from 'next/image'
import React from 'react'

function DoctorIntroHome() {
  return (
    <div className='w-full flex flex-col md:flex-row px-[10%] py-[5%]'>
      <div className='w-full md:w-2/5 flex flex-col justify-center'>
        <div className='relative rounded-4xl overflow-hidden pb-[120%]' >
          <Image src='/c2bbbd14aa551541484f8f74298dee147bcd86ed.png'
            alt='doctor_image' fill className='z-10 bottom-0 absolute object-center w-full h-full'></Image>
          <div className='absolute top-[15%] rounded-4xl w-full h-full bg-[#DBE4F5]'></div>
        </div>
      </div>
      <div className='w-full md:w-3/5 flex flex-col justify-center'>
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
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">🔹</span>
              <span><strong>Leading HoLEP Specialist:</strong> Advanced, minimally invasive prostate treatment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">🔹</span>
              <span><strong>Comprehensive Men’s Health:</strong> Expertise in BPH, ED, prostate cancer & male infertility.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">🔹</span>
              <span><strong>Dedicated Women’s Urology:</strong> Compassionate solutions for female-specific conditions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">🔹</span>
              <span><strong>Family Urological Support:</strong> Trusted care for all ages and general concerns.</span>
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