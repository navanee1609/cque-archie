'use client';

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
const Pricing = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [isCalendlyVisible, setCalendlyVisibility] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCal, setIsVisibleCal] = useState(false);
  const [isVisibleTrial, setIsVisibleTrial] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(2);
  const [errors, setErrors] = useState({
    visitPM: '',
    orderPM: '',
    aOV: '',
  });

  const handleButtonClick = () => {
    setOverlayVisible(!overlayVisible);
    setShowCalendly(true);
    setCalendlyVisibility(true);
  };

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const getCardClasses = (cardId) => {
    return cardId === activeCard
      ? 'lg:w-1/4 pr-4 pl-4 bg-blue p-6 br-14 box-shadow mb-4 lg:mb-0'
      : 'lg:w-1/4 pr-4 pl-4 mb-4 lg:mb-0';
  };

  const getTextColor = (cardId) => {
    return cardId === activeCard ? 'text-white' : 'text-gray';
  };

  const getButtonClasses = () => {
    return 'relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-white text-gray-800 btn-rounded mt-3 w-90';
  };

  const handleCloseCalendly = () => {
    setOverlayVisible(false);
    setShowCalendly(false);
    setShowsCalendly(false);
    setCalendlyVisibility(false);
  };


  const handleClicks = () => {
    setShowWidget(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleTrialButtonClick = () => {
    setIsVisibleTrial(true);
  };

  const handlesClick = () => {
    setIsVisibleCal(true);
  };




  const handleButtonClicks = () => {
    setOverlayVisible(!overlayVisible);
    setShowsCalendly(true);
  };

  const handlesButtonClick = () => {
    setCalendlyVisibility(true);
  };

  const handleClick = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    function btnClick(e) {
      e.preventDefault();

      const visitPM = document.getElementById("visitors-pm").value;
      const orderPM = document.getElementById("order-pm").value;
      const aOV = document.getElementById("aov").value;

      let newErrors = {
        visitPM: '',
        orderPM: '',
        aOV: '',
      };

      if (!visitPM) {
        newErrors.visitPM = 'Please enter the number of store visitors per month.';
      }
      if (!orderPM) {
        newErrors.orderPM = 'Please enter the number of orders you generate per month.';
      }
      if (!aOV) {
        newErrors.aOV = 'Please enter the Average Order Value (AOV).';
      }

      setErrors(newErrors);

      if (newErrors.visitPM || newErrors.orderPM || newErrors.aOV) {
        return; // Stop processing if there are errors
      }

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
      document.getElementById("addSales").textContent = potentialAdditionalSales;
      document.getElementById("potAV").textContent = "$ " + potentialAOV;
      document.getElementById("addSalesFromSpritle").textContent = "$ " + addUnlockSales;
      document.getElementById("subsCost").textContent = "$ 15";
      document.getElementById("mon-ROI").textContent = monthlyROI + " %";
      document.getElementById("ROI").classList.remove("hidden");
    }

    // document.getElementById("myButton").addEventListener("click", btnClick);
  }, []);


  return (
    <>
      <div className="container mx-auto sm:px-4 ptb-120">
        <div className="flex flex-wrap  justify-center">
          <div
            className="lg:w-full pr-4 pl-4 text-center ptb-120 bg-cover rounded-xl"
            style={{ background: "url(/images/pricing-banner.webp)" }}
          >
            <h1 className=" fs-48 txt-blk px-3 mb-4">
              <span className="fw-600" style={{color:"#3f559e"}}>Conversation to Conversion : </span>
              Mastering the Art of Sales-Driven AI Chat
            </h1>
            <h2 className=" text-xl font-medium mt-4 lg:block hidden max-w-5xl" style={{ margin: "0 auto" }}>
              At CQUE.AI, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and let&apos;s build your success story together.
            </h2>
            <p className="mt-4 fs-18 block lg:hidden py-4">
              At CQUE.AI, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and <br /> let&apos;s build your success story together.
            </p>
            <p />
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 pb-20">
        <h2 className="text-center text-3xl md:text-5xl" style={{ paddingBottom: '5%' }}>
          Pricing that propels your success
        </h2>
        <div className="flex flex-wrap pr-4 pl-4 mx-auto justify-center cursor-pointer">
  {[
    {
      price: '$99 / month',
      plan: 'Essential',
      replies: '1,500 replies/month',
      webpages: '5,000 webpages stored',
      support: 'Standard Support',
      trainAI: 'Train your AI',
      proActiveSales: 'Pro-Active AI Sales',
      embedAnywhere: 'Embed Anywhere',
      upSelling: 'Up Selling',
      crossSelling: 'Cross Selling',
      mediaIntegration: 'Media Channel Integration',
      crmIntegration: 'CRM tool Integration',
      aiImageSearch: 'AI Image Search*',  // Missing
    },
    {
      price: '$199 / month',
      plan: 'Growth',
      replies: '3,000 replies/month',
      webpages: '15,000 webpages stored',
      support: 'Priority Support',
      trainAI: 'Train your AI',
      proActiveSales: 'Pro-Active AI Sales',
      embedAnywhere: 'Embed Anywhere',
      upSelling: 'Up Selling',
      crossSelling: 'Cross Selling',
      mediaIntegration: 'Media Channel Integration',
      crmIntegration: 'CRM tool Integration',
      aiImageSearch: 'AI Image Search*',  // Missing
    },
    {
      price: '$499 / month',
      plan: 'Premium',
      replies: '7,000 replies/month',
      webpages: '30,000 webpages stored',
      support: 'Priority Support',
      trainAI: 'Train your AI',
      proActiveSales: 'Pro-Active AI Sales',
      embedAnywhere: 'Embed Anywhere',
      upSelling: 'Up Selling',
      crossSelling: 'Cross Selling',
      mediaIntegration: 'Media Channel Integration',
      crmIntegration: 'CRM tool Integration',
      aiImageSearch: 'AI Image Search*',
    },
  ].map((card, index) => (
    <div
      key={index}
      className={`w-full sm:w-1/2 lg:w-1/3 p-6 ${getCardClasses(index + 1)}`}
      onClick={() => handleCardClick(index + 1)}
      style={{ alignSelf: 'flex-start' }}
    >
      {index === 1 && (
        <div
          className={`inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded-full py-2 px-4 fs-15 fw-500 float-end mb-3 ${
            activeCard === index + 1 ? 'bg-white text-black' : 'bg-blue text-white'
          }`}
        >
          Most Popular
        </div>
      )}
      <h3 className={`mb-2 text-4xl font-bold ${getTextColor(index + 1)}`}>{card.plan}</h3>
      <p className={`mb-4 fs-15 ${getTextColor(index + 1)}`}>5 days free trial</p>
      <ul className="p-0" style={{ listStyle: 'none' }}>
        {[
          card.replies,
          card.webpages,
          card.support,
          card.trainAI,
          card.proActiveSales,
          card.embedAnywhere,
          card.upSelling,
          card.crossSelling,
          card.mediaIntegration,
          card.crmIntegration,
          card.aiImageSearch,
        ].map((item, idx) => {
          // If the item is missing (null), we'll use the text from the other plans
          const fallbackItem = (index === 0 && card.webpages) || (index === 1 && card.webpages) || (index === 2 && card.replies);
          const itemToDisplay = item || fallbackItem; // Fallback if item is null
          return (
            <li
              key={idx}
              className={`fs-15 font-medium text-lg mb-2 ${getTextColor(index + 1)} ${
                ((index === 0 && idx >= 5) || (index === 1 && idx >= 8)) ? 'line-through' : ''
              }`}
            >
              <i
                className={`fa-solid fa-circle-check pe-2 ${activeCard === index + 1 ? 'text-white' : 'text-blue'}`}
              />
              {itemToDisplay}
            </li>
          );
        })}
      </ul>
      <div className="text-center">
        <button
          className={`py-1 px-5 rounded-full font-medium text-lg transition-colors duration-500 ${
            activeCard === index + 1 ? 'bg-white text-blue' : 'bg-blue text-white'
          }`}
          onClick={() => setShowCalendly(true)}
        >
          {card.price}
        </button>
      </div>
    </div>
  ))}
</div>


      </div>

      {/* pricing matrix */}

    <div className="pricing-table-container" style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
  <div className="pricing-table" style={{ width: '100%', maxWidth: '1200px', overflowX: 'auto' }}>
  <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>
    Compare Our Pricing Plans
  </h2>
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',
      // boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      // backgroundColor: '#fff',
      // overflow: 'hidden',
    }}>
      <thead>
        <tr>
          <th style={{
            padding: '20px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#F4F7FB',
            border: '1px solid #ddd',
            borderRadius: '12px 0 0 0',
            textAlign: 'center',
          }}>Compare our plans</th>
          <th
  style={{
    padding: '20px 30px',
    fontWeight: 'bold',
    fontSize: '18px',
    backgroundColor: '#F4F7FB',
    border: '1px solid #ddd',
    textAlign: 'center',
    borderRadius: '0 12px 0 0',
  }}
>
  <div>Essential</div>
  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
    <button
      className="py-1 px-3 rounded-full font-medium text-sm bg-blue text-white"
      onClick={() => (window.location.href = '/essential')}
    >
      $199/month
    </button>
  </div>
  <div style={{ marginTop: '10px' }}>
    <a
      href="/free-trial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#4CAF50',
        textDecoration: 'none', // Remove underline
        fontSize: '14px',
        whiteSpace: 'nowrap', // Prevent text breaking
        fontWeight: '500', // Slightly bolder for emphasis
      }}
    >
      5 Days Free Trial
    </a>
  </div>
</th>

          <th style={{
            padding: '20px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#F4F7FB',
            border: '1px solid #ddd',
            textAlign: 'center',
          }}>
            Growth
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button
                className="py-1 px-3 rounded-full font-medium text-sm bg-blue text-white"
                onClick={() => window.location.href='/growth'}
              >
                $299/month
              </button>
            </div>
            <div style={{ marginTop: '10px' }}>
    <a
      href="/free-trial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#4CAF50',
        textDecoration: 'none', // Remove underline
        fontSize: '14px',
        whiteSpace: 'nowrap', // Prevent text breaking
        fontWeight: '500', // Slightly bolder for emphasis
      }}
    >
      5 Days Free Trial
    </a>
  </div>
          </th>
          <th style={{
            padding: '20px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#F4F7FB',
            border: '1px solid #ddd',
            textAlign: 'center',
            borderRadius: '0 12px 0 0',
          }}>
            Premium
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button
                className="py-1 px-3 rounded-full font-medium text-sm bg-blue text-white"
                onClick={() => window.location.href='/premium'}
              >
                $599/month
              </button>
            </div>
            <div style={{ marginTop: '10px' }}>
    <a
      href="/free-trial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#4CAF50', 
        textDecoration: 'none', // Remove underline
        fontSize: '14px',
        whiteSpace: 'nowrap', // Prevent text breaking
        fontWeight: '500', // Slightly bolder for emphasis
      }}
    >
      5 Days Free Trial
    </a>
  </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          { feature: "Replies per Month", essential: "1,500", growth: "3,000", premium: "7,000", description: "Number of responses the AI assistant can give to customer questions each month" },
          { feature: "Webpages Stored", essential: "5,000", growth: "15,000", premium: "30,000", description: "Number of website pages the AI assistant can save for the Knowledge Base" },
          { feature: "Standard Support", essential: "✓", growth: "x", premium: "x", description: "Provide essential assistance during regular business hours" },
          { feature: "Priority Support", essential: "x", growth: "✓", premium: "✓", description: "Offer faster response times and dedicated assistance for urgent issues" },
          { feature: "Train your AI", essential: "✓", growth: "✓", premium: "✓", description: "Customize and improve the AI assistant to better understand your customers" },
          { feature: "Up-Selling", essential: "x", growth: "✓", premium: "✓", description: "Suggest higher-value products to boost customer purchases" },
          { feature: "Cross Selling", essential: "x", growth: "x", premium: "✓", description: "Recommend related products to increase sales opportunities" },
          { feature: "Social Media Integration", essential: "x", growth: "✓", premium: "✓", description: "Connect the AI assistant to your social media channels like Facebook, WhatsApp, LinkedIn, Instagram, etc." },
          { feature: "CRM Integration", essential: "x", growth: "✓", premium: "✓", description: "Connect seamlessly with your CRM like Salesforce, HubSpot, Zendesk, etc." },
          { feature: "Pro-Active AI Sales", essential: "✓", growth: "✓", premium: "✓", description: "Engage customers with personalized recommendations and offers before they even ask" },
          { feature: "AI Image Search", essential: "x", growth: "x", premium: "✓", description: "Let customers search for products using images for quick and accurate results" },
          { feature: "Embed Anywhere", essential: "✓", growth: "✓", premium: "✓", description: "Easily integrate the AI assistant into any website or platform" },
        ].map((row, index) => (
          <tr key={index} style={{
            borderBottom: '1px solid #ddd',
            transition: 'background-color 0.3s',
            cursor: 'pointer',
          }} className="table-row">
            <td style={{
              padding: '15px 30px',
              border: '1px solid #ddd',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              <div>
                <h4>{row.feature}</h4>
                <p style={{ fontSize: '16px', color: '#555' }}>
                  {row.description}
                </p>
              </div>
            </td>
            <td style={{
              padding: '15px 30px',
              border: '1px solid #ddd',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '500',
            }}>
              {row.essential === "✓" ? (
                <i className="fa-solid fa-check" style={{ color: '#4CAF50', fontSize: '18px' }} />
              ) : row.essential === "x" ? (
                <i className="fa-solid fa-xmark" style={{ color: '#F44336', fontSize: '18px' }} />
              ) : (
                <div>{row.essential}</div>
              )}
            </td>
            <td
  style={{
    padding: '15px 30px',
    border: '1px solid #ddd',
    textAlign: 'center',
    // backgroundColor: '#3f559e',  // Blue background for each growth column
    // color: '#fff',  // white text color
    fontSize: '16px',
    fontWeight: '500',
  }}
>
  {row.growth === "✓" ? (
                <i className="fa-solid fa-check" style={{ color: '#4CAF50', fontSize: '18px' }} />
              ) : row.growth === "x" ? (
                <i className="fa-solid fa-xmark" style={{ color: '#F44336', fontSize: '18px' }} />

  ) : (
    <div>{row.growth}</div>
  )}
</td>

            <td style={{
              padding: '15px 30px',
              border: '1px solid #ddd',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '500',
            }}>
              {row.premium === "✓" ? (
                <i className="fa-solid fa-check" style={{ color: '#4CAF50', fontSize: '18px' }} />
              ) : row.premium === "x" ? (
                <i className="fa-solid fa-xmark" style={{ color: '#F44336', fontSize: '18px' }} />
              ) : (
                <div>{row.premium}</div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




{/* Enterprise section */}

<div class="flex items-center justify-center p-6 max-w-7xl mx-auto">
  <div class="container p-8 max-w-2xl w-full rounded-xl border-l-4 border-[#3f559e] bg-gradient-to-r from-teal-100/50 to-white shadow-lg hover:shadow-2xl hover:border-[#1d3c6a] transition-all duration-300 ease-in-out">
    

    {/* <!-- Heading --> */}
    <h4 class="text-2xl font-semibold text-gray-800 text-center text-shadow-md fade-in">
    Enterprise Solutions
    </h4>
    
    {/* <!-- Text --> */}
    <p class="mt-4 text-black font-medium text-lg sm:text-md text-center">
    Unlock the full potential of your business with customized solutions
        designed to meet your unique needs. Get tailored support to scale your
        operations effectively and seamlessly.
    </p>
    {/* <!-- Main CTA --> */}
    <div class="mt-6 text-center">
      <a href="/"
        class="inline-block px-8 py-3 font-bold text-lg text-white transition-all duration-300 rounded-lg bg-[#3f559e] hover:bg-[#1d3c6a] transform hover:scale-105 ease-in-out">
        Schedule a Call
        <svg class="inline-block w-6 h-6 ml-2 transform transition-transform duration-300 hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
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
  );
};

export default Pricing;
