import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

// --- IMPORTANT: The correct way to handle images in a React app.
// We import all images to get a valid, web-accessible URL.
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


const ProductCard = ({ product }) => {
  // Determine which image to use based on the product ID.
  const imageSrc = productImages[product.id];

  return (
    <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-amber-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Link to the individual product page */}
      <Link to={`/products/${product.id}`}>
        {/* --- Product Image Section --- */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
          {/* Use the dynamically determined image source here. */}
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Calorie information badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md border border-amber-200/50">
            <span className="text-sm font-bold text-emerald-700">{product.calories} kcal</span>
          </div>
        </div>
        
        {/* --- Product Details Section --- */}
        <div className="p-6 text-center">
          {/* Product Name */}
          <h3 className="text-xl font-bold font-['Playfair Display'] text-slate-800 mb-2">
            {product.name}
          </h3>
          
          {/* Product Description */}
          <p className="text-sm text-slate-600 mb-4 h-12 overflow-hidden">
            {product.description}
          </p>

          {/* Price and Add to Cart Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              {/* Display discounted price and original price */}
              <span className="text-2xl font-extrabold text-emerald-600 mr-2">
                ₹{product.price}
              </span>
              <span className="text-base font-medium text-slate-400 line-through">
                ₹{product.originalPrice}
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Add to Cart button is outside the Link so it has its own unique functionality */}
      <div className="p-6 pt-0">
        <button 
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-bold text-base bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onClick={(e) => {
            // Handle add to cart logic here
            console.log(`Adding ${product.name} to cart.`);
            // This event.stopPropagation() prevents the parent Link from being triggered.
            e.stopPropagation();
          }}
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
