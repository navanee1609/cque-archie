"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const Banner = () => {
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


  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0" style={{ margin: "auto 0" }}>
          <div className="py-3 text-center lg:text-start p-2" >
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              CQUE AI
            </button>
            {/* <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                 Smartle.AI
                </span>
              </AnimatedGradientText> */}
          </div>
          <div className="py-3 text-center lg:text-start">
    <h2
        className="text-5xl lg:text-70xl font-bold text-darkpurple md:mx-2"
        style={{ lineHeight: "3.5rem" }}
    >
        Empower Every Interaction
    </h2>
    <p 
        className="text-lg lg:text-xl text-gray-700 mt-4 md:mx-2" 
        style={{ 
            lineHeight: "1.8rem", 
            fontWeight: "500",
            letterSpacing: "0.02em"
        }}
    >
        Welcome to <span className="text-style-gradient">CQUE AI</span> the future of eCommerce support. 
        Our cutting-edge AI transforms online shopping experiences.

    </p>
</div>


          <div className="flex items-center justify-center p-2 lg:justify-start">
      <button
        className="inline-block p-2 my-3 text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
        onClick={handleButtonClicks}
      >
         Try CQUE AI
      </button>
      {showsCalendly && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
              onClick={handleCalendlyClose}
            >
              &#10005; {/* X button */}
            </button>
            {/* Include your InlineWidget component here */}
            <InlineWidget url="https://calendly.com/" />
          </div>
        </div>
      )}
      {overlayVisible && (
        <div
          className="fixed inset-0 z-40"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // backdropFilter: 'blur(5px)',
          }}
          onClick={handleCalendlyClose}
        />
      )}
    </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 lg:block">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={442}
            style={{ position: "absolute" }}
            className="lg:block hidden"
          />
          <div className="scene" style={{ margin: "0 auto" }}>
            <div className="phone-con" style={{ width: 300 }}>
              <div className="phone" style={{ width: 300 }}>
                <div className="buttons">
                  <div className="left">
                    <div className="button" />
                    <div className="button" />
                    <div className="button" />
                  </div>
                  <div className="right">
                    <div className="button" />
                  </div>
                </div>
                <div className="camera" />
                <div className="screen-container">
                  <iframe
                    src="https://chat.smartle.ai/"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: 49, border: "none" }}
                  />
                  <div className="notch-container" tabIndex={0}>
                    <div className="notch">
                      <div className="content">
                        <div className="left" style={{ margin: "auto 0" }}>
                          {/* <div class="tile"> */}
                          <img
                            src="/images/Sicon.png"
                            style={{
                              height: 20,
                              width: "20x",
                              marginLeft: "1.2rem",
                            }}
                          />
                          {/* </div> */}
                          <div className="text" />
                        </div>
                        <div className="right" />
                        <div className="bar">
                          <div className="duration" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notch-blur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="blur-box">
          <div className="blur-box center-box">
            <div className="bg-shape1 bg-blur"></div>
            <div className="bg-shape2 bg-blur"></div>
            <div className="bg-shape3 bg-blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
