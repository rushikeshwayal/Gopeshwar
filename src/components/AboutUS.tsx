"use client"
import { useEffect } from "react";
import AOS from "aos"; // AOS library for scroll animations
import "aos/dist/aos.css"; // AOS CSS
import Image from "next/image"; // Image component
import aboutImg from "../../public/family.jpg"; // Image path

export default function AboutUS() {
  // Initialize AOS on mount
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation triggers once
    });
}, []);

return (
    <div className="max-h-screen pt-40 flex flex-col md:flex-row items-center bg-[#F5ECD5] text-black px-8 py-16 space-y-8 md:space-y-0">
      {/* Content on left side */}
    <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-right" // Animation on scroll (text comes from left)
        data-aos-offset="200" // Trigger the animation when 200px away from viewport
    >
        <p className="text-xl font-semibold text-[#578E7E] font-glacial mb-4">Who we are</p>
        <h1 className="font-cinzel text-3xl md:text-4xl text-[#3D3D3D] mb-6 leading-tight">
        Discover the benefits of organic dairy with Gopeshwar.
        </h1>
        <p className="border-l-4 pl-4 border-[#578E7E] text-lg text-[#3D3D3D] mb-6 font-glacial leading-relaxed">
        Porta lacus nullam magna vehicula conubia. Facilisi scelerisque torquent posuere volutpat inceptos facilisis convallis curae.
        </p>
        <p className="text-base text-[#3D3D3D] mb-8 font-glacial leading-relaxed">
        Curae proin nisl morbi nullam integer nibh ipsum nisi aliquet commodo. Placerat parturient potenti himenaeos maximus elementum sodales. Congue lectus iaculis gravida mattis nulla sollicitudin quis.
        </p>
        <button className="bg-[#578E7E] text-white py-3 px-6 rounded-full text-lg hover:bg-[#3D3D3D] transition duration-300 font-glacial">
        Learn More
        </button>
    </div>

      {/* Image on right side */}
    <div
        className="w-full md:w-1/2 mt-8 md:mt-0"
        data-aos="fade-left" // Animation on scroll (image comes from right)
        data-aos-offset="200" // Trigger the animation when 200px away from viewport
    >
        <Image
        src={aboutImg}
        alt="Organic Dairy Products"
        className="w-full h-auto rounded-3xl shadow-lg object-cover transform transition duration-500"
        />
    </div>
    </div>
);
}
