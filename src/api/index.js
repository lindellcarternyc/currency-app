import axios from 'axios'

const BASE_URL = `https://api.exchangeratesapi.io/latest`

export const getConversion = async ({ currency1, currency2 }) => {
  const conversionURL = `${BASE_URL}?base=${currency1}&symbols=${currency2}`

  try {
    const { data } = await axios.get(conversionURL)
    return {
      base: {
          code: currency1
      },
      rate: {
          amount: data.rates[currency2],
          code: currency2
      }
    }
  } catch (err) {
    throw err
  }
}