import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart
        const existingItem = cart.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.id !== productId) })
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
        } else {
          set({
            cart: get().cart.map(item =>
              item.id === productId ? { ...item, quantity } : item
            ),
          })
        }
      },
      clearCart: () => set({ cart: [] }),
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    })
)

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))
