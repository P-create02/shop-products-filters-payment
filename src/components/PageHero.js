import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title, product}) => {
  return <Wrapper>
    <div className="section-center">
      <h3>
        {product && <Link to='/'>Products</Link>} {title}
      </h3>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--color);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--back);
  a {
    color: var(--back);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: #fff;
  }
`

export default PageHero
