import React from 'react'

const Menu = () => {
  return (
    <div className='about'>
     <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='about-img'>
            <img src='/img/pizza.jpg' alt='Pizza'/>
            </div>
          </div>
          <div className='col-6 p-25'>
          <h3>The Pizza Menu</h3>
        <h1>BBQ CHEESE PIZZA</h1>
        <p>hello everyone! We currently open new deal for our BBQ CHEESE PIZZA (Buy 1 Get 1 Free) </p>
        <div className='about-btn'>
            <a href='' className='btn btn-smart'>VIEW MORE</a>
        </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Menu;