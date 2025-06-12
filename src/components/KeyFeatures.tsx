
import React from "react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Reports and Dashboards",
      description: "EHS reports and dashboards provide real-time data, helping you track performance and make informed decisions.",
      icon: "📊"
    },
    {
      title: "Mobile App",
      description: "EHS mobile apps give you access to critical safety data on the go, enabling quick reporting and real-time updates.",
      icon: "📱"
    },
    {
      title: "Incident Management",
      description: "Incident management allows you to log, track and investigate workplace incidents to prevent future occurrences.",
      icon: "🚨"
    },
    {
      title: "Observation Management",
      description: "Observation management features robust checklists and intelligent workflows to escalate high-risk situations instantly.",
      icon: "👁️"
    },
    {
      title: "Audit Management",
      description: "Audit management streamlines the audit process, helping you track, organize and ensure compliance with standards.",
      icon: "📋"
    },
    {
      title: "Training Management",
      description: "Training management helps track and deliver essential safety training, ensuring compliance and reducing workplace risks.",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Key Features of YourHSEPartner EHS Software</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-pulse-600">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
