import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'

const Sort = () => {
  const { filtered_products: products, gird_view, setGridView, setListView, sort, updateSort } = useFilterContext()

  return <Wrapper>
    <div className="btn-container">
      <button className={`${gird_view && 'active'}`} onClick={setGridView}>
        <BsFillGridFill />
      </button>

      <button className={`${!gird_view && 'active'}`} onClick={setListView}>
        <BsList />
      </button>
    </div>

    <p>
      {products.length} products found
    </p>
    <hr />

    <form>
      <label htmlFor="sort">sort by </label>
      <select name="sort" id="sort" className='sort-input' value={sort} onChange={updateSort}>
        <option value="price-lowest">Lowest price</option>
        <option value="price-highest">Highest price</option>
        <option value="name-a">name a-z</option>
        <option value="name-z">name z-a</option>
      </select>
    </form>
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;  
      color: var(--color);
      width: 1.5rem;
      border-radius: var(--radius);
      border: none;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1.75rem;
      }
    }
    .active {
      box-shadow: 0 5px 0 var(--color);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: grey;
    background: var(--color);
    border-radius: var(--radius);
    transition: var(--transition);
    option:hover{
      background: var(--back);
    }
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
