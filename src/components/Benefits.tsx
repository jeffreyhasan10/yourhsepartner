
import React from "react";
import { UserCheck, Users, Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, MessageSquare } from "lucide-react";

const Benefits = () => {
  const supervisorBenefits = [
    {
      icon: TrendingUp,
      title: "Streamlined Compliance Processes",
      description: "Reduce manual administrative tasks and automate regulatory reporting for efficient compliance management."
    },
    {
      icon: Shield,
      title: "Real-time Data & Decision Making",
      description: "Access comprehensive dashboards and analytics for better risk management and informed decision-making."
    },
    {
      icon: CheckCircle,
      title: "Incident & Audit Tracking",
      description: "Monitor incidents and audits systematically, ensuring timely resolution and follow-up actions."
    },
    {
      icon: UserCheck,
      title: "Enhanced Safety Training",
      description: "Deliver targeted safety training programs that improve workplace health and safety outcomes."
    }
  ];

  const workerBenefits = [
    {
      icon: AlertTriangle,
      title: "Proactive Risk Reporting",
      description: "Easily report observations and near-misses to prevent potential workplace hazards and incidents."
    },
    {
      icon: Users,
      title: "Simple Mobile Reporting",
      description: "Use intuitive mobile tools for quick incident reporting with photo capture and GPS location."
    },
    {
      icon: Clock,
      title: "Quick Access to Resources",
      description: "Instantly access safety procedures, training materials, and emergency response information."
    },
    {
      icon: MessageSquare,
      title: "Real-time Safety Communication",
      description: "Receive immediate safety updates, hazard alerts, and important safety communications."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ehs-50 via-white to-ehs-100/50" id="benefits">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Boost Safety and Compliance with <span className="gradient-text">EHS Management Software</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Empowering both supervisors and frontline workers with tools designed for safety excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Supervisors Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ehs-600 to-ehs-700 text-white mb-6">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ehs-700 mb-4">For Supervisors</h3>
              <p className="text-gray-600 mb-8">
                Streamline operations, improve compliance, and make data-driven safety decisions
              </p>
            </div>
            
            <div className="space-y-6">
              {supervisorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-ehs-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ehs-100 to-ehs-200 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-ehs-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workers Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ehs-500 to-ehs-600 text-white mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ehs-700 mb-4">For Frontline Workers</h3>
              <p className="text-gray-600 mb-8">
                Easy-to-use tools that empower workers to participate in safety programs
              </p>
            </div>
            
            <div className="space-y-6">
              {workerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-ehs-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ehs-100 to-ehs-200 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-ehs-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ehs-100 to-ehs-50 rounded-full border border-ehs-200">
            <Shield className="w-5 h-5 text-ehs-600 mr-2" />
            <span className="text-sm font-medium text-ehs-700">
              Join thousands of organizations improving workplace safety with YourHSEPartner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
