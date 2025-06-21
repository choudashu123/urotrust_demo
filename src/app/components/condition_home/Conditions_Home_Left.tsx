import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';

interface Props {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}
function Conditions_Home_Left({ selectedCategory, onSelectCategory }: Props) {
    const categories = [
        "Urinary Issues",
        "Bladder Issue",
        "Kidney",
        "Ureter",
        "Testicle",
    ];
    const activeIndex = 0
    return (
        <div className='w-full flex flex-col gap-4 justify-between items-center md:items-start'>
            {categories.map((item, index) => (
                <button key={index}
                    onClick={() => onSelectCategory(item)}
                    className={`
                w-2/3 flex flex-row justify-center 
        items-center text-gray-900 font-medium bg-[#E6F1D5] 
        rounded-full py-3 px-3 border transition
        ${selectedCategory === item ? "bg-green-100 text-black" : "border-gray-300 hover:bg-green-100"}
                `}>
                    <span>{item}</span>
                    <SquareArrowOutUpRight className='ml-1 h-4 w-4'></SquareArrowOutUpRight>
                </button>
            ))}
        </div>


    )
}

export default Conditions_Home_Left