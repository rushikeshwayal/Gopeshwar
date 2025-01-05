"use client"
import milkbottol from "../../public/milkbottol.jpg";
import Image from "next/image";
import group from "../../public/group.jpg";
import drinkmilk from "../../public/drinkmilk.jpg";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberTicker from "@/components/ui/number-ticker";

export default function Info() {
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
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut", delay: 1 },
        },
    };

    const ImageAnimationTop = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "linear" },
        },
    };

    const ImageAnimationBottom = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "linear" },
        },
    };

    return (
        <div className="relative flex justify-center items-stretch w-full ">
            {/* Text for the entire div (outer div) */}
            <motion.div
                className="absolute inset-0 flex justify-center items-center flex-col text-white text-4xl z-50  top-10 max-h-10"
                variants={textAnimation}
                initial="hidden"
                animate={controls}
                ref={ref}
            >
                <div>
                    <h1 className="border-b-2 pb-2 border-white z-50 text-center font-cinzel">
                        Welcome to Our Milk Journey
                    </h1>
                </div>

            </motion.div>

            <motion.div
    className="absolute inset-0 flex justify-center items-center flex-col text-white text-4xl z-50 top-10 rounded-full"
    // variants={textAnimation}
    // initial="hidden"
    // animate={controls}
    // ref={ref}
>
    {/* Statistics Section */}
    <div className="absolute top-[620px] flex justify-around bg-[#578e7e] w-[90%] p-5 rounded- md:space-x-12 font-mono z-50">
        {/* Number Tickers */}
        <div className=" text-center flex flex-col items-center w-full sm:w-auto">
            <NumberTicker className="font-cinzel text-5xl" value={100} />
            <h2 className="text-lg font-semibold mt-2 font-glacial">Total Products</h2>
        </div>

        <div className=" text-center flex flex-col items-center w-full sm:w-auto">
            <NumberTicker className="font-cinzel text-5xl" value={200} />
            <h2 className="text-lg font-semibold mt-2 font-glacial">Active Users</h2>
        </div>

        <div className=" text-center flex flex-col items-center w-full sm:w-auto">
            <NumberTicker className="font-cinzel text-5xl" value={50} />
            <h2 className="text-lg font-semibold mt-2 font-glacial">Sales Today</h2>
        </div>

        {/* Additional Number Ticker */}
        <div className=" text-center flex flex-col items-center w-full sm:w-auto  ">
            <NumberTicker className="font-cinzel text-5xl" value={150} />
            <h2 className="text-lg font-semibold mt-2 font-glacial">New Orders</h2>
        </div>
    </div>
</motion.div>


            <motion.div
                ref={ref}
                className="w-1/3 h-[700px] flex justify-center relative"
                initial="hidden"
                animate={controls}
                variants={ImageAnimationTop}
            >
                <Image src={milkbottol} alt="cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40"></div>
                <motion.div
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white flex-col p-4"
                    variants={textAnimation}
                >
                    <h1 className="font-bold text-xl md:text-2xl mb-2 font-glacial">Milk Bottles</h1>
                    <p className="text-lg md:text-xl text-center font-glacial">
                        Discover the journey of fresh and pure milk in every bottle we deliver to you.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                ref={ref}
                className="w-1/3 h-[700px] flex justify-center relative"
                initial="hidden"
                animate={controls}
                variants={ImageAnimationBottom}
            >
                <Image src={drinkmilk} alt="cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40"></div>
                <motion.div
                    className="absolute w-full h-full flex flex-col justify-center items-center text-white p-4"
                    variants={textAnimation}
                >
                    <h1 className="font-bold text-xl md:text-2xl mb-2 font-glacial">Drink Milk</h1>
                    <p className="text-lg md:text-xl text-center font-glacial">
                        Nourish your body and soul with the goodness of pure milk, full of nutrients and love.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                ref={ref}
                className="w-1/3 h-[700px] flex justify-center relative"
                initial="hidden"
                animate={controls}
                variants={ImageAnimationTop}
            >
                <Image src={group} alt="cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40"></div>
                <motion.div
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white flex-col p-4"
                    variants={textAnimation}
                >
                    <h1 className="font-bold text-xl md:text-2xl mb-2 font-glacial">Our Community</h1>
                    <p className="text-lg md:text-xl text-center font-glacial">
                        Join our growing community, where we cherish the quality and health benefits of milk.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
