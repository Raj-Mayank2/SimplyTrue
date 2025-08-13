import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-tl from-orange-200/20 to-amber-200/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-full blur-xl"></div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Small Heading/Title */}
        <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-amber-200/50">
          <p className="text-lg md:text-xl font-semibold text-emerald-600 flex items-center justify-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span>CRUNCHY & DELICIOUS</span>
          </p>
        </div>
        
        {/* Big Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
          Farm-Fresh
          <br />
          <span className="text-slate-800">Snacks for Every Occasion</span>
        </h1>
        
        {/* Paragraph Description */}
        <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          Say goodbye to complicated ingredient lists. Our snacks are a celebration of simple, real food, crafted to provide you with pure,
          <span className="text-emerald-600 font-semibold"> guilt-free energy </span> for your busy day.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            🍃 Meet Our Farmers
          </button>
          <Link to="/products">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg bg-white/90 backdrop-blur-sm text-emerald-700 shadow-xl border-2 border-emerald-200 hover:bg-white hover:border-emerald-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              🥜 Explore All Snacks
            </button>
          </Link>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Truck size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Quick Delivery</h3>
            <p className="text-slate-600 text-sm">Fast shipping across India with care</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle2 size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">100% Healthy</h3>
            <p className="text-slate-600 text-sm">No artificial preservatives or additives</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Leaf size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">All Natural</h3>
            <p className="text-slate-600 text-sm">Sourced from organic farms nationwide</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-amber-200/50">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-semibold text-slate-700">4.8/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-amber-200/50">
            <span className="text-lg">🚚</span>
            <span className="text-sm font-semibold text-slate-700">Free Shipping ₹500+</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-amber-200/50">
            <span className="text-lg">👥</span>
            <span className="text-sm font-semibold text-slate-700">10,000+ Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Floating Food Elements */}
      <div className="absolute top-20 left-1/4 animate-bounce text-4xl opacity-20">🥜</div>
      <div className="absolute bottom-32 left-1/6 animate-pulse text-4xl opacity-20">🍎</div>
      <div className="absolute top-1/3 right-1/6 animate-bounce text-4xl opacity-20 animation-delay-1000">🥨</div>
      <div className="absolute bottom-20 right-1/4 animate-pulse text-4xl opacity-20 animation-delay-2000">🌰</div>
    </section>
  );
};

export default HeroSection;
