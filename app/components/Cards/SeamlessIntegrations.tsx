import Image from "next/image";

const SeamlessIntegrations = () => {
  return (
    <div className="py-12 rounded-3xl">
    {/* Heading Section */}
    <h3 className="text-center text-lg text-blue font-bold">
        Integrating Smarter
    </h3>
    <h4 className="text-center text-4xl lg:text-5xl font-bold mt-4 text-darkpurple">
    Seamless Integration
    </h4>

    {/* Two Column Layout */}
    <div className="mt-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-8 lg:px-16">
        {/* Left Column: Info Section */}
        

        <div className="flex flex-col justify-between lg:flex-1 space-y-8">
            <div className="bg-[#AFD5F0] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                Quick Setup
                </h5>
                <p className="text-gray-700 text-lg">
                Easy installation for instant use.
                </p>
            </div>
            <div className="bg-[#F8C8DC] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                Data Sync
                </h5>
                <p className="text-gray-700 text-lg">
                Automatically updates with product info.
                </p>
            </div>
            <div className="bg-[#FEDD9E] p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-semibold text-darkpurple mb-4">
                Customization
                </h5>
                <p className="text-gray-700 text-lg">
                Tailor the AI assistant to your brand.
                </p>
            </div>
        </div>

        {/* Right side Image */}
        <div className="flex justify-center items-center lg:flex-1">
            <Image
                src="/images/integration.png" // Replace with your image
                alt="How CQUE AI Works"
                width={400}
                height={400}
                className="object-cover rounded-3xl shadow-xl h-full"
            />
        </div>
    </div>
</div>
  );
};

export default SeamlessIntegrations;
