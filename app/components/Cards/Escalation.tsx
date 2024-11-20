import React from 'react';
import { FaLaptopCode, FaVideo, FaCode, FaShieldAlt } from 'react-icons/fa'; // Importing icons from Font Awesome

const Celebration = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-12 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Seamless Escalation
          </h2>
        </div>

        <div className="px-5 py-8 mt-4 bg-white lg:mt-4 lg:p-16">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="flex items-start">
              <FaLaptopCode className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">AI Assistance</h3>
                <p className="mt-4 text-black">
                Handle most customer inquiries.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start">
              <FaVideo className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">Intelligent Routing</h3>
                <p className="mt-4 text-black">
                Identify complex issues.                  
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start">
              <FaCode className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">Smooth Handoff</h3>
                <p className="mt-4 text-black">
                Transfer relevant context.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebration;
