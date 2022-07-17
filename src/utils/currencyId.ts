import { Currency, ETHER, Token } from '@quantumdex/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'AME'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
