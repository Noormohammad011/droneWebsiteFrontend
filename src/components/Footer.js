import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white text-uppercase'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light  m-1' href='#!' role='button'>
            <i className='fab fa-facebook-f'></i>
          </a>

          <a className='btn btn-outline-light  m-1' href='#!' role='button'>
            <i className='fab fa-google'></i>
          </a>

          <a className='btn btn-outline-light  m-1' href='#!' role='button'>
            <i className='fab fa-linkedin-in'></i>
          </a>

          <a className='btn btn-outline-light  m-1' href='#!' role='button'>
            <i className='fab fa-github'></i>
          </a>
        </section>
      </div>

      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Drone World © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
