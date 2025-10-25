import { useParams, useNavigate } from 'react-router-dom'
import { ShoppingCart, Star, Package, Shield, ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card, CardContent } from '../components/ui/Card'
import { useCartStore } from '../store/useStore'
import { products } from '../data/products'
import { formatPrice } from '../lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCartStore()
  
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/products')}>
            Browse Products
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge variant="secondary" className="w-fit mb-4">
              {product.category}
            </Badge>
            
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-4xl font-bold text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-muted-foreground" />
                <span>
                  {product.stock > 0 ? (
                    <span className="text-green-600 font-medium">
                      In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  addToCart(product)
                  navigate('/checkout')
                }}
                disabled={product.stock === 0}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free standard shipping on all orders over $50
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day return policy for your peace of mind
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Secure Checkout</h3>
              <p className="text-sm text-muted-foreground">
                Your payment information is always protected
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
