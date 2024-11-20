import Image from "next/image";

const HowItWorks = () => {
    return (
        <div className="py-12 rounded-3xl">
            {/* Heading Section */}
            <h3 className="text-center text-lg text-blue font-bold">
                HOW IT WORKS
            </h3>
            <h4 className="text-center text-4xl lg:text-5xl font-bold mt-4 text-darkpurple mx-2">
                How CQUE AI Works for You?
            </h4>

            {/* Two Column Layout */}
            <div className="mt-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-8 lg:px-16">
                {/* Left Column: Image */}
                <div className="flex justify-center items-center lg:flex-1">
                    <Image
                        src="/images/cque-work.png" // Replace with your image
                        alt="How CQUE AI Works"
                        width={400}
                        height={400}
                        className="object-cover rounded-3xl shadow-xl h-full"
                    />
                </div>

                {/* Right Column: Info Section */}
                <div className="flex flex-col justify-between lg:flex-1 space-y-8">
                    <div className="bg-[#AFD5F0] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                            Adaptive Learning
                        </h5>
                        <p className="text-gray-700 text-lg">
                            CQUE AI evolves with every interaction.
                        </p>
                    </div>
                    <div className="bg-[#F8C8DC] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                            Seamless Integration
                        </h5>
                        <p className="text-gray-700 text-lg">
                            Integrate with your Shopify store in just a few clicks.
                        </p>
                    </div>
                    <div className="bg-[#FEDD9E] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                            Smart Automation
                        </h5>
                        <p className="text-gray-700 text-lg">
                            Boost efficiency with AI-driven automated workflows and solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
