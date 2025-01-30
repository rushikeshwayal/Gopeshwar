"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import gopeshwar from "../../public/gopeshwar.png";
import "./Nav.css";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Framer Motion Variants
    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: "0%",
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger children animations
                delayChildren: 0.3, // Delay before children animation starts
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="absolute top-0 left-0 w-full z-20 mt-4">
            <nav className="flex justify-between items-center px-8 py-4">
                {/* Logo */}
                <Image src={gopeshwar} alt="Gopeshwar" className="cursor-pointer w-44" />

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex md:space-x-20" id="mainNav">
                    {["Home", "About Us", "Founder", "Contact Us"].map((item, index) => (
                        <li key={index}>
                            <Link
                                href="/"
                                className="font-glacial text-[#545454] text-xl hover:border-b-2 hover:border-[#4a4848] transition-all duration-300 ease-out hover:underline-offset-8"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-[#545454] text-2xl focus:outline-none"
                    onClick={toggleVisibility}
                >
                    {isVisible ? "" : "☰"}
                </button>
            </nav>

            {/* Animated Full-Screen Navigation Menu */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "exit"}
                variants={menuVariants}
                className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-8"
            >
                <button
                    className="md:hidden text-[#545454] text-2xl absolute top-8 right-8 focus:outline-none"
                    onClick={toggleVisibility}
                >
                    {isVisible ? "X" : ""}
                </button>
                <motion.ul
                    variants={listVariants} // Apply parent animation
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {["Home", "About Us", "Founder", "Contact Us"].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants} // Apply child animation
                            className="font-glacial text-[#545454] text-2xl hover:text-[#578e7e] transition-all duration-300"
                        >
                            <Link href="/" onClick={toggleVisibility}>
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
}
