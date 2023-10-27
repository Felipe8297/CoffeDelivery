import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

import { RegularText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
