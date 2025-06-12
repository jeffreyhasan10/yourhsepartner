import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Products", href: "#features" },
    { name: "Industries", href: "#applications" },
    { name: "Resources", href: "#faq" },
    { name: "Support", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" id="contact">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-ehs-600/10 via-ehs-400/5 to-transparent opacity-70" />
      </div>

      <div className="relative section-container py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 space-x-3">
              <img
                src="/hse.png"
                alt="HSE Logo"
                className="w-12 h-12 rounded-lg shadow-md bg-white object-contain"
              />
              <h3 className="text-2xl font-extrabold tracking-tight text-white">YourHSEPartner</h3>
            </div>
            <p className="text-ehs-400 font-semibold mb-2 ml-1">Empowering EHS Excellence</p>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg text-sm">
              Helping organizations enhance safety, ensure compliance, and drive environmental responsibility with our cloud-based EHS software.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <ContactItem icon={<Phone />} title="Phone Support" detail="1 877 932 3747" />
              <ContactItem icon={<MapPin />} title="Europe Office" detail="+44 20 3795 5646" />
              <ContactItem icon={<Mail />} title="Email Support" detail="info@yourhsepartner.com" />
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <SocialIcon Icon={Facebook} label="Facebook" />
              <SocialIcon Icon={Twitter} label="Twitter" />
              <SocialIcon Icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <LinkList links={quickLinks} />
          </FooterSection>

          {/* Legal Links & Newsletter */}
          <FooterSection title="Legal Information">
            <LinkList links={legalLinks} />
          </FooterSection>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-dashed border-ehs-600/40"></div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left max-w-2xl">
            © 2024 YourHSEPartner. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">
              System Status: <span className="text-green-400 font-semibold">Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Contact Info Block
const ContactItem = ({ icon, title, detail }) => (
  <div className="flex items-start space-x-3">
    <div className="w-10 h-10 rounded-lg bg-ehs-600 flex items-center justify-center shadow-md">
      {React.cloneElement(icon, { className: "w-5 h-5 text-white" })}
    </div>
    <div>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-gray-300 text-sm">{detail}</p>
    </div>
  </div>
);

// Reusable Footer Section
const FooterSection = ({ title, children }) => (
  <div>
    <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">
      {title}
    </h4>
    {children}
  </div>
);

// Social Icon Button
const SocialIcon = ({ Icon, label }) => (
  <a
    href="#"
    className="hover:text-ehs-400 transition-transform duration-200 hover:scale-110"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

// Link List
const LinkList = ({ links }) => (
  <ul className="space-y-3">
    {links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          className="text-gray-300 hover:text-ehs-400 transition-colors duration-200 flex items-center group font-medium"
        >
          {link.name}
          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </li>
    ))}
  </ul>
);

export default Footer;
