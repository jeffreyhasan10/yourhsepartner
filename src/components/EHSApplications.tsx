import React, { useState, useEffect } from "react";
import { FileCheck, AlertTriangle, Settings, Shield, Syringe, Eye, ClipboardCheck, Archive, FileText, HardHat, Users, AlertCircle, GraduationCap, Package, Trash2, Droplets, Snowflake, Library, ArrowRight, Zap } from "lucide-react";

// Define applications data (same as original, included for completeness)
const applications = [
  [
    {
      title: "Permit to Work Software",
      description: "Streamline work authorization processes with digital permit management, automated workflows, and real-time status tracking.",
      icon: FileCheck,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      accentColor: "border-emerald-200",
      features: ["Digital permits", "Automated workflows", "Real-time tracking", "Compliance monitoring"],
      stats: "50% Faster"
    },
    {
      title: "Near Miss Reporting Software",
      description: "Capture and analyze near-miss incidents to prevent future accidents through mobile reporting and trend analysis.",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      accentColor: "border-orange-200",
      features: ["Mobile reporting", "Trend analysis", "Investigation workflows", "Risk prevention"],
      stats: "85% Prevention"
    },
    {
      title: "Process Hazard Analysis Software",
      description: "Identify and assess process risks through systematic HAZOP studies and risk mitigation tracking.",
      icon: Settings,
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50",
      accentColor: "border-slate-200",
      features: ["HAZOP studies", "Risk assessment", "Action tracking", "Multiple methodologies"],
      stats: "99% Accurate"
    },
    {
      title: "Management of Change Software",
      description: "Control operational changes safely through structured evaluation, approval, and implementation processes.",
      icon: Shield,
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      accentColor: "border-blue-200",
      features: ["Change evaluation", "Approval workflows", "Risk control", "Implementation tracking"],
      stats: "100% Controlled"
    }
  ],
  [
    {
      title: "Vaccine Management Software",
      description: "Track employee vaccination records, manage schedules, and ensure compliance with health requirements.",
      icon: Syringe,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      accentColor: "border-pink-200",
      features: ["Vaccination tracking", "Schedule management", "Health compliance", "Confidential records"],
      stats: "HIPAA Compliant"
    },
    {
      title: "Safety Observations Software",
      description: "Record and analyze safety observations to identify hazards and promote proactive safety culture.",
      icon: Eye,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      accentColor: "border-violet-200",
      features: ["Observation tracking", "Hazard identification", "Trend analysis", "Culture improvement"],
      stats: "1M+ Observations"
    },
    {
      title: "Safety Inspection Software",
      description: "Conduct systematic safety inspections using mobile tools and customizable checklists.",
      icon: ClipboardCheck,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      accentColor: "border-cyan-200",
      features: ["Mobile inspections", "Custom checklists", "Finding tracking", "Compliance reporting"],
      stats: "Digital First"
    },
    {
      title: "Audit Management Software",
      description: "Manage compliance audits efficiently from planning to completion with automated workflows.",
      icon: Archive,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      accentColor: "border-amber-200",
      features: ["Audit scheduling", "Finding management", "Action tracking", "Compliance monitoring"],
      stats: "Full Compliance"
    }
  ],
  [
    {
      title: "Document Control Software",
      description: "Centralize document management with version control, approval workflows, and access management.",
      icon: FileText,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      accentColor: "border-indigo-200",
      features: ["Version control", "Approval workflows", "Access management", "Document distribution"],
      stats: "Zero Errors"
    },
    {
      title: "Job Safety Analysis Software",
      description: "Analyze job-specific safety risks through systematic JSA processes and hazard identification.",
      icon: HardHat,
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      accentColor: "border-yellow-200",
      features: ["Risk analysis", "Hazard identification", "Control development", "Training integration"],
      stats: "Risk-Free Jobs"
    },
    {
      title: "Behavior Based Safety Software",
      description: "Promote safe work behaviors through observation programs and feedback mechanisms.",
      icon: Users,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      accentColor: "border-teal-200",
      features: ["Behavior tracking", "Coaching programs", "Culture change", "Employee engagement"],
      stats: "95% Engagement"
    },
    {
      title: "Incident Reporting Software",
      description: "Report and investigate incidents efficiently with mobile tools and automated workflows.",
      icon: AlertCircle,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      accentColor: "border-red-200",
      features: ["Mobile reporting", "Investigation tools", "Photo capture", "Corrective actions"],
      stats: "24/7 Reporting"
    }
  ],
  [
    {
      title: "Training Management Software",
      description: "Deliver and track safety training programs with competency management and compliance reporting.",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      accentColor: "border-purple-200",
      features: ["Training delivery", "Competency tracking", "Compliance reporting", "Multiple formats"],
      stats: "98% Pass Rate"
    },
    {
      title: "Assets and Compliance Tracking",
      description: "Monitor asset compliance status, certifications, and maintenance requirements effectively.",
      icon: Package,
      color: "from-emerald-600 to-green-600",
      bgColor: "bg-emerald-50",
      accentColor: "border-emerald-200",
      features: ["Asset tracking", "Certification management", "Maintenance scheduling", "Compliance monitoring"],
      stats: "Asset Visibility"
    },
    {
      title: "Waste Management Software",
      description: "Manage waste disposal processes and environmental compliance with tracking and reporting.",
      icon: Trash2,
      color: "from-lime-600 to-green-600",
      bgColor: "bg-lime-50",
      accentColor: "border-lime-200",
      features: ["Waste tracking", "Disposal management", "Environmental compliance", "Regulatory reporting"],
      stats: "Zero Waste"
    },
    {
      title: "Water Quality Management Software",
      description: "Monitor water quality parameters and ensure environmental compliance with testing and reporting.",
      icon: Droplets,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      accentColor: "border-blue-200",
      features: ["Quality monitoring", "Testing schedules", "Parameter tracking", "Regulatory compliance"],
      stats: "Pure Quality"
    }
  ],
  [
    {
      title: "Refrigerant Management Software",
      description: "Track refrigerant usage and compliance with environmental regulations and EPA requirements.",
      icon: Snowflake,
      color: "from-sky-400 to-blue-400",
      bgColor: "bg-sky-50",
      accentColor: "border-sky-200",
      features: ["Usage tracking", "Leak detection", "EPA compliance", "Inventory management"],
      stats: "EPA Approved"
    },
    {
      title: "SDS Library Software",
      description: "Maintain safety data sheet libraries with easy access, search capabilities, and hazard communication.",
      icon: Library,
      color: "from-gray-600 to-slate-600",
      bgColor: "bg-gray-50",
      accentColor: "border-gray-200",
      features: ["SDS library", "Chemical inventory", "Hazard communication", "Easy search"],
      stats: "Instant Access"
    }
  ]
];

