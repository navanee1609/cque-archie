import Image from "next/image";
import React from "react";

const Insight = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        {/* Tagline */}
        <h3 className="text-center text-lg text-blue font-bold mb-4">
        Enhance your customer support experience with intelligent solutions.
    </h3>


        {/* Main Heading */}
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Boost Customer Satisfaction
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex justify-center items-center mr-0 lg:mr-8 mb-6 md:mb-0">
          <Image
            src="/images/customer-care.jpg" // Replace with your image
            alt="How CQUE AI Works"
            width={400}
            height={400}
            className="object-cover rounded-3xl"
          />
        </div>
        {/* End Image Section */}

        {/* Features Section */}
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          {[ 
            {
              title: "Quick Resolutions",
              description: "AI instantly diagnoses and resolves issues.",
            },
            {
              title: "24/7 Availability",
              description: "Always-on support, anytime, day or night.",
            },
            {
              title: "Personalized Interactions",
              description:
                "AI uses natural language processing to tailor conversations.",
            },
            {
              title: "Seamless Scalability",
              description: "AI grows with your business, ensuring consistent support.",
            },
          ].map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-2 border border-green-500 border-t-0 border-l-0 rounded-br-xl mt-4 lg:mt-0">
                <h3 className="text-2xl font-bold text-md mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* End Features Section */}
      </div>
    </div>
  );
};

export default Insight;
