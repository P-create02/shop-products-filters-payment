import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_free } = useCartContext()

  return <Wrapper>
    <div>
      <article>
        <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
        <p>shipping free : <span>{formatPrice(shipping_free)}</span></p>
        <hr />
        <h4>order total {' '} : <span>{formatPrice(total_amount + shipping_free)}</span></h4>
      </article>
        <Link to='/checkout' className='btn'>
          payment
        </Link>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    background: #fff;
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
    box-shadow: 0 0 20px var(--color);
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    text-align: center;
    font-weight: 700;
    border-style: none;
    background: transparent;
    color: var(--color);
    background: var(--color);
    color: var(--back);
    &:hover{
      background: rgb(70, 70, 70);
      animation: none;
    }
  }
`

export default CartTotals
