"use client";
import Image from "next/image";
import whyus from "../../public/whyus.jpg";
import cow from "../../public/cow.png";
import plantBased from "../../public/plant-based.png";
import quality from "../../public/quality.png";
import React, { useEffect, useState } from "react";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { del } from "framer-motion/client";

export default function WhyUS() {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger animation when 40% of the section is in view
        triggerOnce: true, // Ensure animation occurs only once
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
        }
    }, [inView, controls, hasAnimated]);

    const cardAnimationLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" ,delay:0.5 },
        },
    };

    const cardAnimationRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut",delay:0.5 },
        },
    };

    const cardAnimationBottom = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" ,delay:0.5 },
        },
    };

    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    

    return (
        <div className="bg-[#F5ECD5] pt-16">
            {/* Image with overlay and text */}
            <div className="relative w-full h-[500px]">
                {/* Background Image */}
                <Image
                    src={whyus}
                    alt="whyus"
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* Mid-layer color overlay */}
                <div className="absolute inset-0 bg-[#578E7E] opacity-90 rounded-lg"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={textAnimation}
                    >
                    <p className="text-lg md:text-xl font-semibold font-glacial mb-2 uppercase tracking-widest text-black">
                        Why Choose Us
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold font-cinzel mb-6 leading-relaxed">
                        Taste the Difference with FreshMoo&apos;s Hormone-Free Milk
                    </h1>
                    </motion.div>

                    {/* Features Section */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full "
                        ref={ref}
                    >
                        {/* Locally Sourced Feature (Left Animation) */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial="hidden"
                            animate={controls}
                            variants={cardAnimationLeft}
                        >
                            <Image src={cow} alt="Cow" className="w-14 h-14 mb-4" />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Locally Sourced
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is sourced from local farmers who treat their cows with
                                love and care.
                            </p>
                        </motion.div>

                        {/* Quality Feature (Bottom Animation) */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial="hidden"
                            animate={controls}
                            variants={cardAnimationBottom}
                        >
                            <Image src={quality} alt="Quality" className="w-14 h-14 mb-4" />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Quality
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is of the highest quality and free from artificial
                                hormones.
                            </p>
                        </motion.div>

                        {/* Organic Feature (Right Animation) */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial="hidden"
                            animate={controls}
                            variants={cardAnimationRight}
                        >
                            <Image
                                src={plantBased}
                                alt="Organic"
                                className="w-14 h-14 mb-4"
                            />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Organic
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is organic and free from harmful chemicals or
                                pesticides.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
