import React from "react";
import Image from "next/image";

const SocialIntegrations = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <h3 className="text-center text-lg text-blue font-bold mb-4">
      Connect, Engage, and Grow
            </h3>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Social Media Integrations
          </h2>
          <p className="max-w-xl mx-auto mt-4 font-medium text-lightblack text-lg">
            Seamlessly integrate with popular social media platforms to
            strengthen your online presence and connect with your audience in
            real-time. Unlock the power of communication and engagement today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Facebook */}
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <div className="flex items-center">
                <Image
                  className="flex-shrink-0"
                  src="/images/facebook-96.png"
                  alt="Facebook"
                  width={48}
                  height={48}
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Facebook</p>
                  <p className="mt-px text-sm">Direct Integration</p>
                </div>
              </div>
              <p className="text-black leading-relaxed font-medium mt-7 text-lg">
                Engage customers on the world's largest social network.
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <div className="flex items-center">
                <Image
                  className="flex-shrink-0"
                  src="/images/instagram-96.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Instagram</p>
                  <p className="mt-px text-sm">Direct Integration</p>
                </div>
              </div>
              <p className="text-black leading-relaxed mt-7 font-medium text-lg">
                Leverage visual storytelling to engage your audience.
              </p>
            </div>
          </div>

          {/* Twitter/X */}
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <div className="flex items-center">
                <Image
                  className="flex-shrink-0"
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={48}
                  height={48}
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Twitter/X</p>
                  <p className="mt-px text-sm">Direct Integration</p>
                </div>
              </div>
              <p className="text-black leading-relaxed mt-7 font-medium text-lg">
                Provide real-time customer support and engage with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialIntegrations;
