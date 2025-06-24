import React from 'react'
import Image from 'next/image'
import { Check} from 'lucide-react'

function SymptomsHome() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-[10%] bg-[#F8F8F8]">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug ml-10 md:ml-16">
                        Experiencing Symptoms?<br />
                        Find Your Answers Here
                    </h2>

                    <ul className="space-y-3 text-lg text-gray-700 ml-10 md:ml-16">
                        <li className="flex items-center gap-2">
                            <Check className='bg-[#DBE4F5] rounded-full p-1'></Check> <span>Understand Your Symptoms Better</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className='bg-[#DBE4F5] rounded-full p-1'></Check> <span>Explore Comprehensive Urology Conditions</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className='bg-[#DBE4F5] rounded-full p-1'></Check> <span>Learn About Treatments & Next Steps</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className='bg-[#DBE4F5] rounded-full p-1'></Check> <span>Find Expert Insights from Dr. Erol</span>
                        </li>
                    </ul>

                    <button className="bg-black text-white px-12 py-3 rounded-full font-medium hover:bg-gray-900 transition ml-10 md:ml-16">
                        Explore All Conditions
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative lg:w-1/2 w-full">
                    <Image
                        src="/dbb97673c62d245119735e02cfaac3d4f9928900.jpg"
                        alt="Clinic waiting room"
                        height={700}
                        width={700}
                        className="rounded-3xl"
                    />

                    {/* Overlay Box */}
                    <div className="absolute top-1/2 -translate-y-1/2 bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2 md:-ml-16">
                        {/* Icon Group */}
                        <div className='flex flex-col items-center gap-3 py-3'>
                            <div className="flex gap-1">
                                <span className="bg-[#FEF1CB] p-1 rounded-full"><Image src="/87c8253d68e0677a7af6cbf8fa53cfba98233050.png" alt='no_delay' height={24} width={24}></Image></span>
                                <span className="bg-[#E6F2D5] p-1 rounded-full"><Image src="/87c8253d68e0677abhf6cbf8fa53cfba98233050.png" alt='fast' height={24} width={24}></Image></span>
                            </div>
                            <div className="text-sm font-semibold text-gray-500">Dedicated 24/7<br />Patient Concierge</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SymptomsHome