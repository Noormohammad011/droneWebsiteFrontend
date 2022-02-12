import React from 'react'
import { Link,NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <img
              src='drone_1.png'
              alt='Drone'
              style={{
                width: '50px',
                height: '50px',
                color: 'white',
              }}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink
                  to='/cart'
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  aria-current='page'
                >
                  <i className='fas fa-shopping-cart mx-1'></i>Cart
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  aria-current='page'
                >
                  <i className='fas fa-user mx-1'></i> Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
