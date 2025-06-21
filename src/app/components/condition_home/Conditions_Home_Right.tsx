import React from 'react'

interface Props {
  selectedCategory: string;
}
function Conditions({ selectedCategory }: Props) {

  const categoryMap: Record<string, string[]> = {
    "Urinary Issues": [
      "Frequent Urination",
      "Urgency",
      "Incomplete Emptying",
      "UTIs"
    ],
    "Bladder Issue": [
      "Erectile Dysfunction",
      "Prostatitis",
      "Low Testosterone",
      "BPH"
    ],
    "Kidney": [
      "Kidney Stones",
      "Bladder Stones",
      "Urinary Blockages"
    ],
    "Ureter": [
      "Prostate Cancer",
      "Bladder Cancer",
      "Kidney Cancer"
    ],
    "Testicle": [
      "Incontinence",
      "UTIs",
      "Pelvic Floor Disorders"
    ]
  };
  const items = categoryMap[selectedCategory] || [] ;
  return (
    <>
      {/* if conditions listing is <= 5  */}
      {
        items.length <= 5 && (
          <div className="h-full text-xl font-bold grid grid-cols-3 grid-rows-8 gap-3">
            <div className='flex items-center justify-center row-span-4 col-span-2 border border-gray-300 rounded-4xl bg-[#F8F8F8] p-2'>{items[0]}</div>
            <div className='row-span-4 flex items-center justify-center rounded-4xl border border-gray-300 bg-[#DBE4F5]  p-2'>{items[1]}</div>
            <div className='col-span-2 flex items-center justify-center row-span-2 border border-gray-300 rounded-4xl bg-[#E6F2D5] p-2'>{items[2]}</div>
            <div className='row-span-4 flex items-center justify-center rounded-4xl border border-gray-300 bg-[#F8F8F8] p-2'>{items[3]}</div>
            <div className='col-span-2 flex items-center justify-center row-span-2 border border-gray-300 rounded-4xl bg-[#F8F8F8] p-2'>{items[4]}</div>
          </div>
        )
      }
      {/* if conditions listing is >= 6  */}
      {
        items.length >= 5 && (
          <div className="h-full text-xl font-bold grid grid-cols-3 grid-rows-8 gap-3">
            <div className='flex items-center justify-center row-span-4 col-span-2 border border-gray-300 rounded-4xl bg-[#F8F8F8] p-2'>{items[0]}</div>
            <div className='row-span-4 flex items-center justify-center rounded-4xl border border-gray-300 bg-[#DBE4F5] p-2 '>{items[1]}</div>
            <div className='col-span-2 flex items-center justify-center row-span-2 border border-gray-300 rounded-4xl bg-[#E6F2D5] p-2'>{items[2]}</div>
            <div className='row-span-2 flex items-center justify-center rounded-4xl border border-gray-300 bg-[#F8F8F8] p-2'>{items[3]}</div>
            <div className='col-span-2 row-span-2 flex items-center justify-center border border-gray-300 rounded-4xl bg-[#F8F8F8] p-2'>{items[4]}</div>
            <div className='row-span-2 flex items-center justify-center rounded-4xl border border-gray-300 bg-[#F8F8F8] p-2'>{items[5]}</div>
            {items.slice(6).map((item, index) => (
              <div key={index} className='bg-[#F8F8F8] rounded-4xl flex items-center border border-gray-300 justify-center p-2'>
                {item}
              </div>
            ))}
          </div>

        )
      }
    </>

  )
}

export default Conditions