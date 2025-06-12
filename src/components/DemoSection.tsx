
import React from "react";
import { ArrowRight } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 bg-white" id="demo">
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">EHS Management System Software Demo</h2>
          <p className="section-subtitle mb-8 mx-auto">
            See how our EHS Management System can streamline your compliance, incident management and reporting processes.
          </p>
          
          <a 
            href="#contact" 
            className="button-primary group inline-flex items-center justify-center"
          >
            Get Custom Demo
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
