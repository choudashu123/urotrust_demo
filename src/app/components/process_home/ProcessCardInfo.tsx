import React from 'react'
import ProcessCard from './ProcessCard'

function ProcessCardInfo() {
  const steps = [
    {
      "card_bg": "none",
      "card_info": "Our Process",
      "card_heading_size": "2xl",
      "card_heading_font": "bold",
      "card_heading": "How it works",
      "card_desc_text_color": "black",
      "card_desc": "3 easy steps to access better urological health care."
    },
    {
      "card_bg": "gray-100",
      "card_info": "Step 1",
      "card_heading_size": "xl",
      "card_heading_font": "semibold",
      "card_heading": "Book Your Consultation",
      "card_desc_text_color": "gray-600",
      "card_desc": "Choose a date and time that suits you. No GP referral. No waiting lists. Instant access to specialist care."
    },
  ]
  return (
    <div className='h-full flex flex-col justify-around gap-3'>
      {steps.map((item, index) => (
        <ProcessCard key={index} {...item} />
      ))}
    </div>
  )
}

export default ProcessCardInfo