"use client";
import { useEffect } from "react";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
const Roi = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const [visitorsPM, setVisitorsPM] = useState("");
  const [ordersPM, setOrdersPM] = useState("");
  const [aov, setAov] = useState("");
  const [results, setResults] = useState({
    conversationsPerMonth: 0,
    potentialAdditionalSales: 0,
    potentialAOV: 0,
    addUnlockSales: 0,
    monthlyROI: 0,
  });

  const handleButtonClick = () => {
    setOverlayVisible(!overlayVisible);
    setShowCalendly(true);
  };
  const handleCloseCalendly = () => {
    setOverlayVisible(false);
    setShowCalendly(false);
  };
  const handleButtonClicks = () => {
    setOverlayVisible(!overlayVisible);
    setShowsCalendly(true);
  };

  useEffect(() => {
    function btnClick(e) {
      e.preventDefault();
      const visitPM = document.getElementById("visitors-pm").value;
      const orderPM = document.getElementById("order-pm").value;
      const aOV = document.getElementById("aov").value;
      console.log(visitPM, orderPM, aOV);

      if (!visitPM || !orderPM || !aOV) {
        console.log("error");
      } else {
        var conversationsPerMonth = parseFloat((visitPM * 0.015).toFixed(0));
        var potentialAdditionalSales = parseFloat((orderPM * 0.16).toFixed(0));
        var potentialAOV = parseFloat((aOV * 1.1).toFixed(0));
        var addUnlockSales = parseFloat(
          (potentialAdditionalSales * potentialAOV).toFixed(0)
        );
        var monthlyROI = parseFloat(
          (((addUnlockSales - 15) / 15) * 100).toFixed(0)
        );
        document.getElementById("con-pm").textContent = conversationsPerMonth;
        document.getElementById("addSales").textContent =
          potentialAdditionalSales;
        document.getElementById("potAV").textContent = "$ " + potentialAOV;
        document.getElementById("addSalesFromSpritle").textContent =
          "$ " + addUnlockSales;
        document.getElementById("subsCost").textContent = "$ 15";
        document.getElementById("mon-ROI").textContent = monthlyROI + " %";
        document.getElementById("ROI").classList.remove("hidden");
      }
    }
    document.getElementById("myButton").addEventListener("click", btnClick);
  }, []);

  return (
    <div>
      <div className="container mx-auto sm:px-4 ptb-120">
        {/* {overlayVisible && <div className="overlay"></div>} */}
        <div
          className="flex flex-wrap justify-center ptb-120 bg-cover items-center"
          style={{
            background:
              "url(https://smartle-ai.s3.amazonaws.com/assets/img/roi-banner.webp)",
          }}
        >
          <div className="lg:w-3/4 pr-4 pl-4 text-center ">
            <h1 className="fs-48 txt-blk fw-600">
              Calculate how much Smartle AI can boost your Income
            </h1>
            <p className="mt-4 fs-18">
              Partnering with Smartle AI ensures the fastest path to increasing
              E-Commerce revenue and guarantees a high return on investment.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 ptb-60">
        <div className="flex flex-wrap  items-center justify-center">
          <h3
            className="text-center txt-blue mb-5 fs-30 fw-600"
            style={{ width: "100%" }}
          >
            CALCULATE YOUR ROI
          </h3>
          <h4 className="text-center txt-blk mb-5 fs-30 fw-300">
            Maximize your potential with Smartle AI
          </h4>
          <div
            className="lg:w-3/4 pr-4 pl-4 bg-white lg:flex  justify-center"
            style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
          >
            <div className="lg:w-1/2 pr-4 pl-4 p-6 mb-4 lg:mb-0">
              <form className="my-3">
                <h5 className="mb-4 fs-18 fw-600">Your Current Process</h5>
                <div className="mb-4">
                  <label className="mb-3">
                    Enter the number of store visitors per month:
                  </label>
                  <input
                    type="number"
                    className="w-full input ps-3 lh-22"
                    required
                    id="visitors-pm"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3">
                    Enter the number of orders you generate per month:
                  </label>
                  <input
                    type="number"
                    className="w-full input ps-3 lh-22"
                    required
                    id="order-pm"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 ">
                    What is your store's Average Order Value (AOV)?
                  </label>
                  <input
                    type="number"
                    className="w-full lh-22 input ps-3"
                    required
                    id="aov"
                  />
                </div>
                <div className="mt-5">
                  <button
                    className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded w-full mt-2"
                    id="myButton"
                  >
                    Calculate
                  </button>
                  {/* <button
                  id="myButton"
              className="text-sm md:text-xl  hover:shadow-xl text-white  px-6 md:py-3 md:px-9 rounded-full hover:bg-hoblue"
              style={{ backgroundColor: "#00356b" , width:"100%" }}
            >
              Calculate
            </button> */}
                </div>
              </form>
            </div>

            <div className="lg:w-1/2 pr-4 pl-4">
              <div
                className=" ms-3 my-2 px-2 pb-5 pt-3 bg-blue h-390"
                style={{
                  boxShadow: "0px 16px 48px 0px #D9D9D9",
                  borderRadius: 10,
                }}
              >
                <h5 className="my-3 ps-3 fs-18 fw-600">
                  ROI Calculator Result
                </h5>
                <ul className="flex flex-col pl-0 mb-0 rounded  bg-blue">
                  <li className="relative block py-3 px-6 -mb-px bg-blue lh-2 flex items-center justify-between">
                    Conversations per month:
                    <span className="value float-end fs-20 fw-600" id="con-pm">
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Potential additional sales:
                    <span
                      className="value float-end fs-20 fw-600"
                      id="addSales"
                    >
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Potential AOV from SmartleAI sales:
                    <span className="value float-end fs-20 fw-600" id="potAV">
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Additional unlock sales from SmartleAI:
                    <span
                      className="value float-end fs-20 fw-600 "
                      id="addSalesFromSpritle"
                    >
                      0
                    </span>
                  </li>
                  <li
                    className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 bg-blue lh-2 flex items-center justify-between"
                    style={{ borderBottom: ".2rem" }}
                  >
                    Subscription Cost:
                    <span
                      className="value float-end fs-20 fw-600"
                      id="subsCost"
                    >
                      0
                    </span>
                  </li>
                </ul>
                <div className=" flex items-center justify-center">
                  <div
                    className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded py-2 flex items-center justify-content-evenly bg-white w-90 text-left my-3 fs-20 hidden"
                    id="ROI"
                  >
                    Monthly ROI :{" "}
                    <span
                      id="mon-ROI"
                      className="float-end txt-green fw-600 fs-30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center items-center mt-5">
          <div className="lg:w-1/3 pr-4 pl-4 text-center">
            <button
              className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mb-5"
              style={{ width: "90%" }}
              onClick={handleButtonClick}
            >
              Unlock Additional Sales Now
            </button>
            {showCalendly && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                  <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                    onClick={handleCloseCalendly}
                  >
                    &#10005; {/* X button */}
                  </button>
                </div>
              </div>
            )}
            {overlayVisible && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 40,
                }}
                onClick={handleCloseCalendly}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 ptb-60 max-w-7xl">
        <div
          className="flex flex-wrap justify-center"
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
        >
          <div className="lg:w-1/2 pr-4 pl-4 p-12">
            <h3 className="mb-3 txt-blk fs-40 fw-600 text-center">
              Still Not Sure?
            </h3>
            <p className="txt-blk fs-18 text-center">
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
              {showsCalendly && (
                <>
                  <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
                    onClick={() => setShowsCalendly(false)}
                  ></div>
                  <div className="fixed inset-0 flex items-center justify-center z-60">
                    <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white" // Increased font size to make the X button larger
                        onClick={() => setShowsCalendly(false)}
                      >
                        &#10005; {/* X button */}
                      </button>
                      <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                    </div>
                  </div>
                </>
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
  );
};

export default Roi;
