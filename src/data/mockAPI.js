// src/data/mockAPI.js
// Simplified Mock API Data for SimplyTrueFoods

// Categories Data
export const categories = [
  {
    id: "nuts-seeds",
    name: "Nuts & Seeds",
    icon: "🥜"
  },
  {
    id: "protein-snacks", 
    name: "Protein Snacks",
    icon: "💪"
  },
  {
    id: "dried-fruits",
    name: "Dried Fruits", 
    icon: "🍓"
  },
  {
    id: "healthy-chips",
    name: "Healthy Chips",
    icon: "🥔"
  },
  {
    id: "granola-bars",
    name: "Granola & Bars",
    icon: "🌾"
  }
];

// Products Data
export const products = [
  // NUTS & SEEDS
  {
    id: 1,
    name: "Mixed Nuts Premium",
    description: "Perfect blend of almonds, cashews, walnuts and pistachios. Great for office snacking.",
    image: "../assets/images/mixed-nuts.jpg",
    price: 299,
    originalPrice: 349,
    calories: 185,
    category: "nuts-seeds"
  },
  {
    id: 2,
    name: "Roasted Almonds",
    description: "California almonds, perfectly roasted and lightly salted. Rich in vitamin E.",
    image: "../assets/images/almonds.jpg",
    price: 249,
    originalPrice: 279,
    calories: 164,
    category: "nuts-seeds"
  },
  {
    id: 3,
    name: "Pumpkin Seeds",
    description: "Crunchy roasted pumpkin seeds with Himalayan salt. High in zinc and magnesium.",
    image: "../assets/images/pumpkin-seeds.jpg",
    price: 199,
    originalPrice: 229,
    calories: 151,
    category: "nuts-seeds"
  },
  {
    id: 4,
    name: "Sunflower Seeds",
    description: "Roasted sunflower seeds with sea salt. Perfect for munching during work.",
    image: "../assets/images/sunflower-seeds.jpg",
    price: 149,
    originalPrice: 179,
    calories: 165,
    category: "nuts-seeds"
  },
  {
    id: 5,
    name: "Cashew Nuts",
    description: "Premium cashews, roasted to perfection. Creamy and satisfying.",
    image: "../assets/images/cashews.jpg",
    price: 399,
    originalPrice: 449,
    calories: 157,
    category: "nuts-seeds"
  },

  // PROTEIN SNACKS
  {
    id: 6,
    name: "Chocolate Protein Bar",
    description: "20g protein bar with rich chocolate flavor. Perfect post-workout snack.",
    image: "../assets/images/chocolate-protein-bar.jpg",
    price: 89,
    originalPrice: 99,
    calories: 220,
    category: "protein-snacks"
  },
  /*{
    id: 7,
    name: "Peanut Protein Balls",
    description: "Homemade protein balls with peanut butter and dates. No added sugar.",
    image: "../assets/images/peanut-protein-balls.jpg",
    price: 159,
    originalPrice: 189,
    calories: 95,
    category: "protein-snacks"
  },
  {
    id: 8,
    name: "Greek Yogurt Bites",
    description: "Freeze-dried Greek yogurt bites. High protein, low sugar.",
    image: "../assets/images/greek-yogurt-bites.jpg",
    price: 129,
    originalPrice: 149,
    calories: 80,
    category: "protein-snacks"
  },
  {
    id: 9,
    name: "Roasted Chickpeas",
    description: "Crunchy roasted chickpeas with Indian spices. High fiber and protein.",
    image: "../assets/images/roasted-chickpeas.jpg",
    price: 119,
    originalPrice: 139,
    calories: 134,
    category: "protein-snacks"
  },
  {
    id: 10,
    name: "Vanilla Protein Bar",
    description: "Smooth vanilla protein bar with 18g protein. Clean ingredients only.",
    image: "../assets/images/vanilla-protein-bar.jpg",
    price: 89,
    originalPrice: 99,
    calories: 210,
    category: "protein-snacks"
  },
  */  
  // DRIED FRUITS
  {
    id: 11,
    name: "Mixed Dried Fruits",
    description: "Combination of dates, figs, apricots and raisins. Natural sweetness.",
    image: "../assets/images/mixed-dried-fruits.jpg",
    price: 229,
    originalPrice: 259,
    calories: 127,
    category: "dried-fruits"
  },
  /*
  {
    id: 12,
    name: "Medjool Dates",
    description: "Premium Medjool dates from Middle East. Naturally sweet and chewy.",
    image: "../assets/images/medjool-dates.jpg",
    price: 349,
    originalPrice: 399,
    calories: 66,
    category: "dried-fruits"
  },
  {
    id: 13,
    name: "Dried Mango Strips",
    description: "Pure dried mango strips with no added sugar. Tropical sweetness.",
    image: "../assets/images/dried-mango.jpg",
    price: 199,
    originalPrice: 229,
    calories: 107,
    category: "dried-fruits"
  },
  {
    id: 14,
    name: "Dried Cranberries",
    description: "Tart and sweet dried cranberries. Great for antioxidants.",
    image: "../assets/images/dried-cranberries.jpg",
    price: 179,
    originalPrice: 209,
    calories: 92,
    category: "dried-fruits"
  },
  {
    id: 15,
    name: "Fig Bites",
    description: "Soft and chewy dried figs. Rich in fiber and potassium.",
    image: "../assets/images/fig-bites.jpg",
    price: 259,
    originalPrice: 289,
    calories: 74,
    category: "dried-fruits"
  },
  */

  // HEALTHY CHIPS
  {
    id: 16,
    name: "Kale Chips",
    description: "Crispy baked kale chips with sea salt. Superfood snacking.",
    image: "../assets/images/kale-chips.jpg",
    price: 149,
    originalPrice: 169,
    calories: 50,
    category: "healthy-chips"
  },
 
  {
    id: 19,
    name: "Banana Chips",
    description: "Crispy baked banana chips. Natural potassium and energy.",
    image: "../assets/images/banana-chips.jpg",
    price: 119,
    originalPrice: 139,
    calories: 147,
    category: "healthy-chips"
  },
  /*
   {
    id: 17,
    name: "Sweet Potato Chips",
    description: "Thinly sliced and baked sweet potato chips. Naturally sweet and crunchy.",
    image: "../assets/images/sweet-potato-chips.jpg",
    price: 129,
    originalPrice: 149,
    calories: 112,
    category: "healthy-chips"
  },
  */
  /*
  {
    id: 18,
    name: "Beetroot Chips",
    description: "Colorful baked beetroot chips. Rich in antioxidants and fiber.",
    image: "../assets/images/beetroot-chips.jpg",
    price: 139,
    originalPrice: 159,
    calories: 106,
    category: "healthy-chips"
  },
  {
    id: 20,
    name: "Coconut Chips",
    description: "Toasted coconut chips with a hint of sea salt. Tropical and crunchy.",
    image: "../assets/images/coconut-chips.jpg",
    price: 159,
    originalPrice: 179,
    calories: 187,
    category: "healthy-chips"
  },
  */

  // GRANOLA & BARS
  
  {
    id: 23,
    name: "Fruit & Nut Bar",
    description: "Mixed fruit and nut bar with dates as natural sweetener.",
    image: "../assets/images/fruit-nut-bar.jpg",
    price: 69,
    originalPrice: 79,
    calories: 168,
    category: "granola-bars"
  },
  /*
  {
    id: 21,
    name: "Oats Granola Bar",
    description: "Homemade granola bar with oats, honey, and mixed nuts. Energy packed.",
    image: "../assets/images/oats-granola-bar.jpg",
    price: 79,
    originalPrice: 89,
    calories: 195,
    category: "granola-bars"
  },
  {
    id: 22,
    name: "Chocolate Granola",
    description: "Dark chocolate granola mix with oats and almonds. Perfect breakfast.",
    image: "../assets/images/chocolate-granola.jpg",
    price: 249,
    originalPrice: 279,
    calories: 158,
    category: "granola-bars"
  },
  {
    id: 24,
    name: "Quinoa Energy Bites",
    description: "Power-packed quinoa energy bites with chia seeds and coconut.",
    image: "../assets/images/quinoa-energy-bites.jpg",
    price: 149,
    originalPrice: 169,
    calories: 89,
    category: "granola-bars"
  },
  {
    id: 25,
    name: "Muesli Mix",
    description: "Traditional muesli with oats, dried fruits, and nuts. Add milk and enjoy.",
    image: "../assets/images/muesli-mix.jpg",
    price: 199,
    originalPrice: 229,
    calories: 142,
    category: "granola-bars"
  }
    */
];

