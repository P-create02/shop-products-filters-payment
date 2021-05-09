import {
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => { 
  switch(action.type){
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload }

    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, single_products_loading: false, single_products: action.payload}

    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, single_products_loading: false, single_products_error: true}

    default: 
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default products_reducer
