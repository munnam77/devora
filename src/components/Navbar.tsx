import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Learnify
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/features" className={`${isActive("/features") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
                Features
              </Link>
              <Link to="/solutions" className={`${isActive("/solutions") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
                Solutions
              </Link>
              <Link to="/resources" className={`${isActive("/resources") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
                Resources
              </Link>
              <Link to="/contact" className={`${isActive("/contact") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
                Contact
              </Link>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/features" className={`block px-3 py-2 ${isActive("/features") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
              Features
            </Link>
            <Link to="/solutions" className={`block px-3 py-2 ${isActive("/solutions") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
              Solutions
            </Link>
            <Link to="/resources" className={`block px-3 py-2 ${isActive("/resources") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
              Resources
            </Link>
            <Link to="/contact" className={`block px-3 py-2 ${isActive("/contact") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}>
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>}
    </nav>;
};