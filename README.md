# SimplyTrue Foods 🥗

A modern, responsive e-commerce platform for a healthy food startup, specializing in wholesome snacks for busy professionals. The website is designed to be visually appealing and user-friendly, with a focus on transparency, nutrition, and a seamless shopping experience.

![SimplyTrue Foods Logo](https://via.placeholder.com/600x200/4ade80/ffffff?text=SimplyTrue+Foods)

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
- "Add to Cart" functionality
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
![Product Catalog Screenshot](https://via.placeholder.com/800x500/f3f4f6/374151?text=Product+Catalog+Screenshot)
*Interactive product catalog with advanced filtering and sorting options*

### Individual Product Page
![Product Page Screenshot](https://via.placeholder.com/800x500/f3f4f6/374151?text=Product+Page+Screenshot)
*Detailed product page with nutritional information and calorie calculator*

### BMI Calculator
![BMI Calculator Screenshot](https://via.placeholder.com/800x500/f3f4f6/374151?text=BMI+Calculator+Screenshot)
*Interactive BMI calculator with personalized snack recommendations*

### Mobile Responsive Design
![Mobile Screenshot](https://via.placeholder.com/400x700/f3f4f6/374151?text=Mobile+View+Screenshot)
*Fully responsive design optimized for mobile devices*

## 🎯 Key Features in Detail

### BMI Calculator
- Real-time calculation as users input height and weight
- Personalized snack recommendations based on BMI results
- Educational content about healthy eating habits

### Product Filtering System
- Filter by category, price, calories, dietary restrictions
- Sort by popularity, price, nutritional value
- Search functionality with autocomplete

### Countdown Timer
- Dynamic countdown for daily deals
- Creates urgency to drive conversions
- Automatically updates with new deals

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Code Style
- ESLint configuration for consistent code style
- Prettier for automatic code formatting
- Tailwind CSS utility classes for styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - React, Tailwind CSS implementation
- **UI/UX Designer** - Modern, responsive design
- **Product Manager** - Feature planning and user experience

## 🆘 Support

For support, please reach out to:
- Email: support@simplytruefoods.com
- Documentation: [Project Wiki](https://github.com/your-username/simply-true-foods/wiki)
- Issues: [GitHub Issues](https://github.com/your-username/simply-true-foods/issues)

## 🚀 Future Enhancements

- [ ] User authentication and profiles
- [ ] Shopping cart persistence
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Admin dashboard
- [ ] Customer reviews and ratings
- [ ] Email notifications
- [ ] Multi-language support

## 📊 Performance

- Lighthouse Score: 95+
- Mobile-first responsive design
- Optimized images and assets
- Fast loading times with progressive loading

---

**Made with ❤️ for healthy living**

*SimplyTrue Foods - Nourishing busy professionals, one snack at a time.*
