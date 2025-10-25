import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Search, Store } from 'lucide-react'
import { Button } from './ui/Button'
import { useCartStore, useAuthStore } from '../store/useStore'
import { Badge } from './ui/Badge'

export default function Header() {
  const navigate = useNavigate()
  const { getTotalItems } = useCartStore()
  const { isAuthenticated, user, logout } = useAuthStore()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2 mr-8">
          <Store className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">ShopHere</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/categories" className="transition-colors hover:text-primary">
            Categories
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/search')}
            className="relative"
          >
            <Search className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">{user?.name || 'Profile'}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button onClick={() => navigate('/login')} variant="ghost">
              <User className="h-5 w-5 mr-2" />
              Login
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
