import { 
  fetchConversionAttempt,
  fetchConversionSuccess,
  fetchConversionFailure
} from './actions'

import { getConversion } from '../api'

export const fetchConversion = ({ currency1, currency2 }) => (dispatch) => {
  dispatch(fetchConversionAttempt())

  getConversion({ currency1, currency2 })
      .then(conversion => dispatch(fetchConversionSuccess(conversion)))
      .catch(err => dispatch(fetchConversionFailure(err.toSting())))
}