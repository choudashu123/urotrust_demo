'use client'
import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="text-black relative text-black no-right-shadow">
            <div className="max-w-7xl mx-auto flex py-2 items-center justify-between">
                <div className="text-2xl w-2/5 font-bold pl-[5%]">
                    <Link href="/" className='text-gray-700'>UroTrust</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden w-3/5 lg:flex justify-between bg-white">
                    <Link href="/" className="hover:text-gray-300 ">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About Doctor</Link>
                    <Link href="/contact" className="hover:text-gray-300 ">Conditions</Link>
                    <Link href="/cyprus_surgery" className="hover:text-gray-300">Cyprus Surgery</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white text-black z-50 shadow-lg md:hidden">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">About Doctor</Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">Conditions</Link>
                    <Link href="/cyprus_surgery" className="block px-4 py-2 hover:bg-gray-700">Cyprus Surgery</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar