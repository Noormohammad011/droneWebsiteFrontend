import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PrivateRoute from './privateRoute/PrivateRoute'
import PaymentPage from './pages/PaymentPage'
import OrderPlacePage from './pages/OrderPlacePage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage'
import UserListPage from './pages/UserListPage'


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route
              path='/shipping'
              element={
                <PrivateRoute>
                  <ShippingPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/payment'
              element={
                <PrivateRoute>
                  <PaymentPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/placeorder'
              element={
                <PrivateRoute>
                  <OrderPlacePage />
                </PrivateRoute>
              }
            />
            <Route
              path='/order/:id'
              element={
                <PrivateRoute>
                  <OrderPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/admin/userlist'
              element={
                <PrivateRoute>
                  <UserListPage />
                </PrivateRoute>
              }
            />

            {/* 
            <Route path='/cart/:id' element={<CartPage />} />
            <Route path='/cart/' element={<CartPage />} />
            */}
            <Route path='/cart'>
              <Route path=':id' element={<CartPage />} />
              <Route path='' element={<CartPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
