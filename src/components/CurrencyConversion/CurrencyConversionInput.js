import CurrencyLabel from './CurrencyConversionLabel'

import { InputStyles } from '../styles'

export default function CurrencyConversion(props) {
  const { currency, id, onChange } = props
  return (
    <div style={{ marginBottom: '0.5rem', width: '80%' }}>
      <CurrencyLabel currency={currency} id="currency1" />
      <input 
        style={{
          ...InputStyles,
          width: '100%',
          boxSizing: 'border-box'
        }} 
        type="number" 
        value={currency.amount} 
        onChange={onChange} 
        name={id}
        id={id}
      />
    </div>
  )
}