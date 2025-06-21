import Image from 'next/image';
import React from 'react';

const cards = [
  {
    title: 'Specialist Care You Can Trust',
    description:
      'All consultations are delivered personally by Dr. Erol, a fully accredited consultant urologist with 25+ years of experience.',
    icon: '/ea976fb265672f4a84fbfa836a596a8a5280281a.png',
  },
  {
    title: 'No Waiting Lists, No Delays',
    description:
      'Skip the typical NHS wait of weeks or even months. Get rapid access to specialist advice and a clear plan without unnecessary delays.',
    icon: '/08e275b3cc93e7f7d89e8fb24fd06185b07ac282.png',
  },
  {
    title: 'Confidential and Discreet',
    description:
      'Your privacy is paramount. Our secure online platform ensures your consultation and records stay fully protected.',
    icon: '/dbfce880c67a97153c0e899c1ce92a35637e6d38.png',
  },
  {
    title: 'Private Access',
    description:
      'No travel, no crowded waiting rooms — consult securely from your own home, at a time that suits you.',
    icon: '/563bef2ed3f34ef38ad3a5e48a5934b0431fd1da.png',
  },
  {
    title: 'Personalized Approach',
    description:
      'We take the time to listen, explain your options clearly, and design a care plan around your individual needs – not a one-size-fits-all approach.',
    icon: '/f4c2743bc805f1190ba79054c7794db13ab336ea.png',
  },
  {
    title: 'Bypass UK Waiting Lists',
    description:
      'For those needing surgery like HoLEP, we offer a truly seamless, no-referral pathway directly to our state-of-the-art hospital in peaceful Cyprus.',
    icon: '/d0d07d1da383d28217b5bd4a281722517923e423.png',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          Expert-Led, Patient-First Urological Care – Wherever You Are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
          Why Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border p-6 text-center hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#DBE4F5] rounded-full flex items-center justify-center">
                <Image src={card.icon} alt="icon" width={40} height={45} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
      <button className='text-white bg-black px-6 py-2 w-fit flex justify-center mx-auto rounded-3xl mt-[2%]'>Explore Sugery in Cyprus</button>
    </div>
  );
};

export default WhyChooseUs;
