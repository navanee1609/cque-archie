import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaUserLock } from 'react-icons/fa'; // Importing relevant icons

const GenAi = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-14">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black">Generative AI Capabilities</h2>
          <p className="mt-4 font-medium text-lightblack text-lg">
          Our platform utilizes advanced generative AI technologies to offer innovative solutions, focusing on security, compliance, and data privacy.
          </p>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {/* First Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-blue-100">
              <FaCheckCircle className="text-blue-500 text-7xl" /> {/* Blue Icon */}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">Dynamic Responses</h3>
            <p className="mt-4 text-black font-medium">
              Personalised experience for each customer
            </p>
          </div>

          {/* Second Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-orange-100">
              <FaShieldAlt className="text-orange-500 text-7xl" /> {/* Orange Icon */}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">Content Creation</h3>
            <p className="mt-4 text-black font-medium">
            Generate marketing content for your products.

            </p>
          </div>

          {/* Third Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-green-100">
              <FaUserLock className="text-green-500 text-7xl" /> {/* Green Icon */}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">Problem Solving</h3>
            <p className="mt-4 text-black font-medium">
            Offer tailored solutions to customer issues.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAi;
