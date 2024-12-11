import React from "react";

// Define the prop types for FeatureCard
interface FeatureCardProps {
  iconClass: string;
  title: string;
  features: string[];
  bgColor: string;
}

// Reusable Feature Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  iconClass,
  title,
  features,
  bgColor,
}) => (
  <div className="flex flex-col items-start justify-center p-6 border border-white rounded-lg h-full transform transition-transform duration-300 hover:scale-105">
    <div
      className={`flex items-center justify-center flex-shrink-0 w-8 h-8 ${bgColor} rounded-full animate-pulse`}
      aria-label={title}
    >
      <i className={`${iconClass} text-lg bg-white p-3 rounded-full`}></i>
    </div>
    <div className="mt-4">
      <p className="text-xl font-medium text-white">{title}</p>
      <ul className="mt-4 text-base text-white font-medium list-disc list-inside space-y-2">
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
      bgColor: "bg-yellow-500",
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
      bgColor: "bg-green-500",
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
      bgColor: "bg-blue-500",
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
      bgColor: "bg-red-500",
      features: ["AI Agent Behavior", "AI Agent Avatar Appearance"],
    },
  ];

  return (
    <section
      className="py-4 sm:py-12 lg:py-20 rounded-lg"
      style={{ background: "#111827" }}
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
            Featured Solutions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-xl leading-relaxed text-white font-medium">
            Explore the powerful features we offer to enhance your experience
            with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-2 gap-x-16 justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20 animate-fade-in-up">
          <div
            className="px-8 py-4 text-center bg-gray-800 rounded-full font-medium text-xl leading-relaxed"
            style={{ background: "#1F2937" }}
          >
            <p className="text-white font-medium text-xl leading-relaxed">
              Want to learn more about our solutions?{" "}
              <a
                href="/contactus"
                title="Support"
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                style={{ color: "#FCD34D" }}
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
