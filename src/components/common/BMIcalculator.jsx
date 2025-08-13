import React, { useState } from 'react';
import { Leaf, Award, BarChart3, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const BMICalculator = () => {
  // State to control the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);
  
  // State for user inputs: weight in kg, height in cm
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  
  // State for the calculated result and message
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Mock data for suggestions based on BMI category
  const mockSuggestions = {
    underweight: [
      { name: "Mixed Nuts Premium", link: "/products/1", emoji: "🌰" },
      { name: "Chocolate Protein Bar", link: "/products/6", emoji: "🍫" },
      { name: "Oats Granola Bar", link: "/products/21", emoji: "🌾" }
    ],
    normal: [
      { name: "Mixed Dried Fruits", link: "/products/11", emoji: "🍓" },
      { name: "Roasted Chickpeas", link: "/products/9", emoji: "🫘" },
      { name: "Kale Chips", link: "/products/16", emoji: "🥬" }
    ],
    overweight: [
      { name: "Sweet Potato Chips", link: "/products/17", emoji: "🍠" },
      { name: "Greek Yogurt Bites", link: "/products/8", emoji: "🥛" },
      { name: "Roasted Almonds", link: "/products/2", emoji: "🥜" }
    ]
  };

  const calculateBmi = () => {
    // Basic validation
    if (!weight || !height) {
      setBmi(null);
      setMessage("Please enter both height and weight.");
      setSuggestions([]);
      return;
    }
    
    // Calculate BMI. Height is in cm, so we convert it to meters.
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);
    
    // Determine the result message and suggestions
    if (calculatedBmi < 18.5) {
      setMessage("You are in the Underweight range. Consider adding some calorie-dense, nutritious snacks to your diet.");
      setSuggestions(mockSuggestions.underweight);
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setMessage("You are in the Normal range. Keep up the good work with balanced, healthy snacks!");
      setSuggestions(mockSuggestions.normal);
    } else {
      setMessage("You are in the Overweight range. Focus on nutrient-rich, low-calorie snacks and a balanced diet.");
      setSuggestions(mockSuggestions.overweight);
    }
  };

  // Reset the calculator state when the modal is closed
  const handleClose = () => {
    setIsOpen(false);
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
    setSuggestions([]);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-['Inter']">
      {/* --- BMI Calculator Modal --- */}
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform transition-all duration-300 scale-100 mb-4">
          
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <BarChart3 size={20} />
              <span>BMI Calculator</span>
            </h3>
            <button onClick={handleClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Modal Content */}
          <div className="p-4 space-y-4">
            <div className="flex flex-col text-left">
              <label htmlFor="weight" className="text-slate-700 font-medium mb-1 text-sm">Weight (kg)</label>
              <input 
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g., 70"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-shadow text-sm"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="height" className="text-slate-700 font-medium mb-1 text-sm">Height (cm)</label>
              <input 
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g., 175"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-shadow text-sm"
              />
            </div>
            <button 
              onClick={calculateBmi}
              className="w-full mt-2 px-4 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Calculate BMI
            </button>
            
            {/* Results and Suggestions */}
            <div className="text-center">
              {bmi && (
                <>
                  <h3 className="text-xl font-bold text-slate-800">Your BMI is:</h3>
                  <p className="text-4xl font-extrabold text-emerald-600">{bmi}</p>
                  <p className="text-sm text-slate-700 font-medium mb-2">{message}</p>
                  
                  {suggestions.length > 0 && (
                    <>
                      <h4 className="text-md font-bold text-slate-800 mt-3 mb-2">Suggested Snacks:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {suggestions.map((snack, index) => (
                          <Link 
                            key={index}
                            to={snack.link}
                            className="bg-slate-100 px-3 py-1 rounded-full shadow-sm text-xs text-slate-700 hover:bg-emerald-50 transition-colors"
                            onClick={handleClose}
                          >
                            <span className="mr-1">{snack.emoji}</span>
                            <span>{snack.name}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
              {!bmi && message && (
                <p className="text-sm text-red-500 font-medium">{message}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- Floating BMI Calculator Button --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <BarChart3 size={28} />
        </button>
      )}
    </div>
  );
};

export default BMICalculator;
