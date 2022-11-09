import React from 'react'

const About = () => {
  return (
    <div className='about'>
     <div className='container'>
        <div className='row'>
          <div className='col-6 p-25'>
          <h3>About Us</h3>
        <h1>Welcome to maestro pizzini</h1>
        <p>hello everyone! Thanks for visiting our page we are delivering great quality product in very reasonable price</p>
        <div className='about-btn'>
            <a href='' className='btn btn-smart'>READ MORE</a>
        </div>
          </div>
          <div className='col-6'>
            <div className='about-img'>
            <img src='/img/pizza.jpg' alt='Pizza'/>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default About;