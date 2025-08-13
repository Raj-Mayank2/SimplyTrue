import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { getProductById, products, categories, filterOptions, filterProducts, sortProducts } from '../data/mockAPI';
import { SlidersHorizontal, Search, X, Filter } from 'lucide-react';

const Snacks = () => {
  // State for managing the filter and sort settings
  const [currentFilters, setCurrentFilters] = useState({
    categories: [],
    priceRange: null,
    calorieRange: null,
    search: '',
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Use useEffect to update the product list whenever filters or sort order change
  useEffect(() => {
    const filtered = filterProducts(products, currentFilters);
    const sorted = sortProducts(filtered, sortBy);
    setDisplayedProducts(sorted);
  }, [currentFilters, sortBy]);

  // Handle changes to category checkboxes
  const handleCategoryChange = (categoryId) => {
    setCurrentFilters(prevFilters => {
      const newCategories = prevFilters.categories.includes(categoryId)
        ? prevFilters.categories.filter(id => id !== categoryId)
        : [...prevFilters.categories, categoryId];
      return { ...prevFilters, categories: newCategories };
    });
  };

  // Handle changes to price range selection
  const handlePriceRangeChange = (range) => {
    setCurrentFilters(prevFilters => ({
      ...prevFilters,
      priceRange: prevFilters.priceRange?.label === range.label ? null : range,
    }));
  };

  // Handle changes to calorie range selection
  const handleCalorieRangeChange = (range) => {
    setCurrentFilters(prevFilters => ({
      ...prevFilters,
      calorieRange: prevFilters.calorieRange?.label === range.label ? null : range,
    }));
  };

  // Handle search
  const handleSearchChange = (e) => {
    setCurrentFilters(prevFilters => ({
      ...prevFilters,
      search: e.target.value,
    }));
  };

  const clearAllFilters = () => {
    setCurrentFilters({
      categories: [],
      priceRange: null,
      calorieRange: null,
      search: '',
    });
  };

  const activeFiltersCount = currentFilters.categories.length + 
    (currentFilters.priceRange ? 1 : 0) + 
    (currentFilters.calorieRange ? 1 : 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-tl from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-emerald-300/15 to-teal-300/15 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        {/* Search & Sort Bar */}
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-200/50 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center gap-4">
              
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400" />
                  <input
                    type="text"
                    placeholder="Search snacks..."
                    value={currentFilters.search}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-emerald-200/50 focus:outline-none focus:ring-3 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all"
                  />
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 pr-10 font-medium text-emerald-700 border border-emerald-200 focus:outline-none focus:ring-3 focus:ring-emerald-500/20 focus:border-emerald-300 cursor-pointer shadow-md hover:shadow-lg transition-all min-w-48"
                >
                  {filterOptions.sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:shadow-lg transition-all relative"
              >
                <Filter size={20} />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Filter Menu */}
        <div className="hidden lg:block bg-white/90 backdrop-blur-md shadow-md border-b border-emerald-200/30">
          <div className="max-w-7xl mx-auto px-6 py-5">
            
            {/* Categories Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold min-w-24">
                <Filter size={16} />
                <span>Categories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentFilters.categories.includes(category.id)
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                        : 'bg-white/80 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Calorie Filters Row */}
            <div className="flex items-center gap-8">
              
              {/* Price Range */}
              <div className="flex items-center gap-3">
                <span className="text-emerald-700 font-medium text-sm min-w-12">Price</span>
                <div className="flex gap-2">
                  {filterOptions.priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => handlePriceRangeChange(range)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        currentFilters.priceRange?.label === range.label
                          ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300 shadow-sm'
                          : 'bg-white/70 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calorie Range */}
              <div className="flex items-center gap-3">
                <span className="text-emerald-700 font-medium text-sm min-w-16">Calories</span>
                <div className="flex gap-2">
                  {filterOptions.calorieRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => handleCalorieRangeChange(range)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        currentFilters.calorieRange?.label === range.label
                          ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300 shadow-sm'
                          : 'bg-white/70 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 hover:border-red-300 transition-all"
                >
                  <X size={14} />
                  Clear All ({activeFiltersCount})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                    <Filter size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Filter Products</h3>
                </div>
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="p-2 hover:bg-emerald-50 rounded-full transition-all"
                >
                  <X size={22} className="text-emerald-600" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
                        currentFilters.categories.includes(category.id)
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Price Range
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => handlePriceRangeChange(range)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        currentFilters.priceRange?.label === range.label
                          ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calorie Range */}
              <div className="mb-8">
                <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Calorie Range
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.calorieRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => handleCalorieRangeChange(range)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        currentFilters.calorieRange?.label === range.label
                          ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="flex-1 py-3 rounded-xl font-semibold text-red-600 bg-red-50 border-2 border-red-200 hover:bg-red-100 transition-all"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Show {displayedProducts.length} Products
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-emerald-600 font-medium">
              {displayedProducts.length} of {products.length} products
              {currentFilters.search && (
                <span className="ml-2 text-emerald-500">for "{currentFilters.search}"</span>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">😔</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">No products found</h3>
              <p className="text-emerald-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Food Elements */}
      <div className="absolute top-32 right-1/4 animate-bounce text-3xl opacity-10">🌰</div>
      <div className="absolute bottom-40 left-1/4 animate-pulse text-3xl opacity-10">🥨</div>
      <div className="absolute top-2/3 right-1/6 animate-bounce text-3xl opacity-10">🍯</div>
      <div className="absolute top-1/4 left-1/5 animate-pulse text-2xl opacity-10">🥜</div>
    </div>
  );
};

export default Snacks;