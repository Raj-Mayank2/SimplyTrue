import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the main components we have built
import Home from './pages/Home';
import Snacks from './pages/Snacks';
import ProductPage from './pages/ProductPage'; 
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ChatbotMockup from './components/common/ChatbotMockup';
import About from './pages/About';
import Community from './pages/Community';
import BMICalculator from './components/common/BMIcalculator.jsx';


// Enhanced loading screen component
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 font-['Inter'] relative overflow-hidden">
    
    {/* Decorative Background Elements */}
    <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-tl from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-emerald-300/15 to-teal-300/15 rounded-full blur-2xl animate-pulse delay-300"></div>

    <div className="text-center relative z-10">
      
      {/* Logo/Brand Section */}
      <div className="mb-8">
        <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-4 shadow-lg border border-emerald-200/50">
          <span className="text-2xl mr-2 animate-bounce">🥜</span>
          <span className="text-lg font-bold text-emerald-700">SimplyTrue Foods</span>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 animate-fade-in">
        Preparing Your
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Fresh Experience</span>
      </h1>

      {/* Loading Animation */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="text-base md:text-lg text-emerald-600 font-medium animate-pulse">
        Loading fresh snacks...
      </p>

      {/* Progress Bar */}
      <div className="mt-6 w-64 mx-auto">
        <div className="bg-white/60 rounded-full h-2 overflow-hidden shadow-inner">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full animate-loading-bar shadow-sm"></div>
        </div>
      </div>

    </div>

    {/* Floating Food Elements */}
    <div className="absolute top-32 right-1/4 animate-float text-3xl opacity-20">🌰</div>
    <div className="absolute bottom-40 left-1/4 animate-float-delayed text-3xl opacity-20">🥨</div>
    <div className="absolute top-2/3 right-1/6 animate-float text-3xl opacity-20 delay-500">🍯</div>
    <div className="absolute top-1/4 left-1/5 animate-float-delayed text-2xl opacity-20">🥜</div>

    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes loading-bar {
        0% { width: 0%; }
        50% { width: 70%; }
        100% { width: 100%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-3deg); }
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      
      .animate-loading-bar {
        animation: loading-bar 2s ease-in-out infinite;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 4s ease-in-out infinite;
      }
      
      .delay-100 {
        animation-delay: 0.1s;
      }
      
      .delay-200 {
        animation-delay: 0.2s;
      }
      
      .delay-300 {
        animation-delay: 0.3s;
      }
      
      .delay-500 {
        animation-delay: 0.5s;
      }
      
      .delay-700 {
        animation-delay: 0.7s;
      }
    `}</style>
  </div>
);


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    // BrowserRouter enables client-side routing for the entire app.
    <BrowserRouter>
      {/* The Header is outside of the <Routes> so it appears on every page */}
      <Header />
      
      <main className="font-['Inter']">
        <Routes>
          {/* Route for the homepage. */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the snacks catalog page. */}
          <Route path="/products" element={<Snacks />} />
          
          {/* New dynamic route for the individual product page */}
          <Route path="/products/:id" element={<ProductPage />} />

          {/* Placeholder routes for the other pages. */}
          <Route path="/about" element={<About/>} />
          <Route path="/community" element={<Community/>} />
          
          {/* A catch-all route for any undefined paths. */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-4xl text-slate-800">404 - Page Not Found</div>} />
        </Routes>
      </main>
      <ChatbotMockup/>
      <BMICalculator/>
      {/* The Footer is also outside the <Routes> so it appears on every page. */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
