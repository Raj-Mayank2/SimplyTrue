import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Telescope, Zap, Sparkles } from 'lucide-react';

const WhySimplyTrue = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-16 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-tl from-orange-200/15 to-amber-200/15 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Tag */}
        <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-amber-200/50">
          <span className="text-lg font-semibold text-emerald-600 flex items-center space-x-2">
            <Sparkles size={20} />
            <span>Why Choose Us</span>
          </span>
        </div>

        {/* Main Heading and Subtitle */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Why Simply True 
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Stands Out</span>
        </h2>
        <p className="text-base md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're redefining snack time with nutrition-forward, delicious options that make 
          <span className="text-emerald-600 font-semibold"> healthy eating effortless</span>.
        </p>

        {/* --- Feature Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Conscious Sourcing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-4">Conscious Sourcing</h3>
            <p className="text-slate-600 leading-relaxed">
              We partner with local, sustainable farms to bring you the highest quality ingredients that respect both your health and our planet.
            </p>
          </div>

          {/* Card 2: Innovatively Crafted */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Telescope size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-4">Innovatively Crafted</h3>
            <p className="text-slate-600 leading-relaxed">
              Our unique recipes are designed to be both incredibly delicious and truly nutritious, blending taste with wellness perfectly.
            </p>
          </div>

          {/* Card 3: Effortlessly Healthy */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-4">Effortlessly Healthy</h3>
            <p className="text-slate-600 leading-relaxed">
              Healthy snacking made easy, with quick delivery and office-friendly portions that fit seamlessly into your busy lifestyle.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-amber-200/50">
            <div className="text-2xl font-bold text-emerald-600">100%</div>
            <div className="text-sm text-slate-600 font-medium">Natural Ingredients</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-amber-200/50">
            <div className="text-2xl font-bold text-emerald-600">50+</div>
            <div className="text-sm text-slate-600 font-medium">Healthy Options</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-amber-200/50">
            <div className="text-2xl font-bold text-emerald-600">10K+</div>
            <div className="text-sm text-slate-600 font-medium">Happy Customers</div>
          </div>
        </div>

        {/* --- Call to Action Button --- */}
        <div>
          <Link to="/products">
            <button className="px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              🥜 Try Our Snacks
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Food Elements */}
      <div className="absolute top-32 right-1/4 animate-bounce text-3xl opacity-10">🌰</div>
      <div className="absolute bottom-40 left-1/4 animate-pulse text-3xl opacity-10">🥨</div>
      <div className="absolute top-2/3 right-1/6 animate-bounce text-3xl opacity-10 animation-delay-1000">🍯</div>
    </section>
  );
};

export default WhySimplyTrue;
