
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const FAQ = () => {
  const faqs = [
    {
      question: "What is an EHS management system?",
      answer: "An EHS management system is a comprehensive framework that helps organizations manage their environmental, health, and safety responsibilities through integrated policies, procedures, and processes."
    },
    {
      question: "What does EHS stand for?",
      answer: "EHS stands for Environment, Health, and Safety - the three core areas that organizations must manage to ensure workplace safety, regulatory compliance, and environmental protection."
    },
    {
      question: "How does the software ensure compliance?",
      answer: "Our software helps maintain compliance by automating regulatory reporting, tracking audit schedules, managing documentation, and providing real-time monitoring of compliance metrics."
    },
    {
      question: "What ISO standards does the system support?",
      answer: "The system supports various ISO standards including ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and other relevant industry-specific standards."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation time varies based on organization size and complexity, but most clients see initial benefits within 30-60 days, with full deployment typically completed within 3-6 months."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index} className="bg-white rounded-lg border border-gray-200">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-gray-500">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-700">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
