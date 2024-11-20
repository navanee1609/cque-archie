import React from 'react';
import Image from 'next/image';

const WorkProcess = () => {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Content on the Left */}
          <div className="flex-1 flex flex-col justify-center mx-2">
            <h2 className=" text-lg text-blue font-bold mb-4">
            A Haven for Unconventional Shoppers
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Integration with Shopify
            </p>
            <p className="mt-6 text-xl font-medium leading-8 text-black">
              Seamlessly integrate AI-powered features to enhance your Shopify store's efficiency and customer engagement.
            </p>
            <div className="mt-8 space-y-8">
              {/* Seamless Setup Section */}
              <div className="flex items-start space-x-4">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-black">Seamless Setup</h3>
                  <p className="text-black mt-2 text-lg font-medium">Effortless integration with your Shopify store.</p>
                </div>
              </div>

              {/* Data Synchronization Section */}
              <div className="flex items-start space-x-4">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-black">Data Synchronization</h3>
                  <p className="text-black mt-2 text-lg font-medium">
                    Keep your AI assistant up-to-date with your product and customer data.
                  </p>
                </div>
              </div>

              {/* Customization Options Section */}
              <div className="flex items-start space-x-4">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-center flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-black">Customization Options</h3>
                  <p className="text-black mt-2 text-lg font-medium">
                    Tailor the AI assistant to your specific business needs and branding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image on the Right */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/images/shopify-new.webp" // Replace with your image path
              alt="Custom representation"
              width={600} // Optimized width for desktop
              height={600} // Optimized height for desktop
              className="rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
