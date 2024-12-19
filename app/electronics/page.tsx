"use client"
import { faCheckCircle, faUsers, faChartLine, faClock, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";


const FeatureSection: React.FC = () => {
    const [showCalendly, setShowCalendly] = useState(false);
        const [overlayVisible, setOverlayVisible] = useState(false);
      
        const [showsCalendly, setShowsCalendly] = useState(false);
      
      
      
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
              Electronics :{" "}
              <span className="font-medium text-black">
                {" "}
                Personalized Support with AI-driven support process

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
      

      
    <section className="py-10 bg-gradient-to-r from-gray-200 via-white to-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <img
              className="w-full rounded-md transform transition-all duration-300 hover:scale-105"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
              alt=""
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black leading-tight text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
            Discover Seamless Electronics Optimization with AI
            </h2>
            <p className="text-lg text-gray-600 font-medium text-center lg:text-left">
            Enhance your operations today with AI-powered electronics management tools.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>

     
      <section className="py-10 bg-gray-50">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl animate__animated animate__fadeIn">
      Join Thousands of Tech Enthusiasts Revolutionizing Their Electronics Experience with Cque AI  

      </h2>
    </div>

    <div className="px-5 py-8 mt-6 bg-white">
  <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
    <div className="flex items-start p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:border">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="flex-shrink-0 w-12 h-12 text-green-500"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold text-green-500">
          Effortless Start to Your Support Journey for Electronics
        </h3>
        <p className="mt-4 text-base font-medium text-black">
          Our AI assistant understands your needs and recommends the right devices, upgrades, or accessories, making your buying/optimization process simple and seamless.
        </p>
      </div>
    </div>

    <div className="flex items-start p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:border">
      <FontAwesomeIcon
        icon={faUsers}
        className="flex-shrink-0 w-12 h-12 text-green-500"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold text-green-500">
          Preliminary Guidance for Informed Decisions
        </h3>
        <p className="mt-4 text-base font-medium text-black">
          Our AI assistant quickly identifies the problem and provides step-by-step guidance for troubleshooting, setup, or connectivity fixes—getting you back on track effortlessly.
        </p>
      </div>
    </div>

    <div className="flex items-start p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:border">
      <FontAwesomeIcon
        icon={faChartLine}
        className="flex-shrink-0 w-12 h-12 text-green-500"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold text-green-500">
          Efficient Issue Resolution
        </h3>
        <p className="mt-4 text-base font-medium text-black">
          AI chatbots quickly resolve common issues by guiding customers through troubleshooting steps and seamlessly escalating complex cases to human agents with all relevant details.
        </p>
      </div>
    </div>

    <div className="flex items-start p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:border">
      <FontAwesomeIcon
        icon={faClock}
        className="flex-shrink-0 w-12 h-12 text-green-500"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold text-green-500">
          Handling Routine Queries
        </h3>
        <p className="mt-4 text-base font-medium text-black">
          AI can automate responses to frequently asked questions, such as product details, shipping times, and return policies, freeing up human agents to handle more complex issues.
        </p>
      </div>
    </div>

    <div className="flex items-start p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:border">
      <FontAwesomeIcon
        icon={faTasks}
        className="flex-shrink-0 w-12 h-12 text-green-500"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold text-green-500">
          Cost Savings and Scalability
        </h3>
        <p className="mt-4 text-base font-medium text-black">
          AI can scale effortlessly to handle a large number of customer inquiries simultaneously, especially during peak periods.
        </p>
      </div>
    </div>
  </div>
</div>


    {/* CTA */}

    <section className="py-10 bg-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-2xl mx-auto text-left sm:text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Experience the future of electronics support with AI-driven guidance.

                </h2>
                <p className="max-w-xl mx-auto mt-4 text-lg font-medium leading-relaxed text-gray-600">
                Get started today for personalized, hassle-free assistance!

                </p>
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
                          &#10005; 
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
   
  </div>
</section>


    

    </>



   
  );
};

export default FeatureSection;

