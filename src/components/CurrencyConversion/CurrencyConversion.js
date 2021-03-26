import { useState } from 'react'

import { CURRIENCIES } from '../../constants/curreny-codes'

import CurrencyConversionInput from './CurrencyConversionInput'

const useCurrencies = ({ conversion }) => {
  const [{ currency1, currency2 }, setCurrencies] = useState(() => {
    return {
      currency1: {
        name: CURRIENCIES[conversion.base.code].name,
        code: conversion.base.code,
        amount: 1
      },
      currency2: {
        name: CURRIENCIES[conversion.rate.code].name,
        code: conversion.rate.code,
        amount: conversion.rate.amount
      }
    }
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    let currency1Amount
    let currency2Amount
    
    if (name === 'currency1') {
      currency1Amount = parseFloat(value)
      currency2Amount = currency1Amount * conversion.rate.amount
    } else if (name === 'currency2') {
      currency2Amount = parseFloat(value)
      currency1Amount = currency2Amount / conversion.rate.amount
    }

    setCurrencies(current => {
      return {
        currency1: {
          code: current.currency1.code,
          amount: currency1Amount
        },
        currency2: {
          code: current.currency2.code,
          amount: currency2Amount
        }
      }
    })
  }

  return [{ currency1, currency2 }, handleChange]
}

const CurrencyConversion = (props) => {
  const [{ currency1, currency2 }, handleChange] = useCurrencies(props)

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <CurrencyConversionInput 
          id="currency1"
          currency={currency1}
          onChange={handleChange}
        />
        <div> = </div>
        <CurrencyConversionInput 
          id="currency2"
          currency={currency2}
          onChange={handleChange}
        />
    </div>
  )
}

export default CurrencyConversion