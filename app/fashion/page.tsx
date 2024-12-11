"use client";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShoppingCart,
  faDollarSign,
  faClock,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import FeaturedSolutions from "./FeaturedSolutions";

const Fashion = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const [showsCalendly, setShowsCalendly] = useState(false);

  const handleButtonClicks = () => {
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const handleCalendlyClose = () => {
    setShowsCalendly(false);
    setOverlayVisible(false);
  };

  const handleButtonClick = () => {
    setShowCalendly(true);
    setOverlayVisible(true);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
    setOverlayVisible(false);
  };

  return (
    <>
      <div className="container mx-auto sm:px-4 ptb-120">
        {overlayVisible && <div className="overlay"></div>}
        <div
          className="flex flex-wrap justify-center ptb-120 bg-cover items-center"
          style={{
            background:
              "url(https://smartle-ai.s3.amazonaws.com/assets/img/roi-banner.webp)",
          }}
        >
          <div className="lg:w-3/4 pr-4 pl-4 text-center">
            <h1 className="fs-48 txt-blk fw-600 py-5 text-green-500">
              Fashion / Apparel :{" "}
              <span className="font-medium">
                {" "}
                Experience Effortless Fashion with AI-Powered Styling
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <button
                className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
                onClick={handleButtonClick}
              >
                Try CQUE AI For FREE
              </button>
              {showCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-black"
                      onClick={handleCloseCalendly}
                    >
                      &#10005; {/* X button */}
                    </button>
                    <InlineWidget url="https://calendly.com/" />
                  </div>
                </div>
              )}
              {overlayVisible && (
                <div
                  className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                  onClick={handleCloseCalendly}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl animate__animated animate__fadeIn">
              Join Thousands of Happy Customers Transforming Their Fashion
              Experience
            </h2>
          </div>

          <div className="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
              <div className="flex items-start transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="flex-shrink-0 w-16 h-16 text-green-500"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-green-500">
                    Personalised Fashion Guidance Made Simple
                  </h3>
                  <p className="mt-4 text-base font-medium text-black">
                    Discover on-demand style advice and outfit suggestions
                    tailored to your unique preferences and body features. With
                    the power of AI, making confident fashion choices has never
                    been this easy or enjoyable.
                  </p>
                </div>
              </div>

              <div className="flex items-start transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="flex-shrink-0 w-16 h-16 text-green-500"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-green-500">
                    Tailored Fashion Recommendations for Stress-Free Shopping
                  </h3>
                  <p className="mt-4 text-base font-medium text-black">
                    Say goodbye to endless browsing! Our AI customises outfit
                    ideas based on your style and needs, transforming your
                    shopping experience into a breeze.
                  </p>
                </div>
              </div>

              <div className="flex items-start transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="flex-shrink-0 w-16 h-16 text-green-500"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-green-500">
                    Boost Sales with Engaging Conversations
                  </h3>
                  <p className="mt-4 text-base font-medium text-black">
                    Keep customers coming back by offering discounts and rewards
                    during interactions. Incentivised shopping creates a
                    win-win, increasing conversions and driving revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon
                  icon={faClock}
                  className="flex-shrink-0 w-16 h-16 text-green-500"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-green-500">
                    24/7 Style Support for Every Occasion
                  </h3>
                  <p className="mt-4 text-base font-medium text-black">
                    Need a look for a special event or a casual outing? Enjoy
                    round-the-clock guidance to make confident style decisions
                    whenever you need it.
                  </p>
                </div>
              </div>

              <div className="flex items-start transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="flex-shrink-0 w-16 h-16 text-green-500"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-green-500">
                    Instant Assistance for a Worry-Free Shopping Journey
                  </h3>
                  <p className="mt-4 text-base font-medium text-black">
                    From size advice to order tracking, our AI delivers instant,
                    accurate responses. Save time, cut customer service costs,
                    and enhance your overall experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-10 bg-gradient-to-r from-gray-200 via-white to-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                <div className="relative mb-12">
                  <img
                    className="w-full rounded-md transform transition-all duration-300 hover:scale-105"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                    alt=""
                  />

                  <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                    <div className="overflow-hidden bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xl font-semibold text-blue-600">
                            AI-Driven Insights Boost Fashion Engagement
                          </p>
                          <p className="mt-2 text-sm font-medium text-gray-800 sm:text-lg">
                            Transform Your Style with AI Recommendations
                          </p>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center bg-blue-600 text-white rounded-full">
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl leading-tight text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
                    Discover Effortless Style with AI-Enhanced Fashion
                  </h2>
                  <p className="text-lg text-gray-600 font-medium text-center lg:text-left">
                    Elevate your fashion game today with AI-powered styling.{" "}
                    <br />
                    Start your free trial and step into effortless style!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FeaturedSolutions />

          {/* cta */}
          <div className="container mx-auto sm:px-4 ptb-60">
            <div
              className="flex flex-wrap   justify-center  "
              style={{
                boxShadow: "0px 16px 48px 0px #D9D9D9",
                borderRadius: 10,
              }}
            >
              <div className="lg:w-1/2 pr-4 pl-4 p-12">
                <h3 className="mb-3 txt-blk fs-40 fw-600 text-center">
                  Still Not Sure?
                </h3>
                <p
                  className="text-black font-medium text-center text-md"
                  style={{ fontSize: "large" }}
                >
                  Let us show you a quick DEMO tailored to your store. You’ll be
                  impressed.
                </p>
                <div className="flex items-center justify-center">
                  <button
                    className="my-3 inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
                    onClick={handleButtonClicks}
                  >
                    Schedule Demo
                  </button>
                  {showsCalendly && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-black"
                          onClick={handleCalendlyClose}
                        >
                          &#10005; {/* X button */}
                        </button>
                        <InlineWidget url="https://calendly.com/" />
                      </div>
                    </div>
                  )}
                  {overlayVisible && (
                    <div
                      className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                      onClick={handleCalendlyClose}
                    />
                  )}
                </div>
              </div>
              <div
                className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
                style={{
                  background: "url(images/still-not-sure.webp)",
                  borderRadius: 10,
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fashion;
