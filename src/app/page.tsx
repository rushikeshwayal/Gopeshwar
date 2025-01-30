import AboutUS from "@/components/AboutUS";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Testimonial from "@/components/Testimonial";
import WhyUS from "@/components/WhyUS";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Discover/>
      <AboutUS/>
      <WhyUS/>
      <Founder/>
      <Product/>
      <Info/>
      <Testimonial/>
      <Footer/>
      
    </div>
  );
}
