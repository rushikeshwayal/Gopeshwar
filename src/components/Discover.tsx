'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import farmer from '../../public/farmer.png';
import plantBased from '../../public/plant-based.png';
import quality from '../../public/quality.png';

export default function Discover() {
    const [ref, inView] = useInView({
        threshold: 0.2, // Trigger animation when 20% of the section is in view
        triggerOnce: true, // Animation runs only once
    });

    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const variantsLeft = {
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const variantsRight = {
        hidden: { opacity: 0, x: 120 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const variantsBottom = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div
            ref={ref}
            className="bg-[#F5ECD5] flex flex-col justify-center items-center py-8 sm:py-16 px-4 sm:px-8"
        >
            {/* Heading */}
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#3D3D3D] mb-6 sm:mb-8 text-center">
                Discover Our Values
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
                {/* Card 1: Slide in from Left */}
                <motion.div
                    className="bg-[#FFFAEC] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial="hidden"
                    animate={controls}
                    variants={variantsLeft}
                >
                    <Image
                        src={farmer}
                        alt="Local Farmer"
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
                    />
                    <h1 className="font-glacial text-lg sm:text-xl text-[#3D3D3D] text-center mb-2">
                        Local Farmer
                    </h1>
                    <p className="text-xs sm:text-sm text-center text-gray-600">
                        Our products are sourced from local farmers who are passionate about their produce.
                    </p>
                </motion.div>

                {/* Card 2: Slide in from Bottom */}
                <motion.div
                    className="bg-[#FFFAEC] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial="hidden"
                    animate={controls}
                    variants={variantsBottom}
                    transition={{ delay: 0.2 }} // Add delay for staggered effect
                >
                    <Image
                        src={plantBased}
                        alt="Organic"
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
                    />
                    <h1 className="font-glacial text-lg sm:text-xl text-[#3D3D3D] text-center mb-2">
                        Organic
                    </h1>
                    <p className="text-xs sm:text-sm text-center text-gray-600">
                        We ensure that our products are grown organically without the use of harmful chemicals.
                    </p>
                </motion.div>

                {/* Card 3: Slide in from Right */}
                <motion.div
                    className="bg-[#FFFAEC] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial="hidden"
                    animate={controls}
                    variants={variantsRight}
                    transition={{ delay: 0.4 }} // Add delay for staggered effect
                >
                    <Image
                        src={quality}
                        alt="Quality"
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
                    />
                    <h1 className="font-glacial text-lg sm:text-xl text-[#3D3D3D] text-center mb-2">
                        Quality
                    </h1>
                    <p className="text-xs sm:text-sm text-center text-gray-600">
                        Our products are of the highest quality and are handpicked to ensure freshness.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}