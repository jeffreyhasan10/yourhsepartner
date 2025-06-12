
import React from "react";
import { TrendingDown, Shield, Clock, Award } from "lucide-react";

const EHSStatistics = () => {
  const statistics = [
    {
      icon: TrendingDown,
      value: "86%",
      label: "Reduction in Workplace Incidents",
      description: "Organizations using comprehensive EHS systems see significant decreases in accidents and near-misses",
      color: "text-ehs-600"
    },
    {
      icon: Shield,
      value: "40%",
      label: "Faster Compliance Reporting",
      description: "Automated reporting and documentation streamline regulatory compliance processes",
      color: "text-ehs-700"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saved on Administrative Tasks",
      description: "Digital workflows and automation reduce manual paperwork and administrative burden",
      color: "text-ehs-800"
    },
    {
      icon: Award,
      value: "95%",
      label: "Audit Success Rate",
      description: "Organizations with digital EHS systems consistently pass regulatory audits and inspections",
      color: "text-ehs-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-ehs-50/30 to-white" id="statistics">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Proven Results with <span className="gradient-text">EHS Management Systems</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Industry data shows the measurable impact of implementing comprehensive EHS management systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="stats-card hover:shadow-elegant-hover transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-ehs-100 to-ehs-200 ${stat.color} mb-3`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{stat.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ehs-100 to-ehs-50 rounded-full border border-ehs-200">
            <span className="text-sm font-medium text-ehs-700">
              Source: National Safety Council & OSHA Industry Reports 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EHSStatistics;
