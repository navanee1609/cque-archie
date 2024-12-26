import React from 'react';

const Conversionrates = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Tagline Section - Centered */}
        <div className="text-center mb-10">
          <h3 className="text-center text-2xl text-blue font-bold mb-4">
            Unlock the Power of Data-Driven Strategies to Boost Your Conversion Rates
          </h3>
        </div>

        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-6">
          {/* Left Column (Image and Quote) */}
          <div className="relative lg:mb-6">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt="Pattern"
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt="Girl working on laptop"
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md bg-[#AFD5F0]">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-black sm:text-lg">
                        Achieve higher conversions with a data-driven approach and personalized strategies.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Content Section) */}
          <div className="2xl:pl-16 space-x-3">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Boost Conversion Rates
            </h2>
            <div className="mt-9">
              {/* Instant Answers Section */}
              <div className="flex items-start space-x-3">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-black">Instant Answers</h3>
                  <p className="mt-2 text-black text-lg font-medium">
                    Prevent cart abandonments by offering real-time responses to customers' queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {/* Personalized Recommendations Section */}
              <div className="flex items-start space-x-3">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-black">Personalized Recommendations</h3>
                  <p className="mt-2 text-black text-lg font-medium">
                    Increase the likelihood of relevant purchases by offering tailored suggestions based on customer behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {/* Upselling Opportunities Section */}
              <div className="flex items-start space-x-3">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-black">Upselling Opportunities</h3>
                  <p className="mt-2 text-black text-lg font-medium">
                    Boost the average order value by presenting upsell opportunities during the checkout process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversionrates;
