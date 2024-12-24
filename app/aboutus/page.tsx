"use client";


import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { InlineWidget } from 'react-calendly';
import CarouselSection from "./CarouselSection";
import FeaturedSolutions from "../fashion/FeaturedSolutions";



const Aboutus = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);


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
    <div>
     
      <>
      
        <div className="container mx-auto sm:px-4  pt-120 mb-14">
        {overlayVisible && <div className="overlay"></div>}
          <div
            className="flex flex-wrap  justify-center ptb-120 bg-cover items-center"
            style={{ background: "url(https://smartle-ai.s3.amazonaws.com/assets/img/roi-banner.webp)" }}
          >
            <div className="lg:w-3/4 pr-4 pl-4 text-center ">
              <h1 className=" fs-48 fw-600 py-5 text-[#3f559e]">
                Beyond Bots :
                <span className=" font-medium text-black">
                  {" "}
                  How CQUE AI is Making Your Store Smarter ?
                </span>
              </h1>
              {/* <button
                className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Try Smartle AI For FREE
              </button> */}
               <div className="flex items-center justify-center">
            <button
                className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
                onClick={handleButtonClick}
            >
                Try CQUE AI For FREE
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
          <FeaturedSolutions/>
        </div>
        <div className="container mx-auto sm:px-4 flex lg:flex-row flex-wrap justify-between w-full">
          <div className="lg:w-3/5 pr-4 pl-4">
            <h2 style={{ textAlign: "left" , fontWeight: 500}} className="fw-bold text-5xl my-4">
              Your AI partner
            </h2>
            <p style={{ textAlign: "left" , fontSize:"1.15rem"}} className="py-3 font-medium">
              Imagine a world where conversation isn't confined to screens and
              buttons. Where you can chat, ask questions, and get things done
              with an AI as natural and engaging as a real person. That's the
              world Smartle AI is building.
              <br />
              <br /> Our team consists of enthusiastic inventors with a single
              objective in mind : creating an AI assistant that understands&nbsp;
              you like a friend. Forget the days of robotic responses and
              frustrating misunderstandings.
            </p>
          </div>
          <div className="lg:w-1/3 pr-4 pl-4">
            <img
              src="/images/aboutus-2.png"
              className="max-w-full h-auto"
              style={{ width: "auto" }}
            />
          </div>
        </div>
        <div
          className="container mx-auto sm:px-4 flex lg:flex-row justify-between py-3 my-20 flex-wrap"
          style={{ overflow: "hidden" }}
        >
          <div className="lg:w-1/3 pr-4 pl-4 py-5">
            <img
              src="/images/aboutus/cque-about.png"
              className="max-w-full h-auto"
            />
          </div>
          <div
            className="lg:w-2/5 pr-4 pl-4 py-5 flex flex-col justify-center"
            style={{ marginLeft: "2%" }}
          >
            <h2 className="container fw-bold text-5xl fs-36 my-4" style={{ fontWeight: 500}}>CQUE AI</h2>
            <h6 className="font-medium text-lg" style={{  fontSize:"1.15rem" }}>
              Continuously learning, it adopts new strategies, while
              <br />
              personalizing its interactions to cater to your unique style and
              
              needs, ensuring a seamless and tailored experience.
            </h6>
          </div>
        </div>

      


 <CarouselSection/>




{/* CTA */}
        <div className="relative overflow-hidden bg-gray-900 rounded-2xl my-16 mx-auto" style={{
              background: "linear-gradient(135deg, #3F559E, #2D4177, #6A86B6, #8A99D8)",
              width: "90%",
              maxWidth: "1200px",
            }}>
            <div className="px-16 py-8 sm:px-8 lg:px-16 lg:py-14">
                <div className="md:flex md:items-center md:space-x-12 lg:space-x-24">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white font-pj">
                            Still Not Sure?
                        </h2>
                        <p className="mt-3 text-base text-white font-medium">
                            Let us show you a quick DEMO tailored to your store. You’ll be impressed.
                        </p>
                    </div>
                    <div className="block md:hidden lg:block">
                        <div className="hidden lg:block">
                            <svg className="w-4 h-auto text-white" viewBox="0 0 16 123" fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 11)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 46)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 81)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 116)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 18)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 53)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 88)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 123)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 25)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 60)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 95)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 32)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 67)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 102)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 39)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 74)"></line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5"
                                    transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 109)"></line>
                            </svg>
                        </div>
                        <div className="mt-4 md:hidden flex justify-center items-center">
                            <svg className="w-auto h-4 text-white" viewBox="0 0 172 16" fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)">
                                </line>
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)">
                                </line>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0">
          <button
            title="Schedule Demo"
            className="flex items-center justify-center px-9 py-3.5 mt-5 text-base font-bold text-gray-900 transition-all duration-200 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white font-pj hover:bg-opacity-90 rounded-xl"
            onClick={handleButtonClick}
            style={{ borderRadius: "28px" }}
          >
            Schedule Demo
          </button>
        
          {/* {showCalendly && (
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
          )} */}
        </div>
        
                </div>
            </div>
        </div>
        
      </>
    </div>
  );
};

export default Aboutus;
