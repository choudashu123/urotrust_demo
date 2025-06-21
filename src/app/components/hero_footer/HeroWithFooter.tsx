import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaStar } from 'react-icons/fa';

const HeroWithFooter = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
        <Image
          src="/5e96ca8eb9d1789fca47da7de0ecfcd17aec633b.png"
          alt="Father and child"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
        <div className="absolute top-10 left-10 md:top-20 md:left-20 bg-white p-6 md:p-10 rounded-[50px] max-w-md shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready for Specialist Care<br />Without the Wait?</h2>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Discover expert-led care, delivered with precision, compassion, and complete discretion from the comfort of your own home
          </p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
            Book Your Consultation Now <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#dde5f5] px-6 py-12">
        <div className="max-w-7xl  flex flex-col lg:flex-row justify-between gap-10 text-sm">
          {/* Logo & Google Rating */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl font-bold text-black">UroTrust</h2>
            <div className="inline-flex items-center bg-white rounded-4xl shadow px-4 py-2">
              {/* Google Logo */}
              <Image src="/google.png" alt="Google" width={24} height={24} />

              {/* Rating Info */}
              <div className="flex flex-col">
                <p className="text-md font-semibold text-gray-800">Google Rating</p>
                <div className='flex justify-center items-center'>
                  <p className="text-sm text-yellow-500 font-bold">5.0</p>
                  <div className=" text-sm flex text-yellow-500">
                    {Array(5).fill(0).map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500">253 Reviews</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="text-gray-600 hover:text-black cursor-pointer" />
              <FaLinkedinIn className="text-gray-600 hover:text-black cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <div className='flex gap-16'>
              <h4 className="font-semibold text-black">Home</h4>
              <h4 className="font-semibold text-black">About Doctor</h4>
              <h4 className="font-semibold text-black">Conditions</h4>
              <h4 className="font-semibold text-black">Cyprus Surgery</h4>
            </div>
            <div>
              <button className="font-semibold bg-white text-black px-6 py-2 rounded-full mt-4 shadow hover:bg-gray-100 transition w-fit">
                Book Your Private Consultation
              </button>

            </div>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-gray-700">
            <h4 className="font-semibold text-black">Contact</h4>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Nicosia, Cyprus</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +447709538999</p>
            <p className="flex items-center gap-2"><FaEnvelope /> hi@urotrust.com</p>
          </div>
        </div>

        <p className="text-center text-xs mt-10 text-gray-500">© 2025 Viral Inbound</p>
      </footer>
    </div>
  );
};

export default HeroWithFooter;
