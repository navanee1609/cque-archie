import React from "react";

interface FeatureCardProps {
  iconClass: string;
  title: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconClass,
  title,
  features,
}) => (
  <div className="relative group mb-4 bg-white/20 backdrop-blur-lg border border-[#3f559e] rounded-3xl p-8 shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-white/50">
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#3f559e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
      <i className={`${iconClass} text-white text-3xl`}></i>
    </div>
    <h3 className="mt-6 text-xl font-extrabold text-gray-800">{title}</h3>
    <ul className="mt-6 space-y-3 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3 text-lg font-medium">
          <i className="fa-solid fa-arrow-right text-[#3f559e]"></i>
          <span className="">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

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
    {
      iconClass: "fas fa-sync-alt", 
      title: "Real-time Sync",
      features: [
        "Instant Data Sync",
        "Cross-Platform Support",
        "Seamless Integration",
        "Real-Time Updates",
      ],
    },
  ];
  

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
      {/* Floating Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 blur-3xl rounded-full -top-40 -left-40"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 opacity-20 blur-2xl rounded-full -bottom-20 -right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Featured Solutions
          </h2>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-2xl mx-auto">
          Explore the powerful features we offer to enhance your experience with our platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
