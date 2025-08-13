import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/mockAPI.js';
import { ShoppingCart, Star, Plus, Minus, Heart } from 'lucide-react';

// --- IMPORTANT: The correct way to handle images in a React app.
// We import all images to get a valid, web-accessible URL.
import mixedNutsImage from '../assets/images/mixed-nuts.jpg';
import almondsImage from '../assets/images/almonds.jpg'
import pumpkinSeedsImage from '../assets/images/pumpkin-seeds.jpg';
import sunflowerSeedsImage from '../assets/images/sunflower-seeds.jpg';
import cashewsImage from '../assets/images/cashews.jpg';
import chocolateProteinBarImage from '../assets/images/chocolate-protein-bar.jpg';
import peanutProteinBallsImage from '../assets/images/peanut-protein-balls.jpg';
import greekYogurtBitesImage from '../assets/images/greek-yogurt-bites.jpg';
//import roastedChickpeasImage from '../assets/images/roasted-chickpeas.jpg';
//import vanillaProteinBarImage from '../assets/images/vanilla-protein-bar.jpg';
import mixedDriedFruitsImage from '../assets/images/mixed-dried-fruits.jpg';
//import medjoolDatesImage from '../assets/images/medjool-dates.jpg';
//import driedMangoImage from '../assets/images/dried-mango.jpg';
//import driedCranberriesImage from '../assets/images/dried-cranberries.jpg';
//import figBitesImage from '../assets/images/fig-bites.jpg';
import kaleChipsImage from '../assets/images/kale-chips.jpg';
//import sweetPotatoChipsImage from '../assets/images/sweet-potato-chips.jpg';
//import beetrootChipsImage from '../assets/images/beetroot-chips.jpg';
import bananaChipsImage from '../assets/images/banana-chips.jpg';
//import coconutChipsImage from '../assets/images/coconut-chips.jpg';
//import oatsGranolaBarImage from '../assets/images/oats-granola-bar.jpg';
//import chocolateGranolaImage from '../assets/images/chocolate-granola.jpg';
import fruitNutBarImage from '../assets/images/fruit-nut-bar.jpg';
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


const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // New state for calculated nutrition values
  const [calculatedNutrition, setCalculatedNutrition] = useState({
    calories: 0,
    protein: '0g',
    carbohydrates: '0g',
    fat: '0g',
    fiber: '0g',
    sodium: '0mg'
  });

  // Calculate nutrition facts based on quantity
  const calculateNutrition = (product, newQuantity) => {
    if (!product) return;

    // Helper to extract numeric value from string (e.g., '8g' -> 8)
    const getNumericValue = (str) => parseFloat(str) || 0;

    setCalculatedNutrition({
      calories: product.calories * newQuantity,
      protein: `${getNumericValue(product.nutritionFacts?.protein) * newQuantity}g`,
      carbohydrates: `${getNumericValue(product.nutritionFacts?.carbohydrates) * newQuantity}g`,
      fat: `${getNumericValue(product.nutritionFacts?.fat) * newQuantity}g`,
      fiber: `${getNumericValue(product.nutritionFacts?.fiber) * newQuantity}g`,
      sodium: `${getNumericValue(product.nutritionFacts?.sodium) * newQuantity}mg`
    });
  };

  useEffect(() => {
    // Fetch product data on component mount
    setTimeout(() => {
      const foundProduct = getProductById(parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        // Initial calculation with a quantity of 1
        calculateNutrition(foundProduct, 1);
      } else {
        navigate('/products');
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);
  
  // Recalculate nutrition whenever the quantity changes
  useEffect(() => {
    if (product) {
      calculateNutrition(product, quantity);
    }
  }, [quantity, product]);


  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const imageSrc = productImages[product?.id];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 font-['Inter'] text-2xl text-slate-700">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-['Inter'] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- Product Image Gallery --- */}
            <div className="flex flex-col items-center">
              <img 
                src={imageSrc}
                alt={product.name} 
                className="w-full h-96 object-cover rounded-xl shadow-md border border-slate-200"
              />
            </div>

            {/* --- Product Details and Actions --- */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Playfair Display'] text-slate-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} />
                </div>
                <span className="text-slate-600 text-sm">(75 reviews)</span>
              </div>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-extrabold text-emerald-600">
                  ₹{product.price}
                </span>
                <span className="text-xl font-medium text-slate-400 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-sm font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
                  -15%
                </span>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 bg-slate-100 rounded-full px-2 py-1 shadow-sm">
                  <button onClick={() => handleQuantityChange('decrement')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <Minus size={16} />
                  </button>
                  <span className="text-xl font-semibold text-slate-800 w-8 text-center">{quantity}</span>
                  <button onClick={() => handleQuantityChange('increment')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
              
              {/* Add to Favorites button */}
              <div className="mb-8">
                <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                  <span>Add to Favorites</span>
                </button>
              </div>

              {/* Detailed Nutrition Facts */}
              <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Nutrition Facts (for {quantity} serving{quantity > 1 ? 's' : ''})</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                  <div><span className="font-semibold">Calories:</span> {calculatedNutrition.calories} kcal</div>
                  <div><span className="font-semibold">Protein:</span> {calculatedNutrition.protein}</div>
                  <div><span className="font-semibold">Carbs:</span> {calculatedNutrition.carbohydrates}</div>
                  <div><span className="font-semibold">Fat:</span> {calculatedNutrition.fat}</div>
                  <div><span className="font-semibold">Fiber:</span> {calculatedNutrition.fiber}</div>
                  <div><span className="font-semibold">Sodium:</span> {calculatedNutrition.sodium}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
