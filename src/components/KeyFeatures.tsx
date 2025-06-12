
import React from "react";
import { BarChart3, Smartphone, AlertTriangle, Eye, ClipboardCheck, GraduationCap, FileText, Users } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Reports and Dashboards",
      description: "EHS reports and dashboards provide real-time data, helping you track performance and make informed decisions. Visualize KPIs, trends, and compliance metrics.",
      icon: BarChart3,
      benefits: ["Real-time analytics", "Custom reporting", "Executive dashboards", "Trend analysis"]
    },
    {
      title: "Mobile App",
      description: "EHS mobile apps give you access to critical safety data on the go, enabling quick reporting and real-time updates from any location.",
      icon: Smartphone,
      benefits: ["Offline capability", "Photo capture", "GPS location", "Push notifications"]
    },
    {
      title: "Incident Management",
      description: "Incident management allows you to log, track and investigate workplace incidents to prevent future occurrences with automated workflows.",
      icon: AlertTriangle,
      benefits: ["Automated workflows", "Root cause analysis", "CAPA tracking", "Regulatory reporting"]
    },
    {
      title: "Observation Management",
      description: "Observation management features robust checklists and intelligent workflows to escalate high-risk situations instantly and promote safety culture.",
      icon: Eye,
      benefits: ["Digital checklists", "Risk scoring", "Auto-escalation", "Behavior tracking"]
    },
    {
      title: "Audit Management",
      description: "Audit management streamlines the audit process, helping you track, organize and ensure compliance with standards and regulations.",
      icon: ClipboardCheck,
      benefits: ["Audit scheduling", "Finding management", "Evidence collection", "Compliance tracking"]
    },
    {
      title: "Training Management",
      description: "Training management helps track and deliver essential safety training, ensuring compliance and reducing workplace risks through comprehensive learning paths.",
      icon: GraduationCap,
      benefits: ["Learning paths", "Competency tracking", "Certification management", "Skills assessment"]
    },
    {
      title: "Document Control",
      description: "Centralized document management with version control ensures workers always access current procedures, policies, and safety documents.",
      icon: FileText,
      benefits: ["Version control", "Document approval", "Access management", "Digital signatures"]
    },
    {
      title: "Employee Engagement",
      description: "Engage employees in safety programs through participation tracking, recognition systems, and communication tools that build safety culture.",
      icon: Users,
      benefits: ["Participation tracking", "Recognition programs", "Communication tools", "Feedback systems"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ehs-50/50 via-white to-ehs-100/30" id="features">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Key Features of <span className="gradient-text">YourHSEPartner</span> EHS Software
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Comprehensive tools designed to streamline your EHS management processes and drive safety excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover:shadow-ehs-shadow transition-all duration-300 hover:translate-y-[-5px]">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-ehs-500 to-ehs-600 text-white mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-ehs-700">{feature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-ehs-600">
                    <div className="w-1.5 h-1.5 bg-ehs-500 rounded-full mr-2"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
