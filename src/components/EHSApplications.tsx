
import React from "react";
import { FileCheck, AlertTriangle, Settings, Shield, Syringe, Eye, ClipboardCheck, Archive, FileText, HardHat, Users, AlertCircle, GraduationCap, Package, Trash2, Droplets, Snowflake, Library } from "lucide-react";

const EHSApplications = () => {
  const applications = [
    // Row 1
    [
      {
        title: "Permit to Work Software",
        description: "Streamline work authorization processes with digital permit management, automated workflows, and real-time status tracking.",
        icon: FileCheck,
        features: ["Digital permits", "Automated workflows", "Real-time tracking", "Compliance monitoring"]
      },
      {
        title: "Near Miss Reporting Software",
        description: "Capture and analyze near-miss incidents to prevent future accidents through mobile reporting and trend analysis.",
        icon: AlertTriangle,
        features: ["Mobile reporting", "Trend analysis", "Investigation workflows", "Risk prevention"]
      },
      {
        title: "Process Hazard Analysis Software",
        description: "Identify and assess process risks through systematic HAZOP studies and risk mitigation tracking.",
        icon: Settings,
        features: ["HAZOP studies", "Risk assessment", "Action tracking", "Multiple methodologies"]
      },
      {
        title: "Management of Change Software",
        description: "Control operational changes safely through structured evaluation, approval, and implementation processes.",
        icon: Shield,
        features: ["Change evaluation", "Approval workflows", "Risk control", "Implementation tracking"]
      }
    ],
    // Row 2
    [
      {
        title: "Vaccine Management Software",
        description: "Track employee vaccination records, manage schedules, and ensure compliance with health requirements.",
        icon: Syringe,
        features: ["Vaccination tracking", "Schedule management", "Health compliance", "Confidential records"]
      },
      {
        title: "Safety Observations Software",
        description: "Record and analyze safety observations to identify hazards and promote proactive safety culture.",
        icon: Eye,
        features: ["Observation tracking", "Hazard identification", "Trend analysis", "Culture improvement"]
      },
      {
        title: "Safety Inspection Software",
        description: "Conduct systematic safety inspections using mobile tools and customizable checklists.",
        icon: ClipboardCheck,
        features: ["Mobile inspections", "Custom checklists", "Finding tracking", "Compliance reporting"]
      },
      {
        title: "Audit Management Software",
        description: "Manage compliance audits efficiently from planning to completion with automated workflows.",
        icon: Archive,
        features: ["Audit scheduling", "Finding management", "Action tracking", "Compliance monitoring"]
      }
    ],
    // Row 3
    [
      {
        title: "Document Control Software",
        description: "Centralize document management with version control, approval workflows, and access management.",
        icon: FileText,
        features: ["Version control", "Approval workflows", "Access management", "Document distribution"]
      },
      {
        title: "Job Safety Analysis Software",
        description: "Analyze job-specific safety risks through systematic JSA processes and hazard identification.",
        icon: HardHat,
        features: ["Risk analysis", "Hazard identification", "Control development", "Training integration"]
      },
      {
        title: "Behavior Based Safety Software",
        description: "Promote safe work behaviors through observation programs and feedback mechanisms.",
        icon: Users,
        features: ["Behavior tracking", "Coaching programs", "Culture change", "Employee engagement"]
      },
      {
        title: "Incident Reporting Software",
        description: "Report and investigate incidents efficiently with mobile tools and automated workflows.",
        icon: AlertCircle,
        features: ["Mobile reporting", "Investigation tools", "Photo capture", "Corrective actions"]
      }
    ],
    // Row 4
    [
      {
        title: "Training Management Software",
        description: "Deliver and track safety training programs with competency management and compliance reporting.",
        icon: GraduationCap,
        features: ["Training delivery", "Competency tracking", "Compliance reporting", "Multiple formats"]
      },
      {
        title: "Assets and Compliance Tracking",
        description: "Monitor asset compliance status, certifications, and maintenance requirements effectively.",
        icon: Package,
        features: ["Asset tracking", "Certification management", "Maintenance scheduling", "Compliance monitoring"]
      },
      {
        title: "Waste Management Software",
        description: "Manage waste disposal processes and environmental compliance with tracking and reporting.",
        icon: Trash2,
        features: ["Waste tracking", "Disposal management", "Environmental compliance", "Regulatory reporting"]
      },
      {
        title: "Water Quality Management Software",
        description: "Monitor water quality parameters and ensure environmental compliance with testing and reporting.",
        icon: Droplets,
        features: ["Quality monitoring", "Testing schedules", "Parameter tracking", "Regulatory compliance"]
      }
    ],
    // Row 5
    [
      {
        title: "Refrigerant Management Software",
        description: "Track refrigerant usage and compliance with environmental regulations and EPA requirements.",
        icon: Snowflake,
        features: ["Usage tracking", "Leak detection", "EPA compliance", "Inventory management"]
      },
      {
        title: "SDS Library Software",
        description: "Maintain safety data sheet libraries with easy access, search capabilities, and hazard communication.",
        icon: Library,
        features: ["SDS library", "Chemical inventory", "Hazard communication", "Easy search"]
      }
    ]
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-ehs-50/20 to-ehs-100/30" id="applications">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="gradient-text">EHS Management Software</span> Applications
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Comprehensive software solutions for every aspect of your EHS management system
          </p>
        </div>
        
        <div className="space-y-12">
          {applications.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {row.map((app, index) => (
                <div key={index} className="feature-card group hover:shadow-ehs-shadow transition-all duration-300 hover:translate-y-[-5px] bg-white border border-ehs-100">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-ehs-500 to-ehs-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <app.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-ehs-700 group-hover:text-ehs-600 transition-colors">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">{app.description}</p>
                  <div className="space-y-1">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-ehs-600">
                        <div className="w-1 h-1 bg-ehs-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
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
