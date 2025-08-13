import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Award, Users, Leaf, Heart, Sprout, Star, Package, Factory, MessageCircle, Clock } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-['Inter']">
      
      
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-amber-200/50">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-['Playfair Display'] text-slate-800 mb-4">
            Our Community is Growing!
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            We're building a space for snack enthusiasts to connect, share recipes, and celebrate healthy living together. Stay tuned for our new community features!
          </p>
          <div className="inline-flex items-center space-x-2 text-slate-700 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-amber-200/50">
            <Clock size={20} className="text-emerald-600" />
            <span className="font-semibold">Coming Soon</span>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Community;
