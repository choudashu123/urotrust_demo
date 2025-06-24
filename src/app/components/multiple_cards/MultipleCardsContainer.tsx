import React from 'react'
import Image from 'next/image'

function MultipleCardsContainer() {
  return (
    <div className='w-full px-8'>
      <div className='w-full md:h-[450px] flex md:flex-row flex-col md:gap-2 gap-y-2 line-clamp-5 px-8 md:px-2'>

        {/* 1st column */}

        <div className='md:w-1/4 w-full flex flex-col h-full gap-3'>
          <div className='relative w-full md:h-[55%] h-[200px] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <Image src='/99ab7e6bf795dd49a1f6d83036228d0323447b02.png' alt='happy old man' fill className='rounded-3xl object-cover'></Image>
          </div>
          <div className='h-[45%]'>
            <div className='h-full bg-[#E6F2D5] flex flex-col items-center justify-center p-2 rounded-3xl transform transition duration-300 ease-in-out hover:scale-[1.03]'>
              <Image src='/8bd54c2bd141085c72f4d225f69572de2325db06.png' className='bg-white shadow rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='md:text-md text-sm font-semibold'>Rapid Access to Testing & Treatment</p>
              <p className='lg:text-sm text-xs text-gray-800 pt-2'>We fast-track diagnostic procedures so you get clarity quickly. Early testing means faster decisions and better outcomes.</p>
            </div>
          </div>
        </div>

        {/* 2nd column */}

        <div className='md:w-1/4 flex flex-col gap-3'>

          <div className='h-[50%] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='h-full bg-[#DBE4F5] flex flex-col items-center justify-center p-2 rounded-3xl'>
              <Image src='/b522cf50fbc91b4e008e1e7a11cab420fe8c7434.png' className='bg-white shadow rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='text-center md:text-md text-sm font-semibold'>Book Remote Consultation</p>
              <p className='lg:text-sm text-xs text-gray-800  pt-2'>Connect with leading urology specialists from the comfort of your home. Schedule appointments at your convenience—no travel or waiting rooms required.</p>
            </div>
          </div>
          <div className='h-[50%] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='h-full bg-[#F8F8F8] flex flex-col items-center justify-center p-2 rounded-3xl'>
              <Image src='/3555d1af4c7c406e5f76bda49c6b66630a6850ef.png' className='bg-white shadow rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='md:text-md text-sm font-semibold'>Personal Consultant Support</p>
              <p className='lg:text-sm text-xs text-gray-800  pt-2'>Connect directly with the highly qualified Dr Erol  who prioritizes your health, providing compassionate, expert-led care that puts you first.</p>
            </div>
          </div>
        </div>

        {/* 3rd column */}

        <div className='md:w-1/4 h-full w-fit flex flex-col gap-3'>

          <div className='h-[50%] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='relative overflow-hidden h-full bg-[#F8F8F8] flex flex-col items-center justify-center p-2 rounded-3xl'>
              <div className="absolute -left-2 -top-1/2 translate-y-3/5 text-[#DBE4F5] pointer-events-none">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 324.198 324.198"
                  className="w-40 h-40 rotate-[45deg]"
                  fill="currentColor"
                >
                  <g>
                    <rect x="251.107" y="54.698" width="54.197" height="5.967" />
                    <rect x="251.107" y="0" width="54.197" height="42.765" />
                    <rect x="18.894" y="0" width="54.197" height="42.765" />
                    <rect x="18.894" y="54.698" width="54.197" height="5.967" />
                    <path d="M162.099,324.198c-78.96,0-143.205-64.239-143.205-143.205V72.599h54.197v104.038
                            c0,49.078,39.93,89.014,89.008,89.014c49.083,0,89.008-39.936,89.008-89.014V72.599h54.197v108.394
                            C305.304,259.959,241.059,324.198,162.099,324.198z" />
                  </g>
                </svg>

              </div>

              <Image src='/4afbb2d12b134d23d27d8e86f3da9ab167db8b0e.png' className='z-10 bg-white shadow rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='md:text-md text-sm font-semibold z-10'>Seamless Coordination for Surgery</p>
              <p className='lg:text-sm text-xs text-gray-800 z-10 pt-2'>Your privacy is our priority. All consultations, reports, and treatments are handled with complete confidentiality and data security.</p>
            </div>
          </div>

          <div className='h-[50%] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='relative overflow-hidden h-full bg-[#F8F8F8] flex flex-col items-center justify-center p-2 rounded-3xl'>
              <div className="absolute -left-4 bottom-2/5 translate-y-3/5 text-[#E6F2D5] pointer-events-none">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 324.198 324.198"
                  className="w-50 h-50 rotate-[225deg]"
                  fill="currentColor"
                >
                  <g>
                    <rect x="251.107" y="54.698" width="54.197" height="5.967" />
                    <rect x="251.107" y="0" width="54.197" height="42.765" />
                    <rect x="18.894" y="0" width="54.197" height="42.765" />
                    <rect x="18.894" y="54.698" width="54.197" height="5.967" />
                    <path d="M162.099,324.198c-78.96,0-143.205-64.239-143.205-143.205V72.599h54.197v104.038
                              c0,49.078,39.93,89.014,89.008,89.014c49.083,0,89.008-39.936,89.008-89.014V72.599h54.197v108.394
                              C305.304,259.959,241.059,324.198,162.099,324.198z" />
                  </g>
                </svg>

              </div>
              <Image src='/c41a286fe030cdf54299be6671d0fcb9110b0ebf.png' className='bg-white shadow z-10 rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='md:text-md text-sm font-semibold z-10'>Confidential & Secure Care</p>
              <p className='lg:text-sm text-xs text-gray-800 z-10 pt-2 line-clamp-5'>If surgical intervention is needed, we handle it with speed and discretion. From scheduling to recovery, everything is managed smoothly.</p>
            </div>
          </div>
        </div>


        {/* 4th column */}

        <div className='md:w-1/4 w-fit h-full flex flex-col gap-3'>
          <div className='h-[45%] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='h-full bg-[#FEF1CB] flex flex-col items-center justify-center p-2 rounded-3xl'>
              <Image src='/b5182257481a636a4765ba95b40ef6648f498eed.png' className='bg-white shadow rounded-full' height={36} width={36} alt='container-icon'></Image>
              <p className='md:text-md text-sm font-semibold'>Direct Access to Expert Care</p>
              <p className='lg:text-sm text-xs text-gray-80-1 pt-2'>You’ll never feel alone in your health journey. Your assigned consultant guides you through every step, ensuring confidence in your care.</p>
            </div>
          </div>
          <div className='flex-grow w-full md:h-[55%] h-[200px] transform transition duration-300 ease-in-out hover:scale-[1.03]'>
            <div className='relative w-full h-full'>
              <Image src='/78f11931d8a5ea6a78ff6a53e518ee58ea0cb031.jpg' alt='happy old man' fill className='object-cover rounded-4xl'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleCardsContainer