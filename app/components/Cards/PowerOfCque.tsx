import React from "react";

const PowerOfCque = () => {
  return (
    <section className="py-10 my-10 bg-gradient-to-r from-green-200 via-blue-100 to-white flex items-center justify-center">
      <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-4xl font-bold text-gray-900 dark:text-gray-100">Unlock the Power of AI with CQUE Today</h2>

        <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-1">
          {/* Step 1: Quick Integration */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="font-semibold text-black text-xl">Quick Integration</p>
              <svg
                className="w-6 text-gray-400 dark:text-gray-300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19"></polyline>
              </svg>
            </div>
            <p className="leading-relaxed font-medium text-black text-lg">
              Effortless setup for Shopify and WooCommerce.
            </p>
          </div>

          {/* Step 2: Rapid ROI */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="font-semibold text-black text-xl">Rapid ROI</p>
              <svg
                className="w-6 text-gray-400 dark:text-gray-300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19"></polyline>
              </svg>
            </div>
            <p className="leading-relaxed font-medium text-black text-lg">
              Boost sales and customer satisfaction.
            </p>
          </div>

          {/* Step 3: Join Success Stories */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="font-semibold text-black text-xl">Join Success Stories</p>
              <svg
                className="w-6 text-green-500 dark:text-green-400"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
              </svg>
            </div>
            <p className="leading-relaxed font-medium text-black text-lg">
              Thriving eCommerce community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfCque;
