import Link from "next/link";
import Image from "next/image";
import gopeshwar from "../../public/gopeshwar.png";

export default function Navbar() {
return (
    <div className="absolute top-0 left-0 w-full z-20 mt-4">
    <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        {/* <h1 className="font-yatra text-3xl text-[#578e7e] cursor-pointer">Gopeshwar</h1> */}
        <Image src={gopeshwar} alt="Gopeshwar" className="cursor-pointer w-44" />
        
        {/* Navigation Links */}
        <ul className="flex md:space-x-20 ">
        <li>
            <Link href="/" className="font-glacial text-[#545454] text-xl hover:border-b-2 hover:border-[#4a4848] transition-all duration-300 ease-out hover:underline-offset-8">
                Home
            </Link>
        </li>
        <li>
        <Link href="/" className="font-glacial text-[#545454] text-xl hover:border-b-2 hover:border-[#4a4848] transition-all duration-300 ease-out hover:underline-offset-8">
            About Us
            </Link>
        </li>
        <li>
        <Link href="/" className="font-glacial text-[#545454] text-xl hover:border-b-2 hover:border-[#4a4848] transition-all duration-300 ease-out hover:underline-offset-8">
            Founder
            </Link>
        </li>
        <li>
        <Link href="/" className="font-glacial text-[#545454] text-xl hover:border-b-2 hover:border-[#4a4848] transition-all duration-300 ease-out hover:underline-offset-8">
            Contact Us
            </Link>
        </li>
        </ul>
    </nav>
    </div>
);
}
