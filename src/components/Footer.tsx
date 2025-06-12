
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12" id="contact">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold text-pulse-600 mb-4">YourHSEPartner</h3>
            <p className="text-gray-600 mb-4">
              YourHSEPartner provides comprehensive EHS management software solutions to help organizations protect workers, ensure compliance, and enhance workplace safety.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Phone:</strong> 1 877 932 3747
              </p>
              <p className="text-gray-600">
                <strong>Europe:</strong> +44 20 3795 5646
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@yourhsepartner.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-pulse-500 transition-colors">Products</a></li>
              <li><a href="#applications" className="text-gray-600 hover:text-pulse-500 transition-colors">Industries</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-pulse-500 transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-pulse-500 transition-colors">Support</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-pulse-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2024 YourHSEPartner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
