'use client'
import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">
                    <Link href="/">UroTrust</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-300">About Doctor</Link>
                    <Link href="/contact" className="hover:text-gray-300">Conditions</Link>
                    <Link href="/cyprus_surgery" className="hover:text-gray-300">Cyprus Surgery</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="block px-2 py-1 hover:bg-gray-700">Home</Link>
                    <Link href="/about" className="block px-2 py-1 hover:bg-gray-700">About Doctor</Link>
                    <Link href="/contact" className="block px-2 py-1 hover:bg-gray-700">Conditions</Link>
                    <Link href="/cyprus_surgery" className='block px-2 px-1 hover:bg-gray-700'></Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar