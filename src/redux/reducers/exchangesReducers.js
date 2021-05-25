import {
  GET_EXCHANGES,
  GET_EXCHANGES_ERROR,
  UI_LOADING
} from '../types/index';

const initialState = {
  loading: false,
  exchanges: [],
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
        loading: false,
        exchanges: action.payload
      }
    case GET_EXCHANGES_ERROR:
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