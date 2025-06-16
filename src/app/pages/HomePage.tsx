import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'


function HomePage() {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 bg-purple-900 text-white">
                <Navbar />
            </div>
            <div className="w-1/2 relative bg-cyan-300">
                    <Image
                        src="/edd5f3e7d1cfddf32f348eaa81aab3a6b60a6e5c.png"
                        alt="doctor_image"
                        height={200}
                        width={200}
                        className="w-full h-auto object-cover"
                    />

            </div>
        </div>
    );
}

export default HomePage