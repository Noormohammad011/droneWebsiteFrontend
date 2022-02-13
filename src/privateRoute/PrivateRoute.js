import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from './../components/Loader';

const PrivateRoute = ({ children, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo } = userLogin
  const location = useLocation()
  if (loading) {
    return <Loader />
  }
  if (userInfo) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} />
}

export default PrivateRoute
