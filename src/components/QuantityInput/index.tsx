import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'small' | 'medium'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      {/* revisar depois se o disabled pode ser quantity <= 1 */}
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
