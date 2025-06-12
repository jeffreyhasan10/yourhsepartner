
import React from "react";

const EHSApplications = () => {
  const applications = [
    [
      { name: "Permit to Work Software", description: "Streamline work authorization processes" },
      { name: "Near Miss Reporting Software", description: "Capture and analyze near-miss incidents" },
      { name: "Process Hazard Analysis Software", description: "Identify and assess process risks" },
      { name: "Management of Change Software", description: "Control operational changes safely" }
    ],
    [
      { name: "Vaccine Management Software", description: "Track employee vaccination records" },
      { name: "Safety Observations Software", description: "Record and analyze safety observations" },
      { name: "Safety Inspection Software", description: "Conduct systematic safety inspections" },
      { name: "Audit Management Software", description: "Manage compliance audits efficiently" }
    ],
    [
      { name: "Document Control Software", description: "Centralize document management" },
      { name: "Job Safety Analysis Software", description: "Analyze job-specific safety risks" },
      { name: "Behavior Based Safety Software", description: "Promote safe work behaviors" },
      { name: "Incident Reporting Software", description: "Report and investigate incidents" }
    ],
    [
      { name: "Training Management Software", description: "Deliver and track safety training" },
      { name: "Assets and Compliance Tracking", description: "Monitor asset compliance status" },
      { name: "Waste Management Software", description: "Manage waste disposal processes" },
      { name: "Water Quality Management Software", description: "Monitor water quality parameters" }
    ],
    [
      { name: "Refrigerant Management Software", description: "Track refrigerant usage and compliance" },
      { name: "SDS Library Software", description: "Maintain safety data sheet libraries" }
    ]
  ];

  return (
    <section className="py-20 bg-white" id="applications">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">EHS Management Software Applications</h2>
        </div>
        
        <div className="space-y-8">
          {applications.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid gap-6 ${row.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
              {row.map((app, appIndex) => (
                <div key={appIndex} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:translate-y-[-2px]">
                  <h3 className="text-lg font-semibold mb-3 text-pulse-600">{app.name}</h3>
                  <p className="text-gray-600 text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EHSApplications;
