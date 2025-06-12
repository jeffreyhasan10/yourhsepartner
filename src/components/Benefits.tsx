
import React from "react";

const Benefits = () => {
  const supervisorBenefits = [
    "Streamlines compliance processes, reducing manual administrative tasks",
    "Provides real-time data for better decision-making and risk management",
    "Tracks incidents and audits, ensuring timely resolution and follow-up",
    "Enhances safety training, improving workplace health and safety outcomes"
  ];

  const workerBenefits = [
    "Empowers workers to report observations and prevent potential risks",
    "Simplifies incident reporting with easy-to-use mobile tools",
    "Provides quick access to safety procedures and training resources",
    "Improves communication on hazards and real-time safety updates"
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Boost Safety and Compliance with EHS Management Software</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-pulse-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-pulse-600">For Supervisors</h3>
            <ul className="space-y-4">
              {supervisorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-pulse-600">For Frontline Workers</h3>
            <ul className="space-y-4">
              {workerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
