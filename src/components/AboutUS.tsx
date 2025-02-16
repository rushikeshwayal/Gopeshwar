"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { useInView } from "react-intersection-observer"; // To detect when elements are in view
import Image from "next/image"; // Image component
import aboutImg from "../../public/family.jpg"; // Image path

export default function AboutUS() {
  // Controls for animations
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  // Detect when elements are in view
  const [refText, inViewText] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refImage, inViewImage] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewText) {
      controlsText.start("visible");
    }
    if (inViewImage) {
      controlsImage.start("visible");
    }
  }, [controlsText, controlsImage, inViewText, inViewImage]);

  // Animation variants
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="max-h-screen pt-20 md:pt-40 flex flex-col md:flex-row items-center bg-[#F5ECD5] text-black px-4 sm:px-8 py-12 sm:py-16 space-y-8 md:space-y-0">
      {/* Content on left side */}
      <motion.div
        ref={refText}
        className="w-full md:w-1/2 text-center md:text-left"
        initial="hidden"
        animate={controlsText}
        variants={fadeInRight}
      >
        <p className="text-sm sm:text-xl font-semibold text-[#578E7E] font-glacial mb-4">
          Who we are
        </p>
        <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#3D3D3D] mb-4 sm:mb-6 leading-tight">
          Discover the benefits of organic dairy with Gopeshwar.
        </h1>
        <p className="border-l-4 pl-4 border-[#578E7E] text-base sm:text-lg text-[#3D3D3D] mb-4 sm:mb-6 font-glacial leading-relaxed">
          Porta lacus nullam magna vehicula conubia. Facilisi scelerisque torquent posuere volutpat inceptos facilisis convallis curae.
        </p>
        <p className="text-sm sm:text-base text-[#3D3D3D] mb-6 sm:mb-8 font-glacial leading-relaxed">
          Curae proin nisl morbi nullam integer nibh ipsum nisi aliquet commodo. Placerat parturient potenti himenaeos maximus elementum sodales. Congue lectus iaculis gravida mattis nulla sollicitudin quis.
        </p>
        <button className="bg-[#578E7E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg hover:bg-[#3D3D3D] transition duration-300 font-glacial">
          Learn More
        </button>
      </motion.div>

      {/* Image on right side */}
      <motion.div
        ref={refImage}
        className="w-full md:w-1/2 mt-8 md:mt-0"
        initial="hidden"
        animate={controlsImage}
        variants={fadeInLeft}
      >
        <Image
          src={aboutImg}
          alt="Organic Dairy Products"
          className="w-full h-auto rounded-3xl shadow-lg object-cover transform transition duration-500"
        />
      </motion.div>
    </div>
  );
}