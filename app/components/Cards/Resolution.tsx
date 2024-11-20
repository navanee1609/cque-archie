import React from "react";

const Resolution = () => {
  return (
    <section className="py-10 bg-white sm:py-14 lg:py-14">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Resolve Issues in Seconds
          </h2>
          <p className="max-w-lg mx-auto mt-8 leading-relaxed font-medium text-lightblack text-xl">
            With our intelligent AI system, resolve issues quickly and efficiently. Our process ensures the fastest response to customer queries, delivering accurate solutions in no time.
          </p>
        </div>

        <div className="relative mt-6 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Curved Dotted Line"
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {/* Step 1: Issue Identification */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Issue Identification</h3>
              <p className="mt-4 text-black font-medium text-lg">
                CQUE AI quickly analyzes customer queries to understand the problem at hand, ensuring a prompt response.
              </p>
            </div>

            {/* Step 2: Solution Search */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Solution Search</h3>
              <p className="mt-4 text-black font-medium text-lg">
                AI quickly scans through the knowledge base, retrieving the most effective solutions to resolve the issue.
              </p>
            </div>

            {/* Step 3: Resolution Delivery */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Resolution Delivery</h3>
              <p className="mt-4 text-black font-medium text-lg">
                CQUE AI presents a clear, actionable solution to the customer, ensuring the issue is resolved efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resolution;
