import React from 'react';

const RealGrowthSection = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Real Results, Real Growth</h2>
            <p className="mx-auto mt-4 text-lg font-medium leading-relaxed text-lightblack">Leverage CQUE AI's capabilities to drive growth, enhance customer satisfaction, and optimize operations. By streamlining workflows and personalizing experiences, your business can achieve remarkable results.
</p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8l4 4v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6l4 4V6h8V2z" />
              </svg>
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-semibold text-black">Higher Sales</h3>
                    <p className="mt-4 text-lg text-black font-medium">Drive conversions with AI-powered recommendations and smart pop-ups.
                    </p>
                </div>
            </li>

            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-semibold text-black">Streamlined Operations                    </h3>
                    <p className="mt-4 text-lg text-black font-medium">Automate repetitive tasks, freeing your team to focus on strategic priorities.
                    </p>
                </div>
            </li>

            <li className="relative flex items-start">
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-semibold text-black">Enhanced Satisfaction</h3>
                    <p className="mt-4 text-lg text-black font-medium">Respond to 97% of customer inquiries instantly, improving experiences.
                    </p>
                </div>
            </li>
        </ul>
    </div>
</section> 
  );
};

export default RealGrowthSection;
