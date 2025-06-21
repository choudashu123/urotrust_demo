import React from 'react'

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
                            ✅ <span>Understand Your Symptoms Better</span>
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ <span>Explore Comprehensive Urology Conditions</span>
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ <span>Learn About Treatments & Next Steps</span>
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ <span>Find Expert Insights from Dr. Erol</span>
                        </li>
                    </ul>

                    <button className="bg-black text-white px-12 py-3 rounded-full font-medium hover:bg-gray-900 transition ml-10 md:ml-16">
                        Explore All Conditions
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative lg:w-1/2 w-full">
                    <img
                        src="/dbb97673c62d245119735e02cfaac3d4f9928900.jpg"
                        alt="Clinic waiting room"
                        className="w-full h-auto rounded-3xl"
                    />

                    {/* Overlay Box */}
                    <div className="h-40 w-60 absolute top-1/2 -translate-y-1/2 bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2 md:-ml-16">
                        {/* Icon Group */}
                        <div className='flex flex-col'>
                            <div className="flex gap-1">
                                <span className="bg-yellow-100 p-1 rounded-full">🎧</span>
                                <span className="bg-green-100 p-1 rounded-full">🕐</span>
                                <span className="bg-blue-100 p-1 rounded-full">👤</span>
                            </div>
                            <div className="text-sm font-medium mt-8">Dedicated 24/7<br />Patient Concierge</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SymptomsHome