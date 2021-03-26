import React, { useState } from 'react'
import { connect } from 'react-redux'

import { fetchConversion } from '../store/thunks'

import { InputDivStyles, InputLabelStyles, InputStyles } from './styles'

import { CURRIENCIES  } from '../constants/curreny-codes'

const CURRENCY_1_OPTIONS = Object.keys(CURRIENCIES).sort()

const INITIAL_FORM_VALUES = {
  currency1: '',
  currency2: ''
}

const getCurrency1Options = () => {
  return CURRENCY_1_OPTIONS.map(curCode => (
    <option key={curCode} value={curCode}>{curCode} - {CURRIENCIES[curCode].name}</option>
  ))
}

const getCurrency2Options = (currency1) => {
  return CURRENCY_1_OPTIONS.filter(curCode => curCode !== currency1)
    .map(curCode => {
        return (
            <option key={curCode} value={curCode}>{curCode} - {CURRIENCIES[curCode].name}</option>
        )
    })
}

export const CurrencyForm = (props) => {
  const { onSubmit } = props
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)

  const isValid = () => {
    return formValues.currency1 && formValues.currency2
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit(formValues)
    setFormValues({ currency1: '', currency2: '' })
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target

    return setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit}
      style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '1rem',
          borderBottom: `1px solid #F3F7F0`,
          paddingBottom: '1rem'
      }}
    >
      <div style={InputDivStyles}>
        <label style={InputLabelStyles} htmlFor="currency1">Currency 1:</label>
        <select style={InputStyles} onChange={handleChange} id="currency1" name="currency1" value={formValues.currency1}>
            <option value="">---</option>
            {getCurrency1Options()}
        </select>
      </div>
      <div style={InputDivStyles}>
        <label style={InputLabelStyles} htmlFor="currency2">Currency 2:</label>
        <select style={InputStyles} onChange={handleChange} id="currency2" name="currency2" value={formValues.currency2}>
            <option value="">---</option>
            {getCurrency2Options(formValues.currency1)}
        </select>
      </div>
        <button style={{
          color: '#F3F7F0',
          backgroundColor: 'transparent',
          outline: 'none',
          border: '1px solid #F3F7F0',
          padding: `0.5rem 0.75rem`,
          textTransform: 'uppercase'
        }}type="submit" disabled={!isValid()}>Get Rate</button>
    </form>
  )
}

export default connect(null, { 
  onSubmit: (currencies) => fetchConversion(currencies)
})(CurrencyForm)