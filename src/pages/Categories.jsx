import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { categories } from '../data/products'

const categoryImages = {
  'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop',
  'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop',
  'Home': 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=500&fit=crop',
  'Sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop',
}

export default function Categories() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop by Category</h1>
          <p className="text-muted-foreground">
            Browse our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((category) => (
            <Card
              key={category.value}
              className="cursor-pointer transition-all hover:shadow-lg group overflow-hidden"
              onClick={() => navigate(`/products?category=${category.value}`)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={categoryImages[category.value]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
