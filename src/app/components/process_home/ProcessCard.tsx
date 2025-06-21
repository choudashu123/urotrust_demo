import React from 'react'

type CardProps = {
  card_bg: string;
  card_info: string;
  card_heading_size: string,
  card_heading_font: string,
  card_heading: string,
  card_desc_text_color: string,
  card_desc: string
}

function ProcessCard({
  card_bg,
  card_info,
  card_heading_size,
  card_heading_font,
  card_heading,
  card_desc_text_color,
  card_desc
}: CardProps) {
  return (
    <div className='w-full h-full'>
      <div className={`w-full h-full bg-${card_bg} rounded-xl shadow p-6 space-y-4`}>
        <div className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-[#E4EBF9] rounded-full">
          {card_info}
        </div>
        <h2 className={`text-${card_heading_size} font-${card_heading_font} text-black`}>
          {card_heading}
        </h2>
        <p className={`text-${card_desc_text_color} text-sm leading-relaxed`}>
          {card_desc}
        </p>
      </div>

    </div>
  )
}

export default ProcessCard