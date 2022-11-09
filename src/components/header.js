import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div className='banner'>
      <Navbar />
      <div className='banner-content'>
        <div className='container'>
          <div className='banner-text'>
          <h3>Pizza Delivery</h3>
          <h1>MAESTRO PIZINNI</h1>
          <p>
            hello,Welcome to our pizza delivery serivce
            if you need fresh and good quality pizza then you will come 
            on write place if you have any questions feel free to ask.
          </p>
          <div className='banner-btn'>
            <a href='' className='btn btn-smart'>DELIVERY NOW</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;