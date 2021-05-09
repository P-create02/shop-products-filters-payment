import React from 'react'
import styled from 'styled-components'
import {images} from '../utils/constants'

const ProductImages = ({ image }) => { 
  return <Wrapper>
    <img src={image} alt='main'className='main'/>
    <div className="gallery">
      <img src={image} alt='main'className='main active'/>
      {images.map((img, index) =>{
        return <img src={img.img} alt='photo' key={index} />
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--color);
    box-shadow: 0 0 10px var(--color);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
