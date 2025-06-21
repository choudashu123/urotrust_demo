'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I book a consultation?',
    answer:
      'Booking is simple. Click on the "Book Your Consultation" button, choose your preferred date and time, and securely complete your booking online. No GP referral is required.',
  },
  {
    question: 'Are the consultations private and secure?',
    answer:
      'Yes. All consultations are conducted through our secure platform with end-to-end encryption to ensure complete confidentiality.',
  },
  {
    question: 'What conditions do you treat?',
    answer:
      'We treat a range of urological conditions including enlarged prostate (BPH), kidney stones, bladder issues, and more.',
  },
  {
    question: 'How quickly can I be seen?',
    answer:
      'Appointments are available within a few days, depending on your selected time and date. No long waiting lists.',
  },
  {
    question: 'What happens after my consultation?',
    answer:
      'You will receive a clear plan and recommendations. If surgery or further treatment is needed, we’ll assist with the next steps.',
  },
  {
    question: 'Can I still be seen if I am located outside the UK?',
    answer:
      'Yes. We offer consultations and arrangements for international patients too.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major insurance providers. Contact us to confirm your coverage.',
  },
  {
    question: 'How much does a consultation cost?',
    answer:
      'The consultation cost varies by service. Please check our booking page for the most up-to-date pricing.',
  },
  {
    question: 'Do you offer second opinions?',
    answer:
      'Absolutely. We’re happy to provide a second opinion based on your current diagnosis or concerns.',
  },
  {
    question: 'Can I get prescriptions or referrals if needed?',
    answer:
      'Yes. We can provide prescriptions and referrals as part of your treatment plan.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={i} className="space-y-2">
              <div
                className={`flex justify-between items-center cursor-pointer font-semibold text-base md:text-lg border-b py-2 ${isActive ? 'text-black' : 'text-gray-400'
                  }`}
                onClick={() => toggleFaq(i)}
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-sm">
                  {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {isActive && (
                <div className="bg-blue-100 text-sm p-4 rounded-xl text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='font-bold text-lg'>Still have Questions?</p>
        <p className='text-gray-500'>We're here to help</p>
        <div className='flex gap-2'>
          <button className='text-white bg-black px-6 py-2 w-fit flex justify-center mx-auto rounded-3xl mt-[2%]'>Book your Consultation Now</button>
          <button className='text-black bg-[#E9F3DB] px-6 py-2 w-fit flex justify-center mx-auto rounded-3xl mt-[2%]'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
