import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { productsData as url } from '../utils/constants'
import {
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  products: [],
  single_products_error: false,
  single_products: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( reducer, initialState)

  const fetchProducts = async(url) =>{
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: url})
  }

  const fetchSingleProduct = async(item) =>{
    try {
      dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: item[0]})

    } catch (error) {
      dispatch({type: GET_SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() =>{
    fetchProducts(url)
    }, [])

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
