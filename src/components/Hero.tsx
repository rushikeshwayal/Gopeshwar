"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger animation when 30% of the section is in view
        triggerOnce: true, // Ensure animation occurs only once
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
        }
    }, [inView, controls, hasAnimated]);

    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return (
        <div
            ref={ref}
            className="relative w-full h-screen flex justify-center items-center bg-cover bg-fixed"
            style={{ backgroundImage: "url('/cover.jpg')" }}
        >
            {/* Middle Layer: Semi-Transparent Overlay */}
            <div className="absolute inset-0 flex items-center justify-center"></div>

            {/* Top Layer: Text and Buttons */}
            <div className="relative z-10 flex flex-col items-center px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Animating 'Welcome to' */}
                    <motion.h1
                        className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black text-center"
                        initial="hidden"
                        animate={controls}
                        variants={textAnimation}
                    >
                        Welcome to
                    </motion.h1>
                    {/* Animating 'Gopeshwar' */}
                    <motion.h1
                        className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#578e7e] text-center md:ml-4 border-t-2 border-[#578e7e]"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, ease: "easeOut", delay: 0.3 },
                            },
                        }}
                    >
                        Gopeshwar
                    </motion.h1>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 lg:space-x-24 mt-8">
                    {/* Static Buttons */}
                    {/* Contact Us Button */}
                    <div className="relative group">
                        <button className="relative border-2 border-[#545454] px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full overflow-hidden text-[#545454] font-glacial font-bold text-lg sm:text-xl hover:text-white hover:border-white transition-all duration-300">
                            <Link href="/contact-us" className="relative z-10">
                                Contact Us
                            </Link>
                            <span className="absolute inset-0 bg-[#578e7e] transition-transform transform translate-x-[-100%] group-hover:translate-x-0 duration-300 ease-in-out"></span>
                        </button>
                    </div>

                    {/* Our Product Button */}
                    <div className="relative group">
                        <button className="relative border-2 border-[#545454] px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-full overflow-hidden text-[#545454] font-glacial font-bold text-lg sm:text-xl hover:text-white hover:border-white transition-all duration-300">
                            <Link href="/our-product" className="relative z-10">
                                Our Product
                            </Link>
                            <span className="absolute inset-0 bg-[#578e7e] transition-transform transform translate-x-[-100%] group-hover:translate-x-0 duration-300 ease-in-out"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}