const ApplicationCard = ({ app, rowIndex, index }) => (
  <article
    className={`relative rounded-2xl border-2 ${app.accentColor} bg-white/95 p-6 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    tabIndex={0}
    aria-label={app.title}
  >
    {/* Badge */}
    <div className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r ${app.color} text-white rounded-full text-xs font-semibold shadow-md group-hover:scale-110 transition-transform duration-300`}>
      {app.stats}
    </div>

    {/* Icon */}
    <div className="mb-4">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${app.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <app.icon className="w-6 h-6" aria-hidden="true" />
      </div>
    </div>

    {/* Content */}
    <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
      {app.title}
    </h3>
    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
      {app.description}
    </p>

    {/* Features */}
    <ul className="space-y-2 mb-4" role="list">
      {app.features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-center text-xs text-gray-700 group-hover:translate-x-1 transition-transform duration-200"
        >
          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${app.color} mr-2 group-hover:animate-pulse`} aria-hidden="true"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
      <span>Explore Solution</span>
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
    </div>
  </article>
);

const EHSApplications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden"
      id="applications"
      aria-labelledby="ehs-applications-title"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${2.5 + Math.random() * 1.5}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white font-medium mb-4 shadow-sm">
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span>Complete EHS Solution Suite</span>
          </div>
          <h2 id="ehs-applications-title" className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">EHS Management Software</span> Applications
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Comprehensive software solutions for every aspect of your EHS management system
          </p>
        </header>

        {/* Application Grid */}
        <div className="space-y-8">
          {applications.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {row.map((app, index) => (
                <ApplicationCard key={index} app={app} rowIndex={rowIndex} index={index} />
              ))}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a
            href="#discover"
            className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Discover all EHS applications"
          >
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            <span>Discover All EHS Applications</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EHSApplications;