// Filter Options
export const filterOptions = {
  calorieRanges: [
    { label: "Under 100", min: 0, max: 100 },
    { label: "100-200", min: 100, max: 200 },
    { label: "200-300", min: 200, max: 300 },
    { label: "300+", min: 300, max: 1000 }
  ],
  priceRanges: [
    { label: "Under ₹100", min: 0, max: 100 },
    { label: "₹100-200", min: 100, max: 200 },
    { label: "₹200-300", min: 200, max: 300 },
    { label: "₹300+", min: 300, max: 1000 }
  ],
  sortOptions: [
    { value: "popularity", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "calories-low", label: "Calories: Low to High" },
    { value: "calories-high", label: "Calories: High to Low" },
    { value: "name", label: "Name A-Z" }
  ]
};

// Meal of the Day Data
export const mealOfTheDayOptions = [
  {
    id: 1,
    productId: 1,
    specialPrice: 249,
    discount: 29,
    reason: "Perfect office snack for Monday motivation!"
  },
  {
    id: 6,
    productId: 6,
    specialPrice: 69,
    discount: 22,
    reason: "Fuel your Tuesday workout with protein!"
  },
  {
    id: 11,
    productId: 11,
    specialPrice: 179,
    discount: 22,
    reason: "Mid-week sweetness to keep you going!"
  },
  {
    id: 16,
    productId: 16,
    specialPrice: 119,
    discount: 20,
    reason: "Thursday green goodness for health!"
  },
  {
    id: 21,
    productId: 21,
    specialPrice: 59,
    discount: 25,
    reason: "Friday energy boost for weekend prep!"
  }
];

