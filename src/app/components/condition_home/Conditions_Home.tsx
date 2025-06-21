'use client'
import React, { useState } from 'react'
import Conditions_Home_Left from './Conditions_Home_Left'
import Conditions from './Conditions_Home_Right'

function Conditions_Home() {
    const [selectedCategory, setSelectedCategory] = useState("Urinary Issues");
    return (
        <div className='max-w-full ml-10 mr-10 md:ml-16 lg:ml-24 lg:mr-36 md:mr-24 p-4'>
            <div className='w-full'>
                <div className=''>
                    <p className='text-4xl font-bold'>Conditions</p>
                    <p className='text-gray-400 mb-10 md:mb-16'>From common concerns to complex conditions, Dr. [Surname] offers advanced, personalized care across all aspects of urological health.
                        Explore his key areas of expertise below.</p>
                </div>
                <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 flex flex-col md:flex-row'>
                    <div className='col-span-1 row-span-1'>
                        <Conditions_Home_Left 
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />

                    </div>
                    <div className='col-span-1 row-span-1'>
                        <Conditions selectedCategory={selectedCategory} />
                    </div>
                </div>
                
                <div className='flex flex-col items-center justify-center pt-[2%] mt-4 md:mt-6'>
                    <p className='text-xl text-gray-600'>Not sure what’s causing your symptoms?</p>
                    <button className='bg-black rounded-full px-4 py-2 text-white mt-[2%]'>Book Your Consultation Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Conditions_Home