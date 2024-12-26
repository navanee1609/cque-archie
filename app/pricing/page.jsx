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
  const [] = useState(false);

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
  };

  const closeCalendly = () => {
    setOverlayVisible(false);
    setShowCalendly(false);
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


  const handleCloseCalendly = () => {
    setOverlayVisible(true);
    setShowCalendly(false);
    setShowsCalendly(false);
    setCalendlyVisibility(false);
  };


  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCalendly]);




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
      price: '$199 / month',
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
      aiImageSearch: 'AI Image Search*',
    },
    {
      price: '$299 / month',
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
      aiImageSearch: 'AI Image Search*',
    },
    {
      price: '$599 / month',
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
      <p className={`mb-4 fs-16 font-medium ${getTextColor(index + 1)}`}>5 days free trial</p>
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
          const shouldStrike =
            (index === 0 && idx >= 6) || // Strike from "Up Selling" onwards in Essential
            (index === 1 && (idx === 7 || idx === 10)) || // Strike "Cross Selling" and "AI Image Search*" in Growth
            (index === 2 && false); // Do not strike anything in Premium
          return (
            <li
              key={idx}
              className={`fs-16 font-medium text-lg mb-2 ${getTextColor(index + 1)} ${
                shouldStrike ? 'line-through' : ''
              }`}
            >
              <i
                className={`fa-solid fa-circle-check pe-2 ${activeCard === index + 1 ? 'text-white' : 'text-blue'}`}
              />
              {item}
            </li>
          );
        })}
      </ul>
      <div className="text-center">
        <button
          className={`py-1 px-5 rounded-full font-medium text-lg transition-colors duration-500 ${
            activeCard === index + 1 ? 'bg-white text-blue' : 'bg-blue text-white'
          }`}
          onClick={handleButtonClick}
        >
          {card.price}
        </button>
      </div>
    </div>
  ))}
</div>;



      </div>

      {/* pricing matrix */}

    <div className="pricing-table-container" style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
  <div className="pricing-table" style={{ width: '100%', maxWidth: '1000px', overflowX: 'auto' }}>
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
{/* CTA */}
      
      {/* <div className="container mx-auto sm:px-4 ptb-60 max-w-6xl">
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
      </div> */}


{/* CTA */}
<div className="relative overflow-hidden bg-gray-900 rounded-2xl my-16 mx-auto" style={{background: "linear-gradient(135deg, #3F559E, #2D4177, #6A86B6, #8A99D8)",width: "90%", maxWidth:"1200px"}}>
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
</div>

     
    </>
  );
};

export default Pricing;
