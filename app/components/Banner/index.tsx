"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import ChatMessages from "./ChatMessages";

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
        Welcome to <span className="text-style-gradient">CQUE AI</span> – the future of eCommerce support.
        Empower your business with AI-driven sales, marketing, and customer service excellence to redefine online shopping experiences.

    </p>
</div>


          <div className="flex items-center justify-center p-2 lg:justify-start">
      <button
        className="inline-block p-2 my-3 text-center select-none border font-bold whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
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
      <div className="phone" style={{ width: 300, position: "relative" }}>
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
          <div className="notch-container" tabIndex={0}>
            <div className="notch">
              <div className="content">
                <div className="left">
                  <img
                    src="/images/notch-logo.png"
                    style={{
                      height: 40,
                      width: "150px",
                      marginLeft: "1.2rem",
                    }}
                  />
                  <div className="text" />
                </div>
                <div className="right" />
                <div className="bar">
                  <div className="duration" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 49,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Adjusted to separate top and chat
              padding: "1rem",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {/* Assistant Title */}
            <div
              style={{
                flexShrink: 0, // Prevent collapsing
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  marginTop: "1.7rem",
                  textAlign: "center",
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                CQUE AI Assistant
              </h3>
            </div>

            {/* Chat Container */}
            <div
              className="chat-container"
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                maxHeight: "400px",
                overflowY: "auto",
                scrollbarWidth: "none",
                flexGrow: 1, // Allow chat to fill the rest of the space
              }}
            >
              {/* Messages */}
              <ChatMessages />
            </div>

            {/* Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #4CAF50",
                borderRadius: "20px",
                padding: "0.3rem 1rem",
                marginTop: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                style={{
                  flexGrow: 1,
                  border: "none",
                  outline: "none",
                  padding: "0.3rem",
                  fontSize: "0.75rem",
                  fontFamily: "Urbanist, sans-serif",
                }}
              />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginLeft: "0.5rem",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  color: "#286955",
                }}
              >
                <i className="fa-brands fa-telegram"></i>
              </button>
            </div>
          </div>
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
