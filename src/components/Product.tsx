
import Image from 'next/image';
import dairyProduct1 from '../../public/dairyProduct1.jpg';
import dairyProduct2 from '../../public/dairyProduct2.jpg';
import dairyProduct3 from '../../public/dairyProduct3.jpg';
import dairyProduct4 from '../../public/dairyProduct4.jpg';
import dairyProduct5 from '../../public/dairyProduct5.jpg';
import dairyProduct6 from '../../public/dairyProduct6.jpg';
import dairyProduct7 from '../../public/dairyProduct7.jpg';
import dairyProduct8 from '../../public/dairyProduct8.jpg';
import dairyProduct9 from '../../public/dairyProduct9.jpg';
import HeadingProduct from './HeaadingProduct';
import './animation.css';
import {
    AlertDialog,
    AlertDialogAction,
    // AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Product() {




    return (
        <div className="min-h-screen flex flex-col items-center bg-[#FEFDFB] py-16 px-6">
            {/* Section Header */}
            <HeadingProduct />

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl font-glacial ">
                {/* Product Card 1 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct1}
                                alt="Fresh Milk"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Fresh Milk</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Locally sourced, pure milk for every family.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 2 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct2}
                                alt="Creamy Yogurt"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Creamy Yogurt</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Velvety and rich, made with the best milk.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 3 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct3}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 4 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct4}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 5 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct5}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 6 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct6}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 7 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct7}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 8 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct8}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>

                {/* Product Card 9 */}
                <div className="relative bg-gradient-to-br from-[#F5ECD5] via-[#FEFDFB] to-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
                    <div className="p-6 flex flex-col items-center">
                        <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                            <Image
                                src={dairyProduct9}
                                alt="Pure Butter"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">Pure Butter</h2>
                        <p className="text-sm text-[#3D3D3D] text-center">
                            Soft and smooth, perfect for spreading.
                        </p>
                        <span className="mt-4 px-6 py-2 bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300 font-glacial">
                            <AlertDialog>
                                <AlertDialogTrigger>Learn More</AlertDialogTrigger>
                                <AlertDialogContent className='font-glacial'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Locally sourced, pure milk for every family.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                                        <AlertDialogAction className='bg-[#578E7E] text-white text-sm rounded-full hover:bg-[#3D3D3D] transition duration-300'>close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 font-glacial">
                <button className="bg-[#3D3D3D] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#578E7E] transition duration-300">
                    View All Products
                </button>
            </div>
        </div>
    );
}
