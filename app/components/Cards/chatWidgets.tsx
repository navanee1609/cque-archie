import React from 'react';

const ChatWidgets = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 d sm:text-4xl xl:text-5xl">
            Customizable Chat Widgets
          </h2>
          <p className="max-w-md mx-auto mt-5 font-medium text-lightblack text-xl">
            Adjust your chat widget's settings to perfectly match your brand, enhance user experience, and control its behavior.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
          {/* Brand Alignment */}
          <div className="relative flex-1 w-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
            <div className="py-8 px-9">
              <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold  bg-gray-900 dark:bg-gray-700 rounded-xl" style={{
                background:"#AFD5F0"
              }}>
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mt-2 ">Brand Alignment</h3>
              <p className="mt-4 text-xl font-medium text-black">
                Match your store's brand 
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:-mx-2">
            <svg className="w-auto h-4 text-gray-300 dark:text-gray-600" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              
            </svg>
          </div>

          {/* Placement Options */}
          <div className="relative flex-1 w-full mt-8 lg:mt-0">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
            </div>
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold  bg-gray-900 dark:bg-gray-700 rounded-xl" style={{background:"#F8C8DC"}}>
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mt-2 ">Placement Options</h3>
                <p className="mt-4 text-xl font-medium text-black">
                  Strategically place the chat widget 
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:-mx-2">
            <svg className="w-auto h-4 text-gray-300 dark:text-gray-600" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               
            </svg>
          </div>

          {/* Behavior Settings */}
          <div className="relative flex-1 w-full mt-8 lg:mt-0">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold  bg-gray-900 dark:bg-gray-700 rounded-xl" style={{background:"#FEDD9E"}}>
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mt-2 ">Behavior Settings</h3>
                <p className="mt-4 text-xl font-medium text-black">
                  Adjust the widget's behavior to match user needs and optimize the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidgets;
