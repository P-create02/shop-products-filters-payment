import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return <Wrapper className='section section-center'>
    <CartColumns />
    {
      cart.map((item) =>{
        return <CartItem key={item.id} {...item} />
      })
    }
    <hr />
    <div className="link-container">
      <Link to='/' className='link-btn btn'>
        continue shopping
      </Link>
      <button className='link-btn clear-btn' onClick={clearCart}>clear all</button>
    </div>
    <CartTotals />
  </Wrapper>
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    &:hover{
      animation: none;
      background: var(--color);
      color: var(--back);
    }
  }
  .clear-btn {
    background: red;
    color: white;
    text-transform: uppercase;
  }
`
export default CartContent
