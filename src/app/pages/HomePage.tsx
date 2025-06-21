import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { Download, Sparkles, MoveRight, CalendarClock } from 'lucide-react'
import SymptomsHome from '../components/SymptomsHome';
import Conditions_Home from '../components/condition_home/Conditions_Home';
import PrivateConsult from '../components/private_consult/PrivateConsult';
import ProcessHome from '../components/process_home/ProcessHome';
import DoctorIntroHome from '../components/doctor_intro_home/DoctorIntroHome';
import TestimonialSlider from '../components/testimonial/TestimonialSlider';
import YourTerms from '../components/urology_on_your_terms/YourTerms';
import MultipleCards from '../components/strip_of_multiple-cards/MultipleCards';
import { FaStar } from 'react-icons/fa';
import EnlargedProstateHome from '../components/enlarged_prostate/EnlargedProstateHome';
import PatientStoriesHome from '../components/patient_stories/PatientStoriesHome';
import WhyChooseUs from '../components/choose_us/WhyChooseUs';
import FaqSection from '../components/faq/FaqSection';
import HeroWithFooter from '../components/hero_footer/HeroWithFooter';


function HomePage() {
    return (
        <>
            <div className="w-full h-[90vh] flex px-[3%]">
                <div className="flex flex-col w-2/3 overflow-y-auto scroll-true text-white">
                    <Navbar />
                    <div className='flex flex-col justify-between pl-[5%] h-full'>
                        <div className='text-black'>
                            <div className='font-bold md:text-4xl text-2xl mt-8 sm:mt-10'>
                                Get Expert <p> Uroglogy Care in Days</p>
                                <p className='inline-flex items-center font-bold text-black mt-1'><span className='text-5xl'>✪</span>
                                    <span className='bg-[#E6F2D5] px-2 py-1 rounded-2xl'>Not Months</span></p>
                            </div>
                            <div className='text-sm sm:text-md lg:w-2/3 w-full px-2 md:p-0 sm:mt-5 mt-3'>
                                One private consultation could save you 6+ months of waiting.
                                Get fast answers and direct access to a leading urologist,
                                with seamless pathways to advanced surgery in Cyprus <span className='font-bold'>– no
                                    referrals, no delays.</span>
                            </div>
                            <button className='flex text-white sm:text-lg text-sm items-center bg-black px-5 py-2 rounded-3xl mt-3 sm:mt-8'>Book Your Consultation Now <MoveRight className='ml-3'></MoveRight> </button>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                    <Image src="/79959c8bc6240c7404b01f3dd34b70c909b33fe3.jpg" width={64}
                                        height={64} alt='stacked_avatar' className='h-8 w-8 md:w-12 md:h-12 rounded-full border-2 border-white'></Image>
                                    <Image src="/4b71756b2dfdef5d27bf29ac91dee569bdec2870.jpg" width={64}
                                        height={64} alt='stacked_avatar' className='h-8 w-8 md:w-12 md:h-12 rounded-full border-2 object-cover border-white -ml-4'></Image>
                                    <Image src="/02c01374bbcbfccb56075b24c2be07cbb8fc3ab0.jpg" width={64}
                                        height={64} alt='stacked_avatar' className='h-8 w-8 md:w-12 md:h-12 rounded-full border-2 object-cover border-white -ml-4'></Image>
                                    <Image src="/df05f9327f8ab8f6bfb2709edbbad9a7e2393f4c.jpg" width={64}
                                        height={64} alt='stacked_avatar' className='h-8 w-8 md:w-12 md:h-12 rounded-full border-2 object-cover border-white -ml-4'></Image>
                                </div>
                                <div className='ml-2'>
                                    <p className='text-gray-600'>Trusted By</p>
                                    <p className='text-gray-900 font-bold'>5000+ happy patients</p>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <p className='bg-[#DBE4F5] text-black px-3 py-2 rounded-2xl font-semi-bold'>Explore Fast-Tracked Surgery in Cyprus</p>
                                <button><Download className='text-black bg-[#DBE4F5] rounded-full h-8 w-8 p-1 ml-2'></Download></button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="w-1/3 relative mt-5 mr-5">
                    <div className="z-10 absolute right-0 top-1/2 translate-x-1/4 bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2">
                        {/* Icon Group */}
                        <div className='flex flex-col items-center'>
                            <div className="flex gap-1">
                                <img src='/2c65e6d8a22435d1bc0cae21c211412a4fa7b4a0.png' className='h-10 w-10 bg-[#DBE4F5] rounded-full'></img>
                            </div>
                            <div className="text-sm text-gray-500 font-bold">Dedicated 24/7<br />Patient Concierge</div>
                        </div>
                    </div>
                    <div className="z-10 absolute top-1/3 -translate-x-1/2 bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2">
                        {/* Icon Group */}
                        <div className='flex flex-col items-center'>
                            <div className="flex gap-1">
                                <img src='/5fca937cc618163c71814d4739c7f3f63c4e9cf6.png' className='h-10 w-10 bg-[#E6F1D4] rounded-full'></img>
                                <CalendarClock className='bg-yellow-100 h-10 w-10 p-2 rounded-full'></CalendarClock>
                            </div>
                            <div className="text-sm text-gray-500 font-bold">HoLep Surgery <br />Without Delays</div>
                        </div>
                    </div>
                    <div className='z-10 text-sm font-semibold rounded-2xl bg-[#E6F1D4] absolute top-[1%] right-2 px-4 py-1 '>Explore fast tracked surgery</div>
                    <div className="absolute z-10 bottom-[2%] right-2 inline-flex items-center bg-white rounded-4xl shadow px-4 py-2">
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

                    <Image
                        src="/edd5f3e7d1cfddf32f348eaa81aab3a6b60a6e5c.png"
                        alt="doctor_image"
                        fill
                        className="object-cover rounded-3xl"
                    />


                </div>


            </div>
            <div className='md:mt-48 md:mb-48 mt-10 mb-10 text-xl md:text-3xl font-semibold'>
                <p className="flex flex-wrap items-center justify-center z-70">
                    <span>We provide expert urology support,</span>
                    <span className="flex items-center">
                        &nbsp;simplified
                        <Image
                            src='/doctor_urinal.png'
                            className='border border-white rounded-full p-1 bg-[#FEF1CB] ml-1'
                            alt='doctor'
                            height={25}
                            width={25}
                        />
                    </span>
                </p>

                <p className="flex flex-wrap items-center justify-center z-70">
                    <span>fast, discreet care for men and</span>
                    <span className="flex items-center">
                        &nbsp;women.
                        <Image
                            src='/man_woman.png'
                            className='border border-white rounded-full bg-[#E6F1D4] p-1 ml-1'
                            alt='doctor'
                            height={25}
                            width={25}
                        />No referrals. No delays.
                    </span>
                </p>
                <p className="flex flex-wrap items-center justify-center z-70">
                    <span>Just direct</span>
                    <span className="flex items-center">
                        &nbsp;access
                        <Image
                            src='/call.png'
                            className='border border-white rounded-full bg-[#DBE4F5] p-1 ml-1'
                            alt='doctor'
                            height={25}
                            width={25}
                        />when you need it.
                    </span>
                </p>
            </div>
            <MultipleCards />
            <SymptomsHome />
            <Conditions_Home />
            <PrivateConsult />
            <ProcessHome />
            <DoctorIntroHome />
            <TestimonialSlider />
            <YourTerms />
            <EnlargedProstateHome />
            <PatientStoriesHome />
            <WhyChooseUs />
            <FaqSection />
            <HeroWithFooter />



        </>

    );
}

export default HomePage