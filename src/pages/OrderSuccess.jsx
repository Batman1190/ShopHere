import { useNavigate } from 'react-router-dom'
import { CheckCircle, Package } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

export default function OrderSuccess() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. We've received your order and will process it shortly.
          </p>

          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Package className="h-5 w-5 text-primary" />
              <span>Order #SH-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            A confirmation email has been sent to your email address with your order details.
          </p>

          <div className="space-y-3">
            <Button className="w-full" onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
            <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
