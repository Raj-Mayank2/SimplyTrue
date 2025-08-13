import React, { useState } from 'react';
import { Mail, Facebook, Instagram, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-emerald-200">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
      >
        <ArrowUp size={20} className="text-white" />
      </button>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold text-emerald-700">SimplyTrue Foods</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Quick, healthy snacks for busy professionals.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">100% Natural</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">Organic</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Products', 'About', 'Contact', 'FAQ', 'Blog'].map((link, index) => (
                <a key={index} href="#" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Stay Connected</h4>
            
            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex bg-white rounded-full shadow-sm border border-emerald-200 overflow-hidden">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" 
                  className="bg-transparent text-slate-700 placeholder-slate-500 px-4 py-2 focus:outline-none flex-grow text-sm" 
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 transition-all duration-300"
                >
                  <Mail size={16} />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-emerald-600 text-xs mt-2">✓ Subscribed successfully!</p>
              )}
            </form>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a key={index} href="#" 
                   className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-emerald-200 text-slate-600 hover:text-emerald-600 hover:scale-110 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-emerald-200 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-600 text-sm flex items-center">
            © {new Date().getFullYear()} SimplyTrue Foods. Made with 
            <Heart size={12} className="text-red-500 mx-1" /> 
            for healthy living.
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-600 text-sm">We Accept:</span>
            <div className="flex space-x-1">
              {['💳', '🏦', '📱'].map((emoji, index) => (
                <span key={index} className="text-sm">{emoji}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-slate-500 text-xs">
            🚚 Free shipping on orders above ₹500 | ⭐ Rated 4.8/5 by customers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;