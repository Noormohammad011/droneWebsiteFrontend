import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }
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
              {userInfo ? (
                <>
                  <li className='nav-item dropdown'>
                    
                    <span
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      {userInfo.name}
                    </span>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li className='nav-item'>
                        <Link
                          to='/profile'
                          type='button'
                          className='btn btn-outline-primary dropdown-item text-center'
                        >
                          Profile
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <button
                          type='button'
                          className='btn btn-outline-danger dropdown-item text-center'
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink
                      to='/login'
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                      aria-current='page'
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <li className='nav-item dropdown mx-2'>
                
                  <span
                    className='nav-link dropdown-toggle'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Admin
                  </span>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li className='nav-item'>
                      <Link
                        to='/admin/userlist'
                        type='button'
                        className='btn btn-outline-primary dropdown-item text-center'
                      >
                        User List
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/admin/productlist'
                        type='button'
                        className='btn btn-outline-primary dropdown-item text-center'
                      >
                        Product List
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/admin/orderlist'
                        type='button'
                        className='btn btn-outline-primary dropdown-item text-center'
                      >
                        Order List
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
