import React, { useState, useEffect } from 'react';
import { getMealOfTheDay } from '../../data/mockAPI';
import { ShoppingCart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import mixedNutsImage from '../../assets/images/mixed-nuts.jpg';
import almondsImage from '../../assets/images/almonds.jpg'
import pumpkinSeedsImage from '../../assets/images/pumpkin-seeds.jpg';
import sunflowerSeedsImage from '../../assets/images/sunflower-seeds.jpg';
import cashewsImage from '../../assets/images/cashews.jpg';
import chocolateProteinBarImage from '../../assets/images/chocolate-protein-bar.jpg';
import peanutProteinBallsImage from '../../assets/images/peanut-protein-balls.jpg';
import greekYogurtBitesImage from '../../assets/images/greek-yogurt-bites.jpg';
//import roastedChickpeasImage from '../assets/images/roasted-chickpeas.jpg';
//import vanillaProteinBarImage from '../assets/images/vanilla-protein-bar.jpg';
import mixedDriedFruitsImage from '../../assets/images/mixed-dried-fruits.jpg';
//import medjoolDatesImage from '../assets/images/medjool-dates.jpg';
//import driedMangoImage from '../assets/images/dried-mango.jpg';
//import driedCranberriesImage from '../assets/images/dried-cranberries.jpg';
//import figBitesImage from '../assets/images/fig-bites.jpg';
import kaleChipsImage from '../../assets/images/kale-chips.jpg';
//import sweetPotatoChipsImage from '../assets/images/sweet-potato-chips.jpg';
//import beetrootChipsImage from '../assets/images/beetroot-chips.jpg';
import bananaChipsImage from '../../assets/images/banana-chips.jpg';
//import coconutChipsImage from '../assets/images/coconut-chips.jpg';
//import oatsGranolaBarImage from '../assets/images/oats-granola-bar.jpg';
//import chocolateGranolaImage from '../assets/images/chocolate-granola.jpg';
import fruitNutBarImage from '../../assets/images/fruit-nut-bar.jpg';
//import quinoaEnergyBitesImage from '../assets/images/quinoa-energy-bites.jpg';
//import muesliMixImage from '../assets/images/muesli-mix.jpg';

// A mapping object to connect product IDs to their imported images.
const productImages = {
  1: mixedNutsImage,
  2: almondsImage,
  3: pumpkinSeedsImage,
  4: sunflowerSeedsImage,
  5: cashewsImage,
  6: chocolateProteinBarImage,
  7: peanutProteinBallsImage,
  8: greekYogurtBitesImage,
  //9: roastedChickpeasImage,
  //10: vanillaProteinBarImage,
  11: mixedDriedFruitsImage,
  //12: medjoolDatesImage,
  //13: driedMangoImage,
  //14: driedCranberriesImage,
  //15: figBitesImage,
  16: kaleChipsImage,
  //17: sweetPotatoChipsImage,
  //18: beetrootChipsImage,
  19: bananaChipsImage,
  //20: coconutChipsImage,
  //21: oatsGranolaBarImage,
  //22: chocolateGranolaImage,
  23: fruitNutBarImage,
  //24: quinoaEnergyBitesImage,
  //25: muesliMixImage,
};


const MealOfTheDay = () => {
  const [meal, setMeal] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  // Fetch meal data and set up countdown timer on mount
  useEffect(() => {
    // Get a random meal from the mock data, simulating a daily special
    const mealOption = getMealOfTheDay();
    setMeal(mealOption);

    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setDate(now.getDate() + 1);
      midnight.setHours(0, 0, 0, 0);
      
      const diff = midnight - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to prevent delay

    return () => clearInterval(interval);
  }, []);

  if (!meal) {
    return null; // Don't render anything if the meal data isn't available yet
  }

  // Determine which image to use based on the product ID.
  const imageSrc = productImages[meal.id];

  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-teal-50 to-emerald-50 font-['Inter']">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow-lg border border-emerald-200/50">
          <span className="text-base font-semibold text-teal-600 flex items-center space-x-2">
            <Clock size={18} />
            <span>Today's Special Deal!</span>
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold font-['Playfair Display'] text-slate-800 mb-6 leading-tight">
          Meal of the Day
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-teal-200/50 flex flex-col md:flex-row items-center gap-6">
          
          {/* Product Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src={imageSrc}
              alt={meal.name} 
              className="w-full rounded-2xl shadow-lg border border-emerald-100 transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Product Details */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold font-['Playfair Display'] text-emerald-600 mb-2">
              {meal.name}
            </h3>
            <p className="text-slate-600 text-base md:text-lg mb-4">
              {meal.reason}
            </p>
            
            {/* Price Information */}
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <span className="text-4xl font-extrabold text-teal-700">
                ₹{meal.specialPrice}
              </span>
              <span className="text-lg font-medium text-slate-400 line-through">
                ₹{meal.originalPrice}
              </span>
              <span className="text-sm font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
                {meal.discount}% OFF
              </span>
            </div>
            
            {/* Countdown and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Clock size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-slate-700 text-xs font-medium">Offer ends in:</p>
                  <p className="text-lg font-bold text-orange-600">{timeLeft}</p>
                </div>
              </div>
              
              <Link 
                to={`/products/${meal.id}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-bold text-base bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-xl hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart size={20} />
                <span>Buy Now</span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealOfTheDay;
