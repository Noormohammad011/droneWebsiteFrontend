import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center text-center'
      style={{ height: '80vh' }}
    >
      <div>
        <h1>
          404 Not <i className='fas fa-bomb'>Found</i>
        </h1>
        <h3>The page you are looking for is not available</h3>
        <Link to='/'>
          <button type='button' className='btn btn-outline-dark'>
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
