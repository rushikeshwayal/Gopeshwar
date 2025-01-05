"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeadingProduct() {
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
        <div ref={ref} className="flex justify-center items-center ">
            <motion.h1
                className="text-4xl md:text-3xl font-extrabold text-[#3D3D3D] mb-10 font-cinzel"
                initial="hidden"
                animate={controls}
                variants={textAnimation}
            >
                Explore Our Products
            </motion.h1>
        </div>
    );
}
