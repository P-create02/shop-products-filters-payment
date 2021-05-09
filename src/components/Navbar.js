import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingBasket, FaCreditCard } from 'react-icons/fa'
import { GiShop } from 'react-icons/gi'
import { useCartContext } from '../context/cart_context'

const Nav = () => {
  const { total_items } = useCartContext()

  return <Wrapper>
      <ul className="nav-links">
          <li>
            <Link to='/'><GiShop /></Link>
          </li>
          <li>
            <Link to='/cart'>
              <FaShoppingBasket className='bin'/>
              <span className="value">
                { total_items }
              </span>
            </Link>
          </li>
          <li>
            <Link to='/checkout'><FaCreditCard /></Link>
          </li>
      </ul>
  </Wrapper>
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  .value{
    font-size: 1.25rem;
    font-weight: 600;
  }
  .nav-links{
    display: flex;
    li{
      padding: 0 2rem;
      svg{
        font-size: 2rem;
        color: var(--color);
        transition: var(--transition);
        &:hover{
          box-shadow: 0 7px 0 var(--color);
        }
      }
    }
  }
`

export default Nav
