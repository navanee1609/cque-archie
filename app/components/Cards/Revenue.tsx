import Image from "next/image";
import React from "react";

const Revenue = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-center text-lg text-blue font-bold">
            Transform Every Interaction
          </h3>

          {/* Main heading */}
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
            Boost Revenue with Abandoned Cart Recovery
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-2 sm:mt-20 gap-x-16 lg:place-items-center">
          {/* Left Text Section */}
          <div className="space-y-8 lg:pr-16 xl:pr-24">
            {/* Feature 1 */}
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-green-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">Detect</h3>
                <p className="mt-3 text-gray-600 text-lg font-medium">
                  CQUE AI identifies abandoned carts in real-time.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">Re-engage</h3>
                <p className="mt-3 text-gray-600 text-lg font-medium">
                  Personalized messages and exclusive discounts are sent.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-red-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">Recover</h3>
                <p className="mt-3 text-gray-600 font-medium text-lg">
                  Timely reminders and AI-driven engagement help convert sales.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div>
            <Image
              src="/images/revenue.jpg"
              alt="Seamless Integration"
              width={700}
              height={1200}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
