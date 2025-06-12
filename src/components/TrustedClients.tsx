
import React from "react";

const TrustedClients = () => {
  const clients = [
    "Subaru",
    "Campbell's Soup", 
    "Virgin Atlantic",
    "Air Liquide"
  ];

  return (
    <section className="py-16 bg-gray-50" id="clients">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Trusted by Leading Organizations Around the World</h2>
          <p className="section-subtitle mx-auto">
            Companies like Subaru, Campbell's Soup, Virgin Atlantic, Air Liquide, and other industry leaders trust YourHSEPartner for their EHS management needs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
              <span className="text-lg font-semibold text-gray-700">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
