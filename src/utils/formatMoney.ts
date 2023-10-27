export function formatMoney(value: number) {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
}
