import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

interface CartContextProviderProps {
  children: ReactNode
}

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
