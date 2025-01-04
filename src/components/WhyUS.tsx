import {motion} from 'framer-motion';
export default function WhyUS() {
    return (
        <div className="bg-[#F5ECD5] py-16">
            {/* Image with overlay and text */}
            <div className="relative w-full h-[500px]">
                {/* Background Image */}
                <img 
                    src="/whyus.jpg" 
                    alt="whyus" 
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* Mid-layer color overlay */}
                <div className="absolute inset-0 bg-[#578E7E] opacity-90 rounded-lg"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <p className="text-lg md:text-xl font-semibold font-glacial mb-2 uppercase tracking-widest">
                        Why Choose Us
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold font-cinzel mb-6 leading-relaxed">
                        Taste the Difference with FreshMoo's Hormone-Free Milk
                    </h1>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                        {/* Locally Sourced Feature */}
                        <div className="flex flex-col items-center">
                            <img src="/cow.png" alt="Cow" className="w-14 h-14 mb-4" />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Locally Sourced
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is sourced from local farmers who treat their cows with love and care.
                            </p>
                        </div>

                        {/* Quality Feature */}
                        <div className="flex flex-col items-center">
                            <img src="/quality.png" alt="Quality" className="w-14 h-14 mb-4" />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Quality
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is of the highest quality and free from artificial hormones.
                            </p>
                        </div>

                        {/* Organic Feature */}
                        <div className="flex flex-col items-center">
                            <img src="/plant-based.png" alt="Organic" className="w-14 h-14 mb-4" />
                            <h2 className="text-lg md:text-xl font-semibold font-glacial mb-2">
                                Organic
                            </h2>
                            <p className="text-sm md:text-base font-glacial leading-relaxed">
                                Our milk is organic and free from harmful chemicals or pesticides.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
