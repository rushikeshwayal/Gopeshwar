import AboutUS from "@/components/AboutUS";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyUS from "@/components/WhyUS";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Discover/>
      <AboutUS/>
      <WhyUS/>
    </div>
  );
}