// User Data Template
export const userDataTemplate = {
  profile: {
    name: "",
    email: "",
    phone: ""
  },
  goals: {
    dailyCalories: 2000,
    primary: "general-health" // weight-loss, muscle-gain, general-health
  },
  nutritionTracking: {
    today: {
      date: new Date().toDateString(),
      consumedCalories: 0,
      snacks: []
    }
  },
  favorites: [],
  cart: []
};

// Helper Functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getMealOfTheDay = () => {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const mealOption = mealOfTheDayOptions[today % mealOfTheDayOptions.length];
  const product = getProductById(mealOption.productId);
  
  return {
    ...product,
    specialPrice: mealOption.specialPrice,
    specialDiscount: mealOption.discount,
    reason: mealOption.reason,
    timeLeft: getTimeUntilMidnight()
  };
};

export const getTimeUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setDate(now.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);
  
  const diff = midnight - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
};

export const filterProducts = (products, filters) => {
  return products.filter(product => {
    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(product.category)) return false;
    }
    
    // Price filter
    if (filters.priceRange) {
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
    }
    
    // Calorie filter
    if (filters.calorieRange) {
      if (product.calories < filters.calorieRange.min || product.calories > filters.calorieRange.max) {
        return false;
      }
    }
    
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      if (!product.name.toLowerCase().includes(searchTerm) && 
          !product.description.toLowerCase().includes(searchTerm)) {
        return false;
      }
    }
    
    return true;
  });
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'calories-low':
      return sorted.sort((a, b) => a.calories - b.calories);
    case 'calories-high':
      return sorted.sort((a, b) => b.calories - a.calories);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};
