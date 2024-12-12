import React from "react";

// Define the prop types for FeatureCard
interface FeatureCardProps {
  iconClass: string;
  title: string;
  features: string[];
}

// Reusable Feature Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  iconClass,
  title,
  features,
}) => (
  <div className="flex flex-col items-start justify-center p-6 border border-gray-300 rounded-lg h-full transform transition-transform duration-300 hover:scale-105">
    <div
      className={`flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full animate-pulse bg-gray-200`}
      aria-label={title}
    >
      <i className={`${iconClass} text-lg bg-[#3f559e]  text-white p-3 rounded-full`}></i>
    </div>
    <div className="mt-4">
      <p className="text-xl font-medium text-gray-800">{title}</p>
      <ul className="mt-4 text-base text-gray-700 font-medium list-disc list-inside space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Main Component
const FeaturedSolutions: React.FC = () => {
  const features = [
    {
      iconClass: "fas fa-lightbulb",
      title: "AI Agent",
      features: [
        "Accurate Response",
        "AI Recommendation",
        "Knowledge Learning",
        "Discount Delivery",
      ],
    },
    {
      iconClass: "fas fa-cogs",
      title: "Sales Conversion",
      features: [
        "Proactive Sales Assistance",
        "Business Insights",
        "Conversion Management",
        "Shortcut Widgets",
      ],
    },
    {
      iconClass: "fas fa-comments",
      title: "Customer Support",
      features: [
        "After-Sales Support",
        "Order Tracking",
        "Agent Handover",
        "Multi-Lingual Support",
      ],
    },
    {
      iconClass: "fas fa-paint-brush",
      title: "Brand Consistency",
      features: ["AI Agent Behavior", "AI Agent Avatar Appearance"],
    },
  ];

  return (
    <section className="py-6 mt-16 bg-lightgrey rounded-3xl">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Featured Solutions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-xl font-medium leading-relaxed text-gray-600">
            Explore the powerful features we offer to enhance your experience
            with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-8 mt-8 md:mt-12 md:grid-cols-2 lg:grid-cols-2 gap-x-12 justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* <div className="flex items-center justify-center mt-12">
          <div
            className="px-6 py-3 text-center bg-gray-100 rounded-full font-medium text-lg"
          >
            <p className="text-gray-700 font-medium">
              Want to learn more about our solutions?{' '}
              <a
                href="/contactus"
                title="Support"
                className="text-yellow-500 transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600 hover:underline"
              >
                Join CQUE.AI
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedSolutions;
