export const FETCH_CONVERSION_ATTEMPT = 'FETCH_CONVERSION_ATTEMPT'
export const fetchConversionAttempt = () => ({ type: FETCH_CONVERSION_ATTEMPT })

export const FETCH_CONVERSION_SUCCESS = 'FETCH_CONVERSION_SUCCESS'
export const fetchConversionSuccess = ({ base, rate }) => {
  return {
    type: FETCH_CONVERSION_SUCCESS,
    payload: {
        base,
        rate
    }
  }
}

export const FETCH_CONVERSION_FAILURE = 'FETCH_CONVERSION_FAILURE'
export const fetchConversionFailure = (error) => {
  return {
    type: FETCH_CONVERSION_FAILURE,
    payload: error
  }
}