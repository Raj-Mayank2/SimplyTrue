import React from 'react';
import { CheckCircle, Heart, Award, Users } from 'lucide-react';
import aboutImage from '../../assets/images/about.jpg'
const AboutUsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-tl from-orange-200/15 to-amber-200/15 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* --- Image Section (Left) --- */}
        <div className="lg:w-1/2 w-full">
          <div className="relative">
            {/* Main Image Container */}
            <div className="w-full h-80 md:h-96 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 border border-amber-200/50 flex items-center justify-center">
              {/* Image Placeholder */}
              <img 
                src={aboutImage}
                alt="Our Story and Mission"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-amber-200/50 transform rotate-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">5+</div>
                <div className="text-xs text-slate-600 font-medium">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-amber-200/50 transform -rotate-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">50+</div>
                <div className="text-xs text-slate-600 font-medium">Healthy Products</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* --- Content Section (Right) --- */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          
          {/* Section Tag */}
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-md border border-amber-200/50">
            <span className="text-sm font-semibold text-emerald-600 flex items-center space-x-2">
              <Award size={16} />
              <span>About SimplyTrue Foods</span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Our Commitment to 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> You</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
            At SimplyTrue Foods, our journey began with a simple idea: that healthy food should never be boring or complicated. 
            <span className="text-emerald-600 font-semibold"> We are passionate about creating delicious, wholesome snacks</span> that fit seamlessly into your busy lifestyle.
          </p>
          
          {/* Simple Bullet Points */}
          <ul className="space-y-3 mb-8 text-left max-w-lg mx-auto lg:mx-0">
            <li className="flex items-start space-x-3 text-slate-700">
              <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
              <p className="text-base">
                <span className="font-semibold">Sustainably Sourced:</span> We partner with local farms that share our commitment to ethical and sustainable practices.
              </p>
            </li>
            <li className="flex items-start space-x-3 text-slate-700">
              <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
              <p className="text-base">
                <span className="font-semibold">100% Natural Ingredients:</span> Our snacks are free from artificial preservatives, colors, and flavors—just pure, simple goodness.
              </p>
            </li>
            <li className="flex items-start space-x-3 text-slate-700">
              <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
              <p className="text-base">
                <span className="font-semibold">Crafted with Care:</span> Every snack is made in small batches to ensure the highest quality, freshness, and that perfect crunch.
              </p>
            </li>
          </ul>
          
          {/* Action Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              📖 Read Our Full Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Food Elements */}
      <div className="absolute top-32 left-1/4 animate-bounce text-3xl opacity-10">🥜</div>
      <div className="absolute bottom-40 right-1/3 animate-pulse text-3xl opacity-10">🌰</div>
      <div className="absolute top-2/3 left-1/6 animate-bounce text-3xl opacity-10 animation-delay-1000">🍯</div>
    </section>
  );
};

export default AboutUsSection;
