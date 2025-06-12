import React, { useState, useEffect } from "react";
import {
  BarChart3, Smartphone, AlertTriangle, Eye, ClipboardCheck,
  GraduationCap, FileText, Users, ArrowRight, Zap, Shield, TrendingUp
} from "lucide-react";

const KeyFeatures = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Reports and Dashboards",
      description: "EHS reports and dashboards provide real-time data, helping you track performance and make informed decisions. Visualize KPIs, trends, and compliance metrics.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      accentColor: "border-purple-200",
      benefits: ["Real-time analytics", "Custom reporting", "Executive dashboards", "Trend analysis"],
      stats: "99.9% Uptime"
    },
    {
      title: "Mobile App",
      description: "EHS mobile apps give you access to critical safety data on the go, enabling quick reporting and real-time updates from any location.",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      accentColor: "border-blue-200",
      benefits: ["Offline capability", "Photo capture", "GPS location", "Push notifications"],
      stats: "4.9★ Rating"
    },
    {
      title: "Incident Management",
      description: "Incident management allows you to log, track and investigate workplace incidents to prevent future occurrences with automated workflows.",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      accentColor: "border-red-200",
      benefits: ["Automated workflows", "Root cause analysis", "CAPA tracking", "Regulatory reporting"],
      stats: "85% Faster Resolution"
    },
    {
      title: "Observation Management",
      description: "Observation management features robust checklists and intelligent workflows to escalate high-risk situations instantly and promote safety culture.",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      accentColor: "border-green-200",
      benefits: ["Digital checklists", "Risk scoring", "Auto-escalation", "Behavior tracking"],
      stats: "500K+ Observations"
    },
    {
      title: "Audit Management",
      description: "Audit management streamlines the audit process, helping you track, organize and ensure compliance with standards and regulations.",
      icon: ClipboardCheck,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      accentColor: "border-indigo-200",
      benefits: ["Audit scheduling", "Finding management", "Evidence collection", "Compliance tracking"],
      stats: "100% Compliance"
    },
    {
      title: "Training Management",
      description: "Training management helps track and deliver essential safety training, ensuring compliance and reducing workplace risks through comprehensive learning paths.",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      accentColor: "border-yellow-200",
      benefits: ["Learning paths", "Competency tracking", "Certification management", "Skills assessment"],
      stats: "95% Completion Rate"
    },
    {
      title: "Document Control",
      description: "Centralized document management with version control ensures workers always access current procedures, policies, and safety documents.",
      icon: FileText,
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      accentColor: "border-gray-200",
      benefits: ["Version control", "Document approval", "Access management", "Digital signatures"],
      stats: "10M+ Documents"
    },
    {
      title: "Employee Engagement",
      description: "Engage employees in safety programs through participation tracking, recognition systems, and communication tools that build safety culture.",
      icon: Users,
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50",
      accentColor: "border-teal-200",
      benefits: ["Participation tracking", "Recognition programs", "Communication tools", "Feedback systems"],
      stats: "92% Engagement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-blue-100/30 relative overflow-hidden" id="features">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .feature-card {
          position: relative;
          isolation: isolate;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          z-index: -1;
          transition: background 0.3s ease;
        }
        .feature-card:hover::before {
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
        }
      `}</style>

      {/* Floating background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-green-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-green-100/30 to-blue-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Section content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-200 rounded-full text-green-700 font-medium mb-4 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Advanced EHS Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Key Features of <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">YourHSEPartner</span> EHS Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to streamline your EHS management processes and drive safety excellence
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`feature-card group p-6 rounded-2xl border-2 ${feature.accentColor} shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none z-0 ${feature.color}"></div>

                {/* Stat Badge */}
                <div className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r ${feature.color} text-white rounded-full text-xs font-semibold shadow-lg border-2 border-white`}>
                  {feature.stats}
                </div>

                {/* Icon */}
                <div className="mb-4 relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transform transition-all duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>

                  <ul className="mb-4 space-y-1 text-sm text-gray-700">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${feature.color}`}></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Transform Your EHS Management Today</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
