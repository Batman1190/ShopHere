import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import OrderSuccess from './pages/OrderSuccess'
import Categories from './pages/Categories'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">ShopHere</h3>
                <p className="text-sm text-muted-foreground">
                  Your premium e-commerce destination for quality products at great prices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/products" className="hover:text-primary">All Products</a></li>
                  <li><a href="/categories" className="hover:text-primary">Categories</a></li>
                  <li><a href="/products" className="hover:text-primary">New Arrivals</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                  <li><a href="#" className="hover:text-primary">Shipping Info</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-primary">Return Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 ShopHere. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
