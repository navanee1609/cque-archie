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
      <div class="flex items-center justify-center p-6">
  <div class="container p-8 max-w-2xl w-full rounded-xl border-l-4 border-[#3f559e] bg-gradient-to-r from-teal-100/50 to-white shadow-lg hover:shadow-2xl hover:border-[#1d3c6a] transition-all duration-300 ease-in-out">
    

    {/* <!-- Heading --> */}
    <h4 class="text-2xl font-semibold text-gray-800 text-center text-shadow-md fade-in">
      Start Your Journey with a 5-Day Free Trial!
    </h4>
    
    {/* <!-- Text --> */}
    <p class="mt-4 text-black font-medium text-lg sm:text-md text-center">
      Try our Essential, Growth, and Premium plans with a 5-day free trial. Whether you're starting or scaling, our plans have all you need. Start your free trial today.
    </p>
    {/* <!-- Main CTA --> */}
    <div class="mt-6 text-center">
      <a href="/"
        class="inline-block px-8 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-[#3f559e] hover:bg-[#1d3c6a] transform hover:scale-105 ease-in-out">
        5 Days Free Trial
        <svg class="inline-block w-6 h-6 ml-2 transform transition-transform duration-300 hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>

    {/* <!-- Follow-up CTA --> */}
    <p class="text-gray-600 mt-2 text-md font-medium text-center">Already started your free trial? <a href="/" class="text-[#3f559e] font-semibold">Upgrade to Premium</a></p>
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
          <th style={{
            padding: '20px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#F4F7FB',
            border: '1px solid #ddd',
            textAlign: 'center',
            borderRadius: '0 12px 0 0',
          }}>
            <div>Essential</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button
                className="py-1 px-3 rounded-full font-medium text-sm bg-blue text-white"
                onClick={() => window.location.href='/essential'}
              >
                $199/month
              </button>
            </div>
          </th>
          <th style={{
            padding: '20px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#3f559e',
            color: '#fff',
            border: '1px solid #ddd',
            textAlign: 'center',
          }}>
            Growth
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button
                className="py-1 px-3 rounded-full font-medium text-sm bg-white text-blue"
                onClick={() => window.location.href='/growth'}
              >
                $299/month
              </button>
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
    backgroundColor: '#3f559e',  // Blue background for each growth column
    color: '#fff',  // white text color
    fontSize: '16px',
    fontWeight: '500',
  }}
>
  {row.growth === "✓" ? (
    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: '18px' }} />
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






<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                <div class="overflow-hidden aspect-w-3 aspect-h-4">
                    <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="" />
                </div>

                <div class="relative">
                    <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                        <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="" />
                    </div>

                    <div class="absolute inset-0 grid w-full h-full place-items-center">
                        <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                            <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                    <img class="w-32 h-32" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
                </div>
            </div>

            <div class="flex flex-col items-start xl:px-16">
            <h2 class="text-3xl font-bold text-black">
  Try Our Essential, Growth, and Premium Plans for Free for 5 Days!
</h2>
<p class="mt-4 font-medium text-lg fs-18">
  Experience the full benefits of our <span className="text-style-gradient">Essential</span>, <span className="text-style-gradient font-bold">Growth</span>, and <span className="text-style-gradient">Premium</span> plans with a 5-day free trial. Whether you're a small business just starting out or an enterprise ready to scale, our flexible plans provide all the tools you need. No credit card required—get started today!
</p>

                <a href="#" title="" class="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 bg-blue" role="button">
                    Get started now
                    <svg class="w-5 h-5 ml-8 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
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
  );
};

export default Pricing;
