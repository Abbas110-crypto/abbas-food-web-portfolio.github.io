import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
          <div className='navbar-text'>
           <div className='logo'><img src='/img/logo.png' alt='Logo'/></div>
           <ul className='nav-ui1'>
            <li><a href=''>Home</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Shop</a></li>
            <li><a href=''>News</a></li>
            <li><a href=''>Contact</a></li>
           </ul>
          </div>
    </nav>
  )
}

export default Navbar;