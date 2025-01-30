import Image from 'next/image';
import founderImg from '../../public/CEO1.jpg';
import CofounderImg from '../../public/CEO2.jpg';

export default function Founder() {
    return (
        <div className="font-glacial min-h-screen flex flex-col items-center justify-center bg-[#F5ECD5] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full text-center mb-12">
                <h1 className="text-4xl sm:text-4xl  mb-4 text-[#3D3D3D] font-cinzel">
                    Meet Our Leadership
                </h1>
                <p className="text-lg sm:text-xl text-[#666] italic mb-8">
                    Visionaries shaping the future of our company
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 w-full max-w-6xl px-4">
                <div className="relative group w-full max-w-[350px]">
                    <div className="overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={founderImg}
                            alt="Founder"
                            width={400}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-[#333] mb-2">John Smith</h3>
                        <p className="text-lg text-[#666]">Founder & CEO</p>
                    </div>
                </div>

                <div className="relative group w-full max-w-[350px]">
                    <div className="overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={CofounderImg}
                            alt="Co-Founder"
                            width={400}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-[#333] mb-2">Sarah Johnson</h3>
                        <p className="text-lg text-[#666]">Co-Founder & CTO</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 max-w-2xl text-center px-4">
                <p className="text-base text-[#666] italic">
                    Founder details will be added soon...
                </p>
            </div>
        </div>
    );
}