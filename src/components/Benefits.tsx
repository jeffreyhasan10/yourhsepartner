import React from "react";
import { UserCheck, Users, Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, MessageSquare, Sparkles } from "lucide-react";

const Benefits = () => {
  const supervisorBenefits = [
    {
      icon: TrendingUp,
      title: "Streamlined Compliance Processes",
      description: "Reduce manual administrative tasks and automate regulatory reporting for efficient compliance management.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Real-time Data & Decision Making",
      description: "Access comprehensive dashboards and analytics for better risk management and informed decision-making.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: CheckCircle,
      title: "Incident & Audit Tracking",
      description: "Monitor incidents and audits systematically, ensuring timely resolution and follow-up actions.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: UserCheck,
      title: "Enhanced Safety Training",
      description: "Deliver targeted safety training programs that improve workplace health and safety outcomes.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const workerBenefits = [
    {
      icon: AlertTriangle,
      title: "Proactive Risk Reporting",
      description: "Easily report observations and near-misses to prevent potential workplace hazards and incidents.",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Simple Mobile Reporting",
      description: "Use intuitive mobile tools for quick incident reporting with photo capture and GPS location.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Quick Access to Resources",
      description: "Instantly access safety procedures, training materials, and emergency response information.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Real-time Safety Communication",
      description: "Receive immediate safety updates, hazard alerts, and important safety communications.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden" id="benefits">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-100/15 to-pink-100/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-500/20 rounded-full animate-ping"></div>
            </div>
          </div>
          <h2 className="section-title mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Boost Safety and Compliance with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EHS Management Software</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-600 text-lg max-w-2xl leading-relaxed">
            Empowering both supervisors and frontline workers with tools designed for safety excellence and operational efficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Supervisors Benefits */}
          <div className="space-y-8 group">
            <div className="text-center lg:text-left">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse"></div>
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                  <UserCheck className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">For Supervisors</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Streamline operations, improve compliance, and make data-driven safety decisions
              </p>
            </div>
            
            <div className="space-y-6">
              {supervisorBenefits.map((benefit, index) => (
                <div key={index} className="group/item relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/50 rounded-2xl transform transition-transform group-hover/item:scale-[1.02] opacity-0 group-hover/item:opacity-100"></div>
                  <div className="relative flex items-start space-x-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg transform transition-transform group-hover/item:scale-110 group-hover/item:rotate-3`}>
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover/item:opacity-100"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover/item:text-blue-700 transition-colors">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workers Benefits */}
          <div className="space-y-8 group">
            <div className="text-center lg:text-left">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl animate-pulse"></div>
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                  <Users className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent mb-4">For Frontline Workers</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Easy-to-use tools that empower workers to participate in safety programs
              </p>
            </div>
            
            <div className="space-y-6">
              {workerBenefits.map((benefit, index) => (
                <div key={index} className="group/item relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50/50 rounded-2xl transform transition-transform group-hover/item:scale-[1.02] opacity-0 group-hover/item:opacity-100"></div>
                  <div className="relative flex items-start space-x-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg transform transition-transform group-hover/item:scale-110 group-hover/item:rotate-3`}>
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover/item:opacity-100"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover/item:text-emerald-700 transition-colors">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative inline-flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full animate-pulse"></div>
            <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-blue-50/50 rounded-full border border-blue-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mr-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <div className="absolute inset-0 w-6 h-6 bg-blue-600/20 rounded-full animate-ping"></div>
              </div>
              <span className="font-semibold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
                Join thousands of organizations improving workplace safety with YourHSEPartner
              </span>
            </div>
          </div>
          
          {/* Additional decorative stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">50k+</div>
              <div className="text-gray-600">Safety Reports Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;