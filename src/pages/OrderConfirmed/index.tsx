import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import ConfirmedOrder from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br /> Farrapos - Porto Alegre, RS
              </RegularText>
            }
            icon={<MapPin weight="fill" />}
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
            icon={<Clock weight="fill" />}
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
            icon={<CurrencyDollar weight="fill" />}
          />
        </OrderDetailsContainer>
        <img src={ConfirmedOrder} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
