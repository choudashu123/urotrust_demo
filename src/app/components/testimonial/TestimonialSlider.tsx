'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const testimonials = [
    {
      name: 'John M',
      country: 'United Kingdom',
      image: '/df05f9327f8ab8f6bfb2709edbbad9a7e2393f4c.jpg',
      heading: 'What our patients say about us',
      feedback: [
        '“My prostate problem was ruining my life, as a Doctor, a husband and an older athlete. Now I feel fantastic and 30 years younger.”',
        'With Dr Erol you have a doctor who makes you feel like a friend, who listens carefully to your problem and who follows up on every detail.',
      ],
    },
    {
      name: 'Anna T',
      country: 'Germany',
      image: '/410c340aa057242400c608368f918307cdd72438.jpg',
      heading: 'Our patients trust us',
      feedback: [
        '“I was hesitant to get treatment abroad, but Dr Erol made me feel at home. Professional, kind, and effective.”',
        'Highly recommend to anyone struggling with prostate issues or needing a second opinion.',
      ],
    },
    {
      name: 'Carlos D',
      country: 'Spain',
      image: '/4b71756b2dfdef5d27bf29ac91dee569bdec2870.jpg',
      heading: 'Trusted and Caring',
      feedback: [
        '“From the first consultation to post-surgery follow-up, Dr Erol and his team were amazing.”',
        'Their attention to detail and personal care really stood out to me.',
      ],
    },
  ];

  return (
    <div className='w-full h-auto'>
      <div className='flex justify-center py-[2%]'>
              <p className='text-md md:text-3xl font-bold'>Testimonials</p>
      </div>
      <div className="bg-blue-100 py-[5%] px-[10%] rounded-2xl max-w-3xl mx-auto shadow relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        className="text-center"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">
              {item.heading}
            </h2>
            {item.feedback.map((text, i) => (
              <p key={i} className="mb-4 text-gray-800">
                {text}
              </p>
            ))}
            <div className="flex justify-center items-center mt-6 gap-4">
              <Image
                src={item.image}
                className="w-10 h-10 rounded-full"
                alt={item.name}
                height={40}
                width={40}
              />
              <div className="text-left">
                <div className="font-semibold text-black">{item.name}</div>
                <div className="text-sm text-gray-600">{item.country}</div>
              </div>
            </div>

          </SwiperSlide>
                      
        ))}        
      </Swiper>
      {/* Custom Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="z-10 absolute top-1/2 -translate-y-1/2 left-4 text-xl bg-white rounded-full w-8 h-8 shadow hover:bg-gray-100"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="z-10 absolute top-1/2 -translate-y-1/2 right-4 text-xl bg-white rounded-full w-8 h-8 shadow hover:bg-gray-100"
        >
          →
        </button>
      </div>

    </div>
    </div>
    
  );
}
