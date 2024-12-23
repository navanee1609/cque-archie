"use client";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { FaCog, FaBrain, FaBullhorn } from "react-icons/fa";

const InsightfulResponse = () => {
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleButtonClicks = () => {
    setShowCalendly(true);
    setOverlayVisible(true);
  };

  const handleCalendlyClose = () => {
    setShowsCalendly(false);
    setOverlayVisible(false);
  };
  const handleCloseCalendly = () => {
    setShowCalendly(false);
    setOverlayVisible(false);
  };

  return (
    <section className="overflow-hidden bg-white py-8 sm:py-12 mx-2 mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column (Text Section) */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold leading-7 text-indigo-600 text-xl mb-2">
                Transforming Customer Experience
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-black sm:text-4xl">
                Insightful Responses
              </p>
              <p className="mt-6 text-xl font-medium leading-8 text-black">
                Harness the power of AI to deliver deeper insights and elevate your service offering.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-3">
                  <FaCog className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-black">Deep Product Knowledge</h3>
                    <p className="mt-2 text-lg font-medium text-black">
                      AI understands your product catalog.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBrain className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-black">Contextual Understanding</h3>
                    <p className="mt-2 text-lg font-medium text-black">
                      Tailored information and suggestions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBullhorn className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-black">Proactive Suggestions</h3>
                    <p className="mt-2 text-lg font-medium text-black">
                      Enhance the customer's experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-x-8">
  <div className="flex items-center justify-center mt-4 lg:mt-0 lg:justify-start w-full">
    <button
      className="inline-block p-2 my-3 text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mx-auto lg:mx-0"
      onClick={handleButtonClicks}
    >
      Try CQUE AI
    </button>

    {showCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
                  <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                    <InlineWidget url="https://calendly.com/smartle/30min" />
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl text-white"
                      onClick={handleCloseCalendly}
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              )}
  </div>
</div>

          </div>

          {/* Right Column (Image Section) */}
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:w-[45rem] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightfulResponse;
