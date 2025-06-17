
import { Globe, Heart, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Globifyd</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Smart errands. Anywhere. Anytime. Your trusted global partner for 
              personal errands, business services, and international logistics.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@globifyd.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1-800-GLOBIFY</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Personal Errands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concierge Services</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Globifyd. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 fill-red-500 text-red-500" />
            <span>for global connections</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
