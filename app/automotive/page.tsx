'use client'
import { faCarAlt, faSearchDollar, faChartLine, faClock, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { InlineWidget } from 'react-calendly';

const page = () => {
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
            <h1 className="fs-48 fw-600 py-5 text-[#3f559e]">
              Automotive :{" "}
              <span className="font-medium text-black">
                {" "}
                Discover Your Dream Car with AI-Powered Assistance
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

      

      <div className="mx-auto max-w-7xl px-5 md:px-10 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="mx-auto w-full max-w-3xl text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 md:text-5xl animate-fade-in">
      Discover Your Perfect Car with AI Precision
    </h2>
    <div className="mx-auto mb-8 mt-4">
      <p className="text-lg font-medium text-blue-700 dark:text-gray-300">
        CQUE AI Assistant simplifies complex workflows by offering intelligent, automated insights to streamline your tasks.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
    {/* Card 1 */}
    <div className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-800 lg:mb-4 animate-slide-up">
      <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400 bg-blue-100 shadow-md transition-transform duration-300 group-hover:rotate-12 dark:border-gray-500 dark:bg-gray-700 lg:right-8">
        <img src="https://www.svgrepo.com/show/530666/gene-sequence.svg" alt="Icon" className="h-12" />
      </div>
      <p className="mb-4 text-xl font-semibold text-blue-900">Tailored Support to Find Your Perfect Car      </p>
      <p className="text-black font-medium text-lg text-center">
      Finding the perfect car is now effortless. Whether it’s a sleek sedan, powerful SUV, or classic import, our AI assistant guides you every step of the way.

      </p>
    </div>

    {/* Card 2 */}
    <div className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-800 lg:mb-4 animate-slide-up">
      <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400 bg-blue-100 shadow-md transition-transform duration-300 group-hover:rotate-12 dark:border-gray-500 dark:bg-gray-700 lg:right-8">
        <img src="https://www.svgrepo.com/show/530666/gene-sequence.svg" alt="Icon" className="h-12" />
      </div>
      <p className="mb-4 text-xl font-semibold text-blue-900">Streamlined Selection Process Backed Up by Expertise
      </p>
      <p className="text-black font-medium text-lg text-center">
      No more endless browsing. By analyzing your preferences—performance, style, or budget—our AI recommends cars that truly match your needs.

      </p>
    </div>

    {/* Card 3 */}
    <div className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-800 lg:mb-4 animate-slide-up">
      <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400 bg-blue-100 shadow-md transition-transform duration-300 group-hover:rotate-12 dark:border-gray-500 dark:bg-gray-700 lg:right-8">
        <img src="https://www.svgrepo.com/show/530666/gene-sequence.svg" alt="Icon" className="h-12" />
      </div>
      <p className="mb-4 text-xl font-semibold text-blue-900">Expert Insights for Smart Decisions      </p>
      <p className="text-black font-medium text-lg text-center">
      Access valuable insights on car models, features, and market trends, helping you make informed choices with confidence.

      </p>
    </div>

    {/* Card 4 */}
    <div className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-800 lg:mb-4 animate-slide-up">
      <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400 bg-blue-100 shadow-md transition-transform duration-300 group-hover:rotate-12 dark:border-gray-500 dark:bg-gray-700 lg:right-8">
        <img src="https://www.svgrepo.com/show/530666/gene-sequence.svg" alt="Icon" className="h-12" />
      </div>
      <p className="mb-4 text-xl font-semibold text-blue-900">Focus on What Matters
      </p>
      <p className="text-black font-medium text-lg text-center">
      Research brands, imports, or model comparisons with ease. Our AI simplifies the process so you can enjoy finding your ideal car.

      </p>
    </div>

    {/* Card 5 */}
    <div className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-800 lg:mb-4 animate-slide-up">
      <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400 bg-blue-100 shadow-md transition-transform duration-300 group-hover:rotate-12 dark:border-gray-500 dark:bg-gray-700 lg:right-8">
        <img src="https://www.svgrepo.com/show/530666/gene-sequence.svg" alt="Icon" className="h-12" />
      </div>
      <p className="mb-4 text-xl font-semibold text-blue-900">Your Personal Car Concierge</p>
      <p className="text-black font-medium text-lg text-center">
      Go beyond simple suggestions with detailed support on vehicle features, market comparisons, and the buying process.

      </p>
    </div>
  </div>
</div>


{/* cta */}

<section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Discover the ease and joy of buying cars with AI support!
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg font-medium leading-relaxed text-gray-600">
                Start your free consultation today for a smooth and premium car-buying experience!
            </p>
        </div>

        <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20">
            {/* List Item 1 */}
            <div className="flex items-start">
                <svg className="flex-shrink-0 text-blue-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">130+ Cars</h3>
                    <p className="mt-1.5 text-base text-gray-600">Ready to use</p>
                </div>
            </div>

            {/* List Item 2 */}
            <div className="flex items-start">
                <svg className="flex-shrink-0 text-blue-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">14+ Models</h3>
                    <p className="mt-1.5 text-base text-gray-600">Make it live</p>
                </div>
            </div>

            {/* List Item 3 */}
            <div className="flex items-start">
                <svg className="flex-shrink-0 text-blue-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">Easy Access</h3>
                    <p className="mt-1.5 text-base text-gray-600">Anyone can use</p>
                </div>
            </div>
        </div>

        <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
            <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-blue-600 sm:rounded-full">
                <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                    <div className="flex-1 w-full min-w-0">
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                            <label htmlFor="email" className="sr-only"></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:outline-none focus:border-none"
                                
                            />
                        </div>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                        Get instant access
                        <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>

        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span className="ml-2 text-md font-medium text-gray-600">Your data is completely secured with us. We don’t share with anyone.</span>
        </div>
    </div>
</section>

 <div className="container mx-auto sm:px-4 ptb-60 max-w-7xl">
        <div
          className="flex flex-wrap justify-center"
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
        >
          <div className="lg:w-1/2 pr-4 pl-4 p-12">
            <h3 className="mb-3 txt-blk fs-40 fw-600 text-center">
              Still Not Sure?
            </h3>
            <p className="txt-blk fs-18 text-center text-md font-medium">
              Let us show you a quick DEMO tailored to your store. You’ll be
              impressed.
            </p>
            <div className="flex justify-center">
              <button
                className="w-70 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-4"
                onClick={handleButtonClick}
              >
                Schedule Demo
              </button>
              {showCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                    <InlineWidget url="https://calendly.com/prabhu-m-spritle/CQUE-ai-demo?month=2024-03" />
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                      onClick={handleCloseCalendly}
                    >
                      &#10005; {/* X button */}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
            style={{
              background:
                "url(https://smartle-ai.s3.amazonaws.com/assets/img/still-not-sure.webp)",
              borderRadius: 10,
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>







    </>
  )
}

export default page