import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from './ui/Card'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { useCartStore } from '../store/useStore'
import { formatPrice } from '../lib/utils'

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg group">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          {product.stock < 20 && (
            <Badge className="absolute top-2 right-2" variant="destructive">
              Low Stock
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="flex items-center space-x-1 text-sm mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>
          <p className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
