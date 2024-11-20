import React from "react";

const SeamlessIntegration = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 mx-2">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          {/* Left Content */}
          <div>
            <h3 className=" text-lg text-blue font-bold mb-4">
              Seamlessly Integrate & Grow
            </h3>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-black sm:text-4xl lg:text-4xl">
              Seamless Escalation
            </h2>
            <p className="mt-6 text-lg font-medium font leading-relaxed text-gray-700">
              Revolutionize your business operations with AI-driven communication, streamlined workflows, and enhanced control, all within one platform.
            </p>
            <div className="mt-5 space-y-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full items-center justify-center">
                    ✔
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">AI Assistance</h3>
                  <p className="text-gray-600 text-lg font-medium">Quickly handle routine customer inquiries with precision.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full items-center justify-center">
                    ✔
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Intelligent Routing</h3>
                  <p className="text-gray-600 text-lg font-medium">Automatically identify and prioritize complex issues.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full items-center justify-center">
                    ✔
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Smooth Handoff</h3>
                  <p className="text-gray-600 text-lg font-medium">Seamlessly transfer context-rich information between teams.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                className="ml-auto rounded-lg shadow-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt="Person"
              />
              <img
                className="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                alt="Wavey Lines"
              />
              <div className="absolute -bottom-10 -left-16 bg-yellow-300 rounded-lg shadow-lg" style={{ background: "#FEDD9E" }}>
                <div className="px-6 py-8">
                  <span className="block text-4xl font-bold text-black">CQUE AI</span>
                  <span className="block mt-2 text-md leading-tight text-black">
                    High Conversions<br />Everything
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;
