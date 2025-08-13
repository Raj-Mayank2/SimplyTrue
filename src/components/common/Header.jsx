import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

// Mock cart item count for demonstration
const mockCartItemCount = 3; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Google Fonts are typically imported in index.html or main CSS file */}
      
      <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 backdrop-blur-sm shadow-lg border-b border-amber-100">
        <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
          
          {/* Logo and Navigation Section */}
          <div className="flex items-center">
            {/* Enhanced Logo */}
            <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">🌱</span>
              </div>
              <div className="flex flex-col">
                <span style={{fontFamily: 'Playfair Display'}} className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  SimplyTrue
                </span>
                <span style={{fontFamily: 'Inter'}} className="text-xs text-emerald-600 font-medium -mt-1">
                  Foods
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              <Link to="/" className="nav-link group relative">
                <span className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium text-base">Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/about" className="nav-link group relative">
                <span className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium text-base">About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/products" className="nav-link group relative">
                <span className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium text-base">Products</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/community" className="nav-link group relative">
                <span className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium text-base">Community</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Search Bar */}
            

            {/* User Profile Button */}
            <button className="hidden lg:flex items-center justify-center w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full hover:bg-emerald-50 hover:shadow-md transition-all duration-300 border border-amber-200/50">
              <User size={20} className="text-slate-600 hover:text-emerald-600 transition-colors duration-300" />
            </button>

            {/* Enhanced Cart Button */}
            <div className="relative">
              <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <ShoppingCart size={20} className="text-white" />
              </button>
              {mockCartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-6 w-6 bg-gradient-to-br from-orange-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                  {mockCartItemCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full hover:bg-slate-50 transition-all duration-300 border border-amber-200/50"
            >
              {isMenuOpen ? 
                <X size={22} className="text-slate-600" /> : 
                <Menu size={22} className="text-slate-600" />
              }
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-white via-amber-50/90 to-orange-50/90 backdrop-blur-md border-t border-amber-200/50 shadow-xl">
            {/* Overlay to close menu when clicked outside */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={closeMobileMenu}
            ></div>
            
            <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  <Link 
                    to="/" 
                    onClick={closeMobileMenu}
                    className="mobile-nav-link group flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl transition-all duration-300"
                  >
                    <span style={{fontFamily: 'Inter'}} className="font-medium">Home</span>
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={closeMobileMenu}
                    className="mobile-nav-link group flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl transition-all duration-300"
                  >
                    <span style={{fontFamily: 'Inter'}} className="font-medium">About</span>
                  </Link>
                  <Link 
                    to="/products" 
                    onClick={closeMobileMenu}
                    className="mobile-nav-link group flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl transition-all duration-300"
                  >
                    <span style={{fontFamily: 'Inter'}} className="font-medium">Products</span>
                  </Link>
                  <Link 
                    to="/community" 
                    onClick={closeMobileMenu}
                    className="mobile-nav-link group flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl transition-all duration-300"
                  >
                    <span style={{fontFamily: 'Inter'}} className="font-medium">Community</span>
                  </Link>
                  <button 
                    onClick={closeMobileMenu}
                    className="mobile-nav-link group flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl transition-all duration-300 w-full text-left"
                  >
                    <User size={18} className="mr-3" />
                    <span style={{fontFamily: 'Inter'}} className="font-medium">Login / Account</span>
                  </button>
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-amber-200/50">
                  <button 
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span style={{fontFamily: 'Inter'}}>Start Shopping</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
