import React from "react";
import { TrendingDown, Shield, Clock, Award } from "lucide-react";

const EHSStatistics = () => {
  const statistics = [
    {
      icon: TrendingDown,
      value: "86%",
      label: "Reduction in Workplace Incidents",
      description: "Organizations using comprehensive EHS systems see significant decreases in accidents and near-misses",
      color: "text-ehs-600",
      bgGradient: "from-ehs-50 to-ehs-100"
    },
    {
      icon: Shield,
      value: "40%",
      label: "Faster Compliance Reporting",
      description: "Automated reporting and documentation streamline regulatory compliance processes",
      color: "text-ehs-700",
      bgGradient: "from-ehs-100 to-ehs-200"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saved on Administrative Tasks",
      description: "Digital workflows and automation reduce manual paperwork and administrative burden",
      color: "text-ehs-800",
      bgGradient: "from-ehs-200 to-ehs-300"
    },
    {
      icon: Award,
      value: "95%",
      label: "Audit Success Rate",
      description: "Organizations with digital EHS systems consistently pass regulatory audits and inspections",
      color: "text-ehs-600",
      bgGradient: "from-ehs-50 to-ehs-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-ehs-50/30 to-white relative overflow-hidden" id="statistics">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 text-4xl md:text-5xl font-bold">
            Proven Results with <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-ehs-600 to-ehs-800">EHS Management Systems</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-600 text-lg max-w-3xl">
            Industry data shows the measurable impact of implementing comprehensive EHS management systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group perspective-1000">
              <div className="stats-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-rotate-1">
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.bgGradient} ${stat.color} mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-5xl font-bold ${stat.color} mb-3 tracking-tight`}>{stat.value}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{stat.label}</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ehs-100 to-ehs-50 rounded-full border border-ehs-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-base font-medium text-ehs-700">
              Source: National Safety Council & OSHA Industry Reports 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EHSStatistics;
