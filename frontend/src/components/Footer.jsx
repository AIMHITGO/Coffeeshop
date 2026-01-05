import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="https://customer-assets.emergentagent.com/job_local-sip/artifacts/l6mm4os6_Happy-Logo-1920w.webp" 
                alt="Happy Place Coffee & Eats"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A family-owned, Latin-influenced café bringing authentic flavors and craft coffee to Woodbridge, VA. 
              Where every guest is treated like family.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'Rewards', 'Blog', 'About', 'Locations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-amber-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-white font-medium">8AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white font-medium">8AM - 5PM</span>
              </li>
              <li className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 mb-1">Breakfast</p>
                <p className="text-white font-medium">8:00 AM - 11:00 AM</p>
              </li>
              <li>
                <p className="text-gray-400 mb-1">Weekend Brunch</p>
                <p className="text-white font-medium">11:00 AM - 2:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/place/13840+Smoketown+Rd,+Woodbridge,+VA+22192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">
                    13840 Smoketown Road<br />
                    Woodbridge, VA 22192
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:5715524070"
                  className="flex items-center space-x-3 text-gray-400 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">(571) 552-4070</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:happyrevolutioncoffee@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">happyrevolutioncoffee@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Happy Place Coffee & Eats. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
