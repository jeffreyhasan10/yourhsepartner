
import React, { useRef } from "react";

const EHSCoreAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const coreAreas = [
    {
      title: "Environment",
      description: "An EHS management system helps control environmental impacts by sourcing clean energy, cutting energy costs and reducing risks like spills and leaks.",
      icon: "🌱"
    },
    {
      title: "Health", 
      description: "Effective EHS management systems support worker health by preventing illness, injury and chronic disability while ensuring productive operations.",
      icon: "🏥"
    },
    {
      title: "Safety",
      description: "EHS management systems also help manage your work processes to identify safety hazards and prevent workplace incidents, accidents, illnesses and injuries.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="ehs-areas" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What are the 3 areas of focus for an EHS Management System?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-4xl mb-4 text-center">{area.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-pulse-600">{area.title}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EHSCoreAreas;
