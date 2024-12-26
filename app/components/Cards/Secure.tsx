import React from 'react';

const Secure = () => {
  return (
    <section className="py-8 bg-white sm:py-16 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black">Secure, Private, and Always Compliant
          </h2>
          <p className="mt-4 text-lightblack text-xl font-medium">
            We take every measure to ensure the highest level of security and compliance, safeguarding your data every step of the way.
          </p>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {/* First Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-blue-100">
              <i className="fas fa-check-circle text-blue-500 text-7xl"></i> {/* Blue Icon */}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">Regular Audits</h3>
            <p className="mt-4 text-black text-lg font-medium">
              Maintain integrity of our AI systems.
            </p>
          </div>

          {/* Second Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-orange-100">
              <i className="fas fa-shield-alt text-orange-500 text-7xl"></i> {/* Orange Icon */}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">End-to-End Encryption</h3>
            <p className="mt-4 text-black text-lg font-medium">
              Protect customer data throughout the entire process.
            </p>
          </div>

          {/* Third Item */}
          <div>
            <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-green-100">
              <i className="fas fa-user-lock text-green-500 text-7xl"></i> {/* Green Icon */}
            </div>
            <h3 className="mt-8 text-cl font-semibold text-black">GDPR Compliance</h3>
            <p className="mt-4 text-black text-lg font-medium">
              Meet the highest standards of data protection.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Secure;
