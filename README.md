# 🛍️ ShopHere - E-Commerce Platform

A modern, fully-featured e-commerce platform built with React, Vite, and TailwindCSS. ShopHere provides a complete shopping experience with product browsing, cart management, checkout, and user authentication.

## ✨ Features

### 🏪 Core E-Commerce Features
- **Product Catalog**: Browse through a curated collection of products
- **Advanced Filtering**: Filter by category, search, and sort options
- **Product Details**: Detailed product pages with images, descriptions, and reviews
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Checkout Process**: Complete checkout with shipping and payment information
- **Order Confirmation**: Success page with order details

### 🎨 User Experience
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, beautiful interface using shadcn/ui components
- **Smooth Navigation**: React Router for seamless page transitions
- **Real-time Updates**: Cart updates instantly with Zustand state management
- **Persistent Cart**: Cart data saved to localStorage

### 🔐 User Features
- **Authentication**: Login and signup functionality
- **Guest Checkout**: Shop without creating an account
- **User Profile**: Personalized user experience

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Custom components inspired by shadcn/ui
- **State Management**: Zustand with persistence
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
ShopHere/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.jsx    # Navigation header
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Categories.jsx
│   │   └── OrderSuccess.jsx
│   ├── store/
│   │   └── useStore.js   # Zustand store
│   ├── data/
│   │   └── products.js   # Product data
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Key Features Breakdown

### Product Management
- 12 sample products across 4 categories
- Product ratings and reviews
- Stock management
- Category-based filtering

### Shopping Cart
- Add/remove items
- Update quantities
- Real-time price calculations
- Free shipping threshold ($50)
- Tax calculation (10%)

### Checkout Flow
1. Contact information
2. Shipping address
3. Payment details
4. Order confirmation

### State Management
- Cart state persisted to localStorage
- User authentication state
- Global state management with Zustand

## 🎨 Design Features

- **Color Scheme**: Modern blue primary color with clean whites and grays
- **Typography**: Clear hierarchy with bold headings
- **Spacing**: Consistent spacing following design system
- **Components**: Reusable, accessible components
- **Animations**: Smooth hover effects and transitions
- **Icons**: Beautiful Lucide icons throughout

## 🔧 Customization

### Adding Products
Edit `src/data/products.js` to add or modify products:
```javascript
{
  id: 1,
  name: "Product Name",
  price: 99.99,
  category: "Category",
  image: "image-url",
  description: "Description",
  rating: 4.5,
  reviews: 100,
  stock: 50,
}
```

### Modifying Colors
Update `src/index.css` CSS variables to change the color scheme.

### Adding Pages
Create new page components in `src/pages/` and add routes in `src/App.jsx`.

## 🌟 Future Enhancements

- Backend API integration
- Real payment processing
- User profiles and order history
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Advanced search
- Product recommendations
- Multiple payment methods

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and modern web technologies.
