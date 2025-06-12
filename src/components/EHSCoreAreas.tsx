import React, { useRef, useState } from "react";
import { Leaf, Heart, ShieldCheck, TrendingUp, ChevronRight, Sparkles } from "lucide-react";

const EHSCoreAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const coreAreas = [
    {
      title: "Environment",
      description: "An EHS management system helps control environmental impacts by sourcing clean energy, cutting energy costs and reducing risks like spills and leaks. Monitor emissions, waste management, and regulatory compliance.",
      icon: Leaf,
      stats: "35% reduction in environmental incidents",
      features: ["Emissions monitoring", "Waste tracking", "Energy management", "Environmental compliance"]
    },
    {
      title: "Health",
      description: "Effective EHS management systems support worker health by preventing illness, injury and chronic disability while ensuring productive operations. Track health metrics and wellness programs.",
      icon: Heart,
      stats: "50% improvement in worker wellness",
      features: ["Health surveillance", "Medical management", "Exposure monitoring", "Wellness programs"]
    },
    {
      title: "Safety",
      description: "EHS management systems help manage work processes to identify safety hazards and prevent workplace incidents, accidents, illnesses and injuries. Implement proactive safety measures.",
      icon: ShieldCheck,
      stats: "60% decrease in safety incidents",
      features: ["Hazard identification", "Risk assessment", "Safety training", "Incident prevention"]
    }
  ];

  const cardStyles = [
    {
      bg: "from-emerald-50 to-teal-50",
      accent: "from-emerald-500 to-teal-500",
      icon: "bg-emerald-500",
      hover: "hover:shadow-xl hover:ring-2 hover:ring-emerald-200",
      stats: "bg-emerald-50 text-emerald-700 border-emerald-100",
      glow: "shadow-emerald-500/30"
    },
    {
      bg: "from-rose-50 to-pink-50",
      accent: "from-rose-500 to-pink-500",
      icon: "bg-rose-500",
      hover: "hover:shadow-xl hover:ring-2 hover:ring-rose-200",
      stats: "bg-rose-50 text-rose-700 border-rose-100",
      glow: "shadow-rose-500/30"
    },
    {
      bg: "from-blue-50 to-indigo-50",
      accent: "from-blue-500 to-indigo-500",
      icon: "bg-blue-500",
      hover: "hover:shadow-xl hover:ring-2 hover:ring-blue-200",
      stats: "bg-blue-50 text-blue-700 border-blue-100",
      glow: "shadow-blue-500/30"
    }
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      id="ehs-areas"
      ref={sectionRef}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="section-container relative z-10 animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-600">Core Focus Areas</span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            What are the 3 areas of focus for an{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              EHS Management System
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive coverage across environmental, health, and safety domains to ensure excellence and compliance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          {coreAreas.map((area, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white/90 rounded-3xl p-8 border border-white/40 backdrop-blur-sm 
                transition-all duration-500 group cursor-pointer ${cardStyles[index].hover} 
                ${hoveredCard === index ? `shadow-2xl ${cardStyles[index].glow}` : 'shadow-lg'}`}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cardStyles[index].bg} 
                opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative z-10 text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center 
                  bg-gradient-to-br ${cardStyles[index].accent} text-white shadow-md 
                  transition-transform group-hover:scale-110 duration-300`}>
                  <area.icon className="w-10 h-10" />
                </div>

                <h3 className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r 
                  ${cardStyles[index].accent} transition-transform duration-300 group-hover:scale-105`}>
                  {area.title}
                </h3>

                <div className={`inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium border 
                  ${cardStyles[index].stats} group-hover:scale-105 transition-all duration-300`}>
                  <TrendingUp className="w-4 h-4 mr-2 opacity-70" />
                  {area.stats}
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-6 mb-6 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {area.description}
              </p>

              <div className="space-y-3">
                {area.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-white/80 transition-all group/feature hover:shadow-sm">
                    <div className={`w-3 h-3 rounded-full mr-4 bg-gradient-to-r ${cardStyles[index].accent} flex-shrink-0 shadow-sm transition-transform group-hover/feature:scale-110`} />
                    <span className="flex-1 group-hover/feature:text-gray-800 transition-colors">{feature}</span>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover/feature:opacity-100 transition-transform group-hover/feature:translate-x-0 translate-x-2" />
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button className={`w-full py-3 rounded-2xl bg-gradient-to-r ${cardStyles[index].accent} text-white font-medium text-sm transition-all hover:shadow-lg hover:scale-105 active:scale-95`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-lg">
            <span className="text-gray-600 font-medium">Ready to implement comprehensive EHS management?</span>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EHSCoreAreas;
