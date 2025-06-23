import React from 'react'
import Image from "next/image";


function EnlargedProstateHome() {
  return (
    <div className="bg-[#f9f9f9] w-full py-12 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 max-h-[400px] overflow-hidden rounded-[50px]">
          <Image
            src="/9ed054a85d0202b8b81b21eb6de574584f92027b.jpg"
            alt="Doctor with Stethoscope"
            width={500}
            height={500}
            className="rounded-[50px] object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug text-gray-900">
            Diagnosed with Enlarged Prostate <br /> and Need HoLEP?
          </h2>
          <p className="text-gray-700 text-lg mb-2">Bypass UK waits and referrals.</p>
          <p className="text-gray-700 text-md mb-6">
            Book immediate, expert HoLEP surgery with Dr. Erol in beautiful Cyprus. Our concierge
            service covers accommodation, personalized meals, and transportation, ensuring your
            comfort and seamless journey.
          </p>

          {/* CTA Button */}
          <button className="bg-[#e7ecff] text-black font-medium px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">
            Book Your Fast-Track HoLEP Surgery Now
          </button>
        </div>
      </div>

      {/* Background U-shape SVG */}
      <div className="absolute hidden lg:block w-[700px] h-[700px] -right-24 -bottom-24 opacity-20 z-0">
        <svg
          viewBox="0 0 324.198 324.198"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#D4EDB7] rotate-[45deg]"
          fill="currentColor"
        >
          <g>
            <rect x="251.107" y="54.698" width="54.197" height="5.967" />
            <rect x="251.107" y="0" width="54.197" height="42.765" />
            <rect x="18.894" y="0" width="54.197" height="42.765" />
            <rect x="18.894" y="54.698" width="54.197" height="5.967" />
            <path d="M162.099,324.198c-78.96,0-143.205-64.239-143.205-143.205V72.599h54.197v104.038
              c0,49.078,39.93,89.014,89.008,89.014c49.083,0,89.008-39.936,89.008-89.014V72.599h54.197v108.394
              C305.304,259.959,241.059,324.198,162.099,324.198z"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default EnlargedProstateHome
