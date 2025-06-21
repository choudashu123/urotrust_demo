import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

function PatientStoriesHome() {
  const testimonials = [
  {
    name: 'Sarah M.',
    role: 'HoLEP Patient',
    text: `From the first consultation to the final follow-up, Dr. Erol’s care was outstanding. I felt informed, respected, and completely supported through every decision.`,
    avatar: '/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.jpg',
  },
  {
    name: 'Michael T.',
    role: 'Verified Patient',
    text: `Efficient, compassionate, and incredibly knowledgeable. I can’t recommend Dr. Erol highly enough — he made a stressful diagnosis manageable and gave me back my peace of mind.`,
    avatar: '/410c340aa057242400c608368f918307cdd72438.jpg',
  },
  {
    name: 'Emily R.',
    role: 'Verified Patient',
    text: `Booking was easy, the consultation was clear, and the aftercare plan was excellent. It's rare to feel this looked after — thank you.`,
    avatar: '/6528ea7852c4088f59481c9e231938f441876daf.jpg',
  },
]
  return (
    <div className="w-full px-6 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Patient Stories</h2>
        <p className="text-xl text-gray-600 mt-2">Real Experiences, Real Results</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              {Array(5).fill(0).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-700 text-md mb-6">"{item.text}"</p>
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientStoriesHome
