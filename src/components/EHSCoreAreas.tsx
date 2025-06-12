
import React, { useRef } from "react";
import { Leaf, Heart, ShieldCheck } from "lucide-react";

const EHSCoreAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-16 bg-gradient-to-br from-white via-ehs-50/20 to-white" id="ehs-areas" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            What are the 3 areas of focus for an <span className="gradient-text">EHS Management System</span>?
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Comprehensive coverage across all critical environmental, health, and safety domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreAreas.map((area, index) => (
            <div key={index} className="feature-card group hover:shadow-ehs-shadow transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ehs-500 to-ehs-600 text-white mb-4">
                  <area.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-ehs-700">{area.title}</h3>
                <div className="inline-flex items-center px-3 py-1 bg-ehs-100 text-ehs-700 rounded-full text-sm font-medium">
                  {area.stats}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">{area.description}</p>
              <div className="space-y-2">
                {area.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-ehs-600">
                    <div className="w-1.5 h-1.5 bg-ehs-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EHSCoreAreas;
