"use client";
import Image from "next/image";
import whyus from "../../public/whyus.jpg";
import cow from "../../public/cow.png";
import plantBased from "../../public/plant-based.png";
import quality from "../../public/quality.png";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyUS() {
    const controls = useAnimation();
    const [featuresRef, featuresInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [textRef, textInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (featuresInView && textInView) {
            controls.start("visible");
        }
    }, [featuresInView, textInView, controls]);

    const cardAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren",
            },
        },
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const textAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return (
        <div className="bg-[#F5ECD5] pt-12 sm:pt-16">
            <div className="relative w-full h-[900px] sm:h-[400px] md:h-[500px]">
                <Image
                    src={whyus}
                    alt="whyus"
                    className="w-full h-full object-cover rounded-lg"
                    priority
                />

                <div className="absolute inset-0 bg-[#578E7E] opacity-90 rounded-lg" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
                    <motion.div
                        ref={textRef}
                        initial="hidden"
                        animate={textInView ? "visible" : "hidden"}
                        variants={textAnimation}
                        className="mb-8 sm:mb-12"
                    >
                        <motion.p
                            variants={textAnimation}
                            className="text-lg md:text-xl font-semibold font-glacial mb-2 uppercase tracking-widest text-black"
                        >
                            Why Choose Us
                        </motion.p>
                        <motion.h1
                            variants={textAnimation}
                            className="text-2xl md:text-4xl font-bold font-cinzel mb-4 sm:mb-6 leading-relaxed"
                        >
                            Taste the Difference with FreshMoo&apos;s Hormone-Free Milk
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        ref={featuresRef}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        variants={cardAnimation}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20 w-full max-w-6xl"
                    >
                        {[
                            { icon: cow, title: "Locally Sourced", text: "Our milk is sourced from local farmers who treat their cows with love and care." },
                            { icon: quality, title: "Quality", text: "Our milk is of the highest quality and free from artificial hormones." },
                            { icon: plantBased, title: "Organic", text: "Our milk is organic and free from harmful chemicals or pesticides." },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                variants={itemAnimation}
                                className="flex flex-col items-center p-4"
                            >
                                <div className="mb-4 w-14 h-14 sm:w-16 sm:h-16 relative">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                    {feature.title}
                                </h2>
                                <p className="text-sm md:text-base font-glacial leading-relaxed">
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}