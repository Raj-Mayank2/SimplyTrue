import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/homepage/HeroSection';
import AboutUsSection from '../components/homepage/AboutUsSection';
import WhySimplyTrue from '../components/homepage/WhySimplyTrue';
import MealOfTheDay from '../components/homepage/MealOfTheDay';

// Note: These components will be created in future steps
// import FeaturedProducts from '../components/homepage/FeaturedProducts';
// import CategoriesSection from '../components/homepage/CategoriesSection';

const Home = () => {
  return (
    <div className="bg-white">
      {/* The main navigation bar for the entire site */}
      

      {/* --- Main Content of the Homepage --- */}
      <main>
        {/* The primary, high-impact hero section */}
        <HeroSection />

        {/* The dynamic "Meal of the Day" section */}
        

        {/* This is a placeholder for the Featured Products section. */}
        {/* <FeaturedProducts /> */}
        
        {/* A section that highlights the brand's mission and story */}
        <AboutUsSection />

        <MealOfTheDay />

        {/* A section explaining the brand's unique value propositions */}
        <WhySimplyTrue />

        {/* This is a placeholder for the snack categories section. */}
        {/* <CategoriesSection /> */}
      </main>

      {/* The footer section for company information and links */}
      
    </div>
  );
};

export default Home;
