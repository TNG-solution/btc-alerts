import {
  GET_EXCHANGES,
  GET_EXCHANGES_ERROR,
  UI_LOADING,
  GET_PREDICTION,
  GET_PREDICTION_ERROR
} from '../types/index';

const initialState = {
  loading: false,
  exchanges: [],
  prediction: [],
  error: {
    isError: false,
    msg: ""
  }
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case UI_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_EXCHANGES:
      return {
        ...state,
        exchanges: action.payload
      }
    case GET_EXCHANGES_ERROR:
      return {
        ...state,
        error: {
          isError: true, msg: action.payload
        }
      }
    case GET_PREDICTION:
      return {
        ...state,
        loading: false,
        prediction: action.payload
      }
    case GET_PREDICTION_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          isError: true, msg: action.payload
        }
      }
    default:
      return state;
  }
}