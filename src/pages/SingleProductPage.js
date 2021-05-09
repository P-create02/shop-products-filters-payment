import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { productsData as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const [loading, setLoading] = React.useState(true)

  const { single_products_error, single_products, fetchSingleProduct } = useProductsContext()

  useEffect(() =>{
    fetchSingleProduct(url.filter((item) => item.id === id))
    console.log(url.filter((item) => item.id === id));
    // eslint-disable-next-line
  }, [id])

  useEffect(() =>{
    if(single_products_error){
      setTimeout(() =>{
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [single_products_error])

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [])

  if(loading){
    return <Loading />
  }

  if(single_products_error){
    return <Error />
  }

  const { name, price, stock, stars, reviews, id: newId, company, image} = single_products

  return <Wrapper>
    <PageHero title={name} product />
    <div className="section section-center page">
      <Link to='/' className='btn'>
        back to products
      </Link>
      <div className="product-center">
        <ProductImages image={image} />
        <section className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae rerum cumque quas animi dicta, eaque atque autem dolorum voluptatum iusto dolor ut enim laborum, ipsum tempore magnam reiciendis esse quo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae rerum cumque quas animi dicta, eaque atque autem dolorum voluptatum iusto dolor ut enim laborum, ipsum tempore magnam reiciendis esse quo.</p>
          <p className="info">
            <span>Avaliable : </span>
            {stock > 0 ? 'In stock' : 'Out of stock'}
          </p>
          <p className="info">
            <span>SKU : </span>
            {newId}
          </p>
          <p className="info">
            <span>Brand : </span>
            {company}
          </p>
          <hr/>
          {stock > 0 && <AddToCart single_products={single_products} />}
        </section>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: gray;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
export default SingleProductPage