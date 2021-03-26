import { FETCH_CONVERSION_ATTEMPT, FETCH_CONVERSION_SUCCESS, FETCH_CONVERSION_FAILURE } from './actions'

const INITIAL_STORE_STATE = {
  conversion: null,
  loading: false,
  error: null
}

export default function reducer(state = INITIAL_STORE_STATE, action) {
    switch (action.type) {
      case FETCH_CONVERSION_ATTEMPT: {
        return {
          ...state,
          conversion: null,
          loading: true,
          error: null
        }
      }
      case FETCH_CONVERSION_SUCCESS: {
        return {
          ...state,
          conversion: action.payload,
          loading: false,
          error: null
        }
      }
      case FETCH_CONVERSION_FAILURE: {
        return {
          ...state,
          conversion: null,
          loading: false,
          error: action.payload
        }
      }
      default: {
        return state
      }
    }
}