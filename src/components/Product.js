import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating';
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          variant='top'
          src={product.image}
          style={{ height: '200px' }}
        />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className='text-decoration-none text-dark'
        >
          <Card.Title as='div'>
            <strong>{fn(product.name, 20)}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

function fn(text, count) {
  return text.slice(0, count) + (text.length > count ? '...' : '')
}


export default Product
