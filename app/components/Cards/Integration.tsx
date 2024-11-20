import Image from 'next/image';
import React from 'react';

const Integration = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          {/* Left Image Section */}
          <div className="lg:justify-start flex justify-center">
            <Image
              src="/images/crm-integration.png" // Replace with your image
              alt="How CQUE AI Works"
              width={400}
              height={400}
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Right Content Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              CRM Integrations
            </h2>
            <p className="mt-6 font-medium text-lightblack text-lg">
              Integrating your CRM system with other platforms streamlines your processes, enhances data flow, and improves team productivity. CRM integrations ensure that your customer data is synchronized seamlessly across your tools, reducing manual data entry and improving your decision-making with real-time information.
            </p>

            {/* Add a heading and single-line paragraph */}
            <h3 className="mt-8 text-2xl font-semibold text-black">Salesforce</h3>
            <p className="mt-4 text-black text-lg font-medium">Unified customer view.</p>

            <h3 className="mt-8 text-2xl font-semibold text-black">HubSpot</h3>
            <p className="mt-4 text-black text-lg font-medium">Seamless customer experience</p>

            <h3 className="mt-8 text-2xl font-semibold text-black">Zendesk</h3>
            <p className="mt-4 text-black text-lg font-medium">Efficient resolution of inquiries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
