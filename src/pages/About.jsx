import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Award, Users, Leaf, Heart, Sprout, Star, Package, Factory } from 'lucide-react';
import mainabout from "../assets/images/main-about.jpg"
const About = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 font-['Inter'] min-h-screen">
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* --- Hero Section: Snacks with a Story --- */}
        

        {/* --- Core Values Section --- */}
        <section className="py-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="w-full h-72 rounded-2xl shadow-lg overflow-hidden border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
                <img 
                  src={mainabout} 
                  alt="Our Philosophy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Our Philosophy
              </h2>
              <p className="italic text-base md:text-lg text-slate-700 leading-relaxed mb-6 bg-emerald-50/50 p-4 rounded-xl border-l-4 border-emerald-500">
                "We're committed to using only nature's finest ingredients — no additives, no junk. Just pure, guilt-free snacking made with respect for people and planet."
              </p>
              
              <ul className="space-y-3 mt-5 text-left">
                <li className="flex items-start space-x-3 text-slate-700 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-emerald-200/30">
                  <Star size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Traditional Farming:</span>
                    <span className="text-sm text-slate-600 ml-1">We combine traditional farming with innovative cooking to create delicious chips.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-slate-700 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-emerald-200/30">
                  <Package size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Local Partnerships:</span>
                    <span className="text-sm text-slate-600 ml-1">Today, we partner with 12 local farms to bring you snacks made with integrity from soil to shelf.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-slate-700 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-emerald-200/30">
                  <Factory size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Small-Batch Production:</span>
                    <span className="text-sm text-slate-600 ml-1">Each snack is crafted in small batches for quality control and that perfect crunch.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Process Flow Section --- */}
        <section className="py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              From Our Farm to Your Hands
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our simple 4-step process ensures quality at every stage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">Sustainable Farming</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">Our potatoes are grown using regenerative agriculture practices that enrich the soil.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">Hand Selection</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">Only the finest potatoes make the cut - inspected for quality and freshness.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">Artisanal Cooking</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">Small-batch cooking in sunflower oil at precise temperatures for perfect crispness.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">Quality Packaging</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">Sealed in plant-based bags within hours of cooking to lock in freshness.</p>
            </div>
          </div>
        </section>

        {/* --- Additional Stats Section --- */}
        <section className="py-8 mt-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-emerald-600 mb-1">5+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-emerald-600 mb-1">12</div>
                <div className="text-sm text-slate-600 font-medium">Partner Farms</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-emerald-600 mb-1">50+</div>
                <div className="text-sm text-slate-600 font-medium">Products</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                <div className="text-sm text-slate-600 font-medium">Natural</div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;