# SimplyTrue Foods 🥗

A modern, responsive  platform for a healthy food startup, specializing in wholesome snacks for busy professionals. The website is designed to be visually appealing and user-friendly, with a focus on transparency, nutrition, and a seamless shopping experience.

##Live Link

https://simplytrue.netlify.app/

<img width="1890" height="907" alt="Image" src="https://github.com/user-attachments/assets/7334f955-34f5-4164-8846-691b0b85044c" />


## 🌟 Features

### 🧮 Real-time BMI Calculator
A unique and interactive tool that allows users to calculate their BMI and receive personalized snack suggestions. This feature promotes healthy choices and positions the brand as a helpful health resource.

### 🍽️ "Meal of the Day" Component
A dynamic section on the homepage that highlights a specific snack with a special discount and a real-time countdown timer, creating a sense of urgency and encouraging engagement.

### 🛍️ Interactive Product Catalog
A comprehensive products page with an advanced filtering and sorting system. Users can effortlessly find snacks by:
- Category (nuts, fruits, protein bars, etc.)
- Price range
- Calorie count

### 💬 Responsive Chatbot Mockup
A non-functional but visually complete chatbot interface demonstrates a commitment to customer support and provides a modern user experience.

### 📋 Detailed Product Pages
Each snack has its own page featuring:
- In-depth nutritional information
- Real-time calorie calculator (based on quantity)
- High-quality product images

### ⏳ Progressive Loading Screen
A professional loading screen is displayed on startup, providing a polished and engaging first impression while the site's content loads.

### 📱 Aesthetic & Responsive Design
The entire website is built with a clean, modern aesthetic using Tailwind CSS, ensuring it looks and works great on all devices, from desktop to mobile.

## 🛠️ Tech Stack

- **React** - The core JavaScript library used for building the user interface
- **React Router** - Manages client-side navigation and routing for a smooth, single-page application experience
- **Tailwind CSS** - A utility-first CSS framework for rapid and consistent styling
- **Lucide React** - An icon library that provides clean, modern icons for all interactive elements

## 🚀 Installation and Setup

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/simply-true-foods.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd simply-true-foods
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

Your application will now be running on `http://localhost:5173`.

## 🌐 Deployment

This project can be easily deployed to static site hosting services:

### Recommended Platforms
- **Render**
- **Netlify** 
- **Vercel**

### Deployment Settings (for Render)
- **Build Command:** `npm run build`
- **Publish Directory:** `build`

### Environment Variables
No environment variables are required for basic functionality.

## 📁 Project Structure

```
/simply-true-foods
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── LoadingScreen.jsx
│   │   ├── homepage/
│   │   │   ├── Hero.jsx
│   │   │   ├── BMICalculator.jsx
│   │   │   └── MealOfTheDay.jsx
│   │   └── product/
│   │       ├── ProductCard.jsx
│   │       ├── ProductFilter.jsx
│   │       └── ProductDetails.jsx
│   ├── data/
│   │   └── mockAPI.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Snacks.jsx
│   │   └── ProductPage.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 📸 Screenshots

### Homepage<img width="1890" height="907" alt="Image" src="https://github.com/user-attachments/assets/7334f955-34f5-4164-8846-691b0b85044c" />
*Clean, modern homepage with hero section, BMI calculator, and meal of the day component*

### Product Catalog
<img width="1910" height="905" alt="Image" src="https://github.com/user-attachments/assets/f7409efd-3077-4028-9373-8141a9c7d776" />
*Interactive product catalog with advanced filtering and sorting options*

### Individual Product Page
<img width="1891" height="820" alt="Image" src="https://github.com/user-attachments/assets/ce79c3ac-8bb4-4870-a75d-93a42e2cff4f" />
*Detailed product page with nutritional information and calorie calculator*



### Meal of the day
<img width="1594" height="650" alt="Image" src="https://github.com/user-attachments/assets/fce38965-2ef7-401f-8b81-86d587d9e7d3" />
*Meal of the day with countdown of 24 hrs*

### BMI Calculator

<img width="348" height="580" alt="Image" src="https://github.com/user-attachments/assets/2b1f524a-4985-43fd-8ab2-80df5bfb149c" />

*Interactive BMI calculator with personalized snack recommendations*


## 🎯 Key Features in Detail

### BMI Calculator
- Real-time calculation as users input height and weight
- Personalized snack recommendations based on BMI results
- Educational content about healthy eating habits

### Product Filtering System
-Search Functionality
- Filter by category, price, calories, dietary restrictions
- Sort by popularity, price, nutritional value


### Countdown Timer
- Dynamic countdown for meal of the day

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

### Code Style
- ESLint configuration for consistent code style
- Prettier for automatic code formatting
- Tailwind CSS utility classes for styling



## 🚀 Future Enhancements

- [ ] User authentication and profiles
- [ ] Shopping cart persistence
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Admin dashboard
- [ ] Customer reviews and ratings
- [ ] Email notifications
- [ ] Multi-language